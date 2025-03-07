import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import { useEffect, useState } from "react";
import { FederalIdentificationDTO } from "../../../../dtos/cpf";
import { IOrder } from "../../../../dtos/order";
import { Product } from "../../../../dtos/product";
import LoadingBackdrop from "../../../../shared/components/LoadingBackdrop";
import { PackageCard } from "../../../../shared/components/PackageCard";
import { useAuth } from "../../../../shared/context/AuthContext";
import { useOrder } from "../../../../shared/context/OrderContext";
import PaymentQRCode from "../PaymentQRCode";
import {
  Badge,
  CloseButton,
  DesktopTitle,
  ModalContainer,
  ModalOverlay,
  SectionContainer,
  ShowMoreButton,
  UserInfo,
} from "./styles";

interface IModalProps {
  isOpen: boolean;
  onClose: () => void;
  products: Array<Product>;
  userData?: FederalIdentificationDTO;
}

const Modal = ({ isOpen, onClose, products, userData }: IModalProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [order, setOrder] = useState<IOrder | null>(null);
  const [updatedUserData, setUpdatedUserData] = useState<
    FederalIdentificationDTO | undefined
  >(undefined);

  // Por padrão, não exibimos todos os dados do usuário
  const [showAllDetails, setShowAllDetails] = useState(false);

  const { isAuthenticated, login } = useAuth();
  const { sendOrder, checkFederalIdentification } = useOrder();
  const [selectedProductId, setSelectedProductId] = useState<string | null>(
    null
  );

  async function generateOrder(id: string, accessToken: string, userId: string) {
    setLoading(true);
    try {
      if (!accessToken) {
        console.error("Erro: Tentativa de gerar pedido sem token válido.");
        return;
      }

      const response = await sendOrder(
        {
          productId: id,
          federalId: userData?.id || "",
          userId,
        },
        accessToken
      );

      setOrder(response);
    } catch (e) {
      console.error("Erro ao gerar pedido:", e);
    } finally {
      setLoading(false);
    }
  }

  async function authSuccess(data: CredentialResponse) {
    console.log("Autenticando usuário...", data);
    setLoading(true);

    try {
      const userLogado = await login(data.credential);
      if (!userLogado || !userLogado.accessToken) {
        console.error("Erro: Usuário não autenticado corretamente.");
        return;
      }

      console.log("Usuário autenticado com sucesso:", userLogado);

      if (selectedProductId) {
        console.log("Gerando pedido para o produto:", selectedProductId);
        await generateOrder(
          selectedProductId,
          userLogado.accessToken,
          userLogado.user.id
        );
      }
    } catch (e) {
      console.error("Erro ao autenticar:", e);
    } finally {
      setLoading(false);
    }
  }

  const handleProductSelect = (id: string) => {
    setSelectedProductId(id);
  };

  const fetchFederalIdentification = async (orderId: string) => {
    try {
      console.log("Buscando federalIdentification...");
      const response = await checkFederalIdentification(orderId);
      if (response) {
        console.log("FederalIdentification encontrado:", response);
        setUpdatedUserData(response);
      }
    } catch (error) {
      console.error("Erro ao buscar dados do federalIdentification:", error);
    }
  };

  let interval: ReturnType<typeof setTimeout>;
  useEffect(() => {
    if (order && order.id) {
      interval = setInterval(async () => {
        await fetchFederalIdentification(order.id);
      }, 10000);

      return () => clearInterval(interval);
    }
  }, [order]);

  useEffect(() => {
    if (updatedUserData?.id) {
      clearInterval(interval);
    }
  }, [updatedUserData]);

  if (!isOpen) return null;

  // Renderiza detalhes do usuário: se showAllDetails for false, exibe só uma linha.
  const renderUserData = (data: FederalIdentificationDTO) => {
    if (!showAllDetails) {
      return (
        <>
          <p>Dados do usuário confirmados.</p>
          <ShowMoreButton onClick={() => setShowAllDetails(true)}>
            Ver mais detalhes
          </ShowMoreButton>
        </>
      );
    }

    // Se showAllDetails for true, exibimos tudo:
    return (
      <>
        <p>
          <strong>Nome:</strong> {data.nome}
        </p>
        <p>
          <strong>CPF:</strong> {data.cpfCnpj}
        </p>
        <p>
          <strong>Email:</strong> {data.email || "N/A"}
        </p>
        <p>
          <strong>Telefone:</strong> {data.telefone || "N/A"}
        </p>
        <p>
          <strong>Data de nascimento:</strong> {data.dataNascimento || "N/A"}
        </p>
        <p>
          <strong>País de nascimento:</strong> {data.paisNascimento || "N/A"}
        </p>
        <p>
          <strong>Endereço:</strong> {data.logradouro || "N/A"}
        </p>
        <p>
          <strong>Cidade:</strong> {data.cidade || "N/A"}
        </p>
        <p>
          <strong>Estado:</strong> {data.estado || "N/A"}
        </p>
        <p>
          <strong>CEP:</strong> {data.cep || "N/A"}
        </p>
        <p>
          <strong>Nome da mãe:</strong> {data.nomeMae || "N/A"}
        </p>
        <p>
          <strong>Nome do pai:</strong> {data.nomePai || "N/A"}
        </p>
        <p>
          <strong>Quantidade de consultas no CPF:</strong>{" "}
          {data.quantidadeConsultas || "0"}
        </p>
        <p>
          <strong>Quantidade de empresas:</strong>{" "}
          {data.quantidadeEmpresas || "0"}
        </p>
      </>
    );
  };

  return (
    <>
      {loading ? (
        <LoadingBackdrop open={loading} message="Gerando pagamento..." />
      ) : (
        <ModalOverlay>
          <ModalContainer>
            <CloseButton onClick={onClose}>X</CloseButton>

            {/* Se já tiver updatedUserData, mostra esse (pós-pagamento), senão exibe userData normal */}
            {updatedUserData ? (
              <UserInfo>{renderUserData(updatedUserData)}</UserInfo>
            ) : (
              <>
                {userData && (
                  <UserInfo>{renderUserData(userData)}</UserInfo>
                )}

                {order ? (
                  <PaymentQRCode pixKey={order.qrCode} />
                ) : (
                  <>
                    <DesktopTitle>Escolha seu pacote</DesktopTitle>

                    <SectionContainer>
                      {products.map((p) => {
                        // Exemplo: se o nome do produto for "Econômico", exibe um badge
                        const isRecommended = p.name === "Econômico";

                        return (
                          <div key={p.id} style={{ position: "relative" }}>
                            {isRecommended && <Badge>Mais Popular</Badge>}
                            <PackageCard
                              id={p.id}
                              productName={p.description}
                              title={p.name}
                              price={p.value}
                              subtitle={`${p.quantityOfRequests} consulta${
                                p.quantityOfRequests > 1 ? "s" : ""
                              }`}
                              highlight={p.quantityOfRequests === 10}
                              action={handleProductSelect}
                            />
                          </div>
                        );
                      })}
                    </SectionContainer>

                    {/* Se o usuário não estiver autenticado e tiver clicado em algum pacote */}
                    {selectedProductId && !isAuthenticated && (
                      <GoogleLogin
                        onSuccess={authSuccess}
                        ux_mode="popup"
                        onError={() => {}}
                      />
                    )}
                  </>
                )}
              </>
            )}
          </ModalContainer>
        </ModalOverlay>
      )}
    </>
  );
};

export default Modal;
