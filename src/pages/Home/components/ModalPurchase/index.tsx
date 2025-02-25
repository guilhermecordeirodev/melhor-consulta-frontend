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
  CloseButton,
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

const Modal = ({ isOpen, onClose, products, userData }: IModalProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [order, setOrder] = useState<IOrder | null>(null);
  const [updatedUserData, setUpdatedUserData] = useState<FederalIdentificationDTO | undefined>(undefined);
  const { isAuthenticated, login } = useAuth();
  const { sendOrder, checkFederalIdentification } = useOrder();
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);

  async function generateOrder(id: string, accessToken: string, userId: string) {
    setLoading(true);
    try {
      if (!accessToken) {
        console.error("Erro: Tentativa de gerar pedido sem token válido.");
        return;
      }
  
      const response = await sendOrder({
        productId: id,
        federalId: userData?.id || "",
        userId,
      }, accessToken); // Passa o token explicitamente
  
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
      const userLogado = await login(data.credential); // Aguarda autenticação
  
      if (!userLogado || !userLogado.accessToken) {
        console.error("Erro: Usuário não autenticado corretamente.");
        return;
      }
  
      console.log("Usuário autenticado com sucesso:", userLogado);
  
      if (selectedProductId) {
        console.log("Gerando pedido para o produto:", selectedProductId);
        await generateOrder(selectedProductId, userLogado.accessToken, userLogado.user.id); // Passa o token e ID atualizado
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

  return (
    <>
      {loading ? (
        <LoadingBackdrop open={loading} message="Gerando pagamento..." />
      ) : (
        <ModalOverlay>
          <ModalContainer>
            <CloseButton onClick={onClose}>X</CloseButton>

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

                    {selectedProductId && !isAuthenticated && (
                      <GoogleLogin onSuccess={authSuccess} ux_mode="popup" onError={() => {}} />
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
