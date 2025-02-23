import { yupResolver } from "@hookform/resolvers/yup";
import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { FederalIdentificationDTO } from "../../../../dtos/cpf";
import { IOrder } from "../../../../dtos/order";
import { Product } from "../../../../dtos/product";
import ControlledInput from "../../../../shared/components/ControlledInput";
import LoadingBackdrop from "../../../../shared/components/LoadingBackdrop";
import { PackageCard } from "../../../../shared/components/PackageCard";
import { useAuth } from "../../../../shared/context/AuthContext";
import { useOrder } from "../../../../shared/context/OrderContext";
import { maskCPForCNPJ, removeSpecialChars } from "../../../../shared/utils/formatters";
import PaymentQRCode from "../PaymentQRCode";
import {
  CloseButton,
  HeroInput,
  ModalContainer,
  ModalOverlay,
  SectionContainer,
  UserInfo,
} from "./styles";

interface IModalProps {
  isOpen: boolean;
  onClose: () => void;
  products: Array<Product>;
  userData?: FederalIdentificationDTO;
}

interface IHeroForm {
  cpf: string;
}

const schema: Yup.ObjectSchema<IHeroForm> = Yup.object().shape({
  cpf: Yup.string().required("O CPF é obrigatório"),
});

const Modal = ({ isOpen, onClose, products, userData }: IModalProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [order, setOrder] = useState<IOrder | null>(null);
  const [updatedUserData, setUpdatedUserData] = useState<FederalIdentificationDTO | undefined>(undefined);
  const { user, isAuthenticated, login } = useAuth();
  const { sendOrder, checkFederalIdentification } = useOrder();
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);
  const { control, handleSubmit } = useForm({ resolver: yupResolver(schema) });

  async function generateOrder(id: string, cpf?: string) {
    setLoading(true);
    try {
      const response = await sendOrder({
        productId: id,
        federalId: userData?.id || "",
        userId: isAuthenticated ? user.user.id : "",
        cpf,
      });
      setOrder(response);
    } catch (e) {
      console.error("Erro ao gerar pedido:", e);
    } finally {
      setLoading(false);
    }
  }

  async function authSuccess(data: CredentialResponse) {
    setLoading(true);
    try {
      await login(data.credential);
      if (selectedProductId) {
        generateOrder(selectedProductId);
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

  const onSubmit = (data: IHeroForm) => {
    if (selectedProductId) {
      generateOrder(selectedProductId, removeSpecialChars(data.cpf));
    }
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
  let interval: number | undefined
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
      clearInterval(interval)
    }
  }, [updatedUserData])

  if (!isOpen) return null;

  return (
    <>
      {loading ? (
        <LoadingBackdrop open={loading} message="Gerando pagamento..." />
      ) : (
        <ModalOverlay>
          <ModalContainer>
            <CloseButton onClick={onClose}>X</CloseButton>

            {/* Se já tiver federalIdentification atualizado, exibe apenas os dados novos */}
            {updatedUserData ? (
              <UserInfo>
                <p><strong>Nome:</strong> {updatedUserData.nome}</p>
                <p><strong>CPF:</strong> {updatedUserData.cpfCnpj}</p>
                <p><strong>Email:</strong> {updatedUserData.email || "N/A"}</p>
                <p><strong>Telefone:</strong> {updatedUserData.telefone || "N/A"}</p>
                <p><strong>Data de nascimento:</strong> {updatedUserData.dataNascimento || "N/A"}</p>
                <p><strong>País de nascimento:</strong> {updatedUserData.paisNascimento || "N/A"}</p>
                <p><strong>Endereço:</strong> {updatedUserData.logradouro || "N/A"}</p>
                <p><strong>Cidade:</strong> {updatedUserData.cidade || "N/A"}</p>
                <p><strong>Estado:</strong> {updatedUserData.estado || "N/A"}</p>
                <p><strong>CEP:</strong> {updatedUserData.cep || "N/A"}</p>
                <p><strong>Nome da mãe:</strong> {updatedUserData.nomeMae || "N/A"}</p>
                <p><strong>Nome do pai:</strong> {updatedUserData.nomePai || "N/A"}</p>
                <p><strong>Quantidade de consultas no CPF:</strong> {updatedUserData.quantidadeConsultas || "0"}</p>
                <p><strong>Quantidade de empresas:</strong> {updatedUserData.quantidadeEmpresas || "0"}</p>
              </UserInfo>
            ) : (
              <>
                {/* Exibe os dados iniciais do userData e os pacotes */}
                {userData && (
                  <UserInfo>
                    <p><strong>Nome:</strong> {userData.nome}</p>
                    <p><strong>CPF:</strong> {userData.cpfCnpj}</p>
                    <p><strong>Email:</strong> {userData.email || "N/A"}</p>
                    <p><strong>Telefone:</strong> {userData.telefone || "N/A"}</p>
                    <p><strong>Data de nascimento:</strong> {userData.dataNascimento || "N/A"}</p>
                    <p><strong>País de nascimento:</strong> {userData.paisNascimento || "N/A"}</p>
                    <p><strong>Endereço:</strong> {userData.logradouro || "N/A"}</p>
                    <p><strong>Cidade:</strong> {userData.cidade || "N/A"}</p>
                    <p><strong>Estado:</strong> {userData.estado || "N/A"}</p>
                    <p><strong>CEP:</strong> {userData.cep || "N/A"}</p>
                    <p><strong>Nome da mãe:</strong> {userData.nomeMae || "N/A"}</p>
                    <p><strong>Nome do pai:</strong> {userData.nomePai || "N/A"}</p>
                    <p><strong>Quantidade de consultas no CPF:</strong> {userData.quantidadeConsultas || "0"}</p>
                    <p><strong>Quantidade de empresas:</strong> {userData.quantidadeEmpresas || "0"}</p>
                  </UserInfo>
                )}

                {order ? (
                  <PaymentQRCode pixKey={order.qrCode} />
                ) : (
                  <>
                    <h2>Escolha seu pacote</h2>
                    <SectionContainer>
                      {products.map((p) => (
                        <PackageCard
                          key={p.id}
                          id={p.id}
                          productName={p.description}
                          title={p.name}
                          price={p.value}
                          subtitle={`${p.quantityOfRequests} consulta${p.quantityOfRequests > 1 ? "s" : ""}`}
                          highlight={p.quantityOfRequests === 10}
                          action={handleProductSelect}
                        />
                      ))}
                    </SectionContainer>

                    {selectedProductId && (
                      <>
                        {!isAuthenticated && (
                          <GoogleLogin
                            onSuccess={authSuccess}
                            ux_mode="popup"
                            onError={() => {}}
                          />
                        )}

                        {isAuthenticated && (
                          <div style={{ display: "flex", alignItems: "center", width: "100%" }}>
                            <HeroInput>
                              <ControlledInput control={control} mask={maskCPForCNPJ} name="cpf" placeholder="Digite o seu CPF aqui" />
                              <button onClick={handleSubmit(onSubmit)}>Consultar CPF</button>
                            </HeroInput>
                          </div>
                        )}
                      </>
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
