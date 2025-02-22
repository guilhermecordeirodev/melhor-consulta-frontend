import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import { useEffect, useState } from "react";
import { FederalIdentificationDTO } from "../../../../dtos/cpf";
import { IOrder, IOrderRequest } from "../../../../dtos/order";
import { Product } from "../../../../dtos/product";
import LoadingBackdrop from "../../../../shared/components/LoadingBackdrop";
import { PackageCard } from "../../../../shared/components/PackageCard";
import { useAuth } from "../../../../shared/context/AuthContext";
import { useOrder } from "../../../../shared/context/OrderContext";
import PaymentQRCode from "../PaymentQRCode";
import { CloseButton, ModalContainer, ModalOverlay, SectionContainer, UserInfo } from "./styles";

interface IModalProps {
  isOpen: boolean;
  onClose: () => void;
  products: Array<Product>
  userData: FederalIdentificationDTO;
}

const Modal = ({ isOpen, onClose, products, userData }: IModalProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [order, setOrder] = useState<IOrder>();
  const { user, isAuthenticated, login } = useAuth();
  const { sendOrder } = useOrder();
  const [isLogin, setIsLogin] = useState(false);
  const [orderData, setOrderData] = useState<IOrderRequest>()

  async function generateOrder(id: string) {
    console.log(isAuthenticated)
    if (!isAuthenticated) {
      setOrderData({
        productId: id,
        federalId: userData.id,
        userId: ''
      })
      setIsLogin(true);
    } else {
      setLoading(true);
      try {
        const response = await sendOrder({
          productId: id,
          federalId: userData.id,
          userId: user.user.id
        })
        setOrder(response);
        setLoading(false);
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    }
  }

  async function authSuccess(data: CredentialResponse) {
    setLoading(true);
    try {
      await login(data.credential)
      await generateOrder(orderData?.productId)
      setIsLogin(false);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    console.log('order => ', order) 

  }, [order])
  
  if (!isOpen) return null;

  const renderPacotes = () => (<>
    {userData && (
      <UserInfo>
          <p><strong>Nome:</strong> {userData.nome}</p>
          <p><strong>CPF:</strong> {userData.cpfCnpj}</p>
          <p><strong>Email:</strong> {userData.email}</p>
          <p><strong>Telefone:</strong> {userData.telefone}</p>
          <p><strong>Data de nascimento:</strong> {userData.dataNascimento}</p>
          <p><strong>País de nascimento:</strong> {userData.paisNascimento}</p>
          <p><strong>Endereço:</strong> {userData.logradouro}</p>
          <p><strong>Cidade:</strong> {userData.cidade}</p>
          <p><strong>Estado:</strong> {userData.estado}</p>
          <p><strong>CEP:</strong> {userData.cep}</p>
          <p><strong>Nome da mãe:</strong> {userData.nomeMae}</p>
          <p><strong>Nome do pai:</strong> {userData.nomePai}</p>
          <p><strong>Quantidade de consultas no CPF:</strong> {userData.quantidadeConsultas}</p>
          <p><strong>Quantidade de empresas:</strong> {userData.quantidadeEmpresas}</p>
        </UserInfo>
      )}
      {order ? <PaymentQRCode pixKey={order.qrCode} />
      :
      <>
        <h2>Escolha seu pacote</h2>
        <SectionContainer>
          {products.map((p) => (
            <PackageCard
              id={p.id}
              productName={p.description}
              title={p.name}
              price={p.value}
              subtitle={`${p.quantityOfRequests} consulta${p.quantityOfRequests > 1 ? 's' : ''}`}
              highlight={p.quantityOfRequests === 10}
              action={generateOrder}
            />
          ))}
        </SectionContainer>
      </>}
      {isLogin && !order && !isAuthenticated && <GoogleLogin onSuccess={authSuccess} ux_mode='popup' onError={() => {}} />}
    </>
  )

  return (
    <>
      {loading ? 
        <LoadingBackdrop open={loading} message="Gerando pagamento" /> :
        <ModalOverlay>
          <ModalContainer>
            <CloseButton onClick={onClose}>X</CloseButton>
            {renderPacotes()}
          </ModalContainer>
        </ModalOverlay>
        }
    </>
  );
};

export default Modal;
