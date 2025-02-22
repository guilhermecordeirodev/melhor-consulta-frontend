import { useNavigate } from 'react-router-dom';
import { BuyButton, CloseButton, Modal, Overlay } from './styles';

export default function ConsultationModal({ data, onClose }: any) {
  const navigate = useNavigate();
  if (!data) return null; // Se não tiver dados, não exibe nada

  const { nome, dataNascimento, renda, telefones } = data;

  return (
    <Overlay>
      <Modal>
        <CloseButton onClick={onClose}>X</CloseButton>
        <h3>{nome}</h3>
        <p>Data de Nascimento: {dataNascimento ? dataNascimento : '***'}</p>
        <p>Renda: {renda ? renda : '***'}</p>
        <p>Telefones: {telefones ? telefones : '***'}</p>

        <BuyButton onClick={() => navigate("/payment")}>
          Veja todos os dados por apenas R$ 9,90
        </BuyButton>
      </Modal>
    </Overlay>
  );
}
