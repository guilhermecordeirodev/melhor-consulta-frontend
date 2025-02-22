import styled from 'styled-components';

export const PaymentContainer = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 2rem auto;
  padding: 1rem;
`;

export const PaymentBox = styled.div`
  background-color: #fff;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  position: relative;
`;

export const PaymentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    margin: 0;
  }

  span {
    font-size: 0.9rem;
    color: #888;
  }
`;

export const PaymentInfo = styled.div`
  margin: 1rem 0;

  h4 {
    margin-bottom: 0.5rem;
  }

  ul {
    list-style: disc;
    padding-left: 1.2rem;
  }
`;

export const PaymentResume = styled.div`
  background-color: #f7f7f7;
  border-radius: 8px;
  padding: 1rem;
  margin: 1rem 0;
`;

export const PaymentButton = styled.button`
  background-color: orange;
  border: none;
  border-radius: 4px;
  padding: 0.75rem 1rem;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  font-weight: 600;

  &:hover {
    background-color: #e69500;
  }
`;

/* Modal overlay do "Processando pagamento" */
export const ProcessingOverlay = styled.div`
  position: fixed;
  top: 0; 
  left: 0; 
  right: 0; 
  bottom: 0;
  background-color: rgba(0,0,0,0.5);
  display: flex; 
  justify-content: center;
  align-items: center;
`;

export const ProcessingModal = styled.div`
  background-color: #fff;
  padding: 2rem;
  border-radius: 8px;

  h3 {
    margin: 0;
    font-size: 1.2rem;
  }
`;

/* Seção para exibir o QR Code */
export const QrContainer = styled.div`
  text-align: center;
  margin-top: 1rem;
`;

export const QrImage = styled.img`
  width: 200px;
  height: 200px;
  object-fit: contain;
  border: 2px solid #ccc;
  border-radius: 8px;
`;

/* Barra de tempo */
export const TimerBar = styled.div`
  width: 100%;
  height: 8px;
  background-color: #ddd;
  border-radius: 4px;
  margin: 0.5rem 0;

  .fill {
    height: 100%;
    background-color: orange;
    border-radius: 4px;
    transition: width 1s linear;
  }
`;
