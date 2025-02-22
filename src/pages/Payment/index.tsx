import { useEffect, useState } from 'react';
import {
  PaymentBox,
  PaymentButton,
  PaymentContainer,
  PaymentHeader,
  PaymentInfo,
  PaymentResume,
  ProcessingModal,
  ProcessingOverlay,
  QrContainer,
  QrImage,
  TimerBar,
} from './styles';
//import api from '../../services/api'; // Exemplo de client Axios (opcional)

export default function Payment() {
  // Estados
  const [currentStep, setCurrentStep] = useState('CHOOSE_METHOD');
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderData, setOrderData] = useState({} as any);
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutos (em segundos)

  // Efeito para contagem regressiva (quando já temos o QR gerado)
  useEffect(() => {
    let timer: number | undefined;
    if (currentStep === 'SHOW_QR' && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [currentStep, timeLeft]);

  // Formata o tempo (mm:ss)
  const formatTime = (seconds: number) => {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${String(min).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;
  };

  // Chamado ao clicar em "Pagar com Pix"
  const handlePixPayment = async () => {
    setIsProcessing(true);
    try {
      // Exemplo: Chamar backend p/ criar pedido e gerar QR Code
      //const response = await api.post('/payments/create', { /* dados */ });
      // const data = response.data;

      // Simulando retorno fictício do backend
      const data = {
        orderId: 'rYClEojxJU6JvHcOXTPr18gjRuVKAsw',
        amount: 9.9,
        pixPayload: '00020126...pix0124pix', // Payload do Pix
        qrcodeImageUrl: 'https://quickchart.io/qr?text=00020126..pix0124pix',
      };

      setOrderData(data);

      // Avança para tela de QR
      setCurrentStep('SHOW_QR');
    } catch (error) {
      console.error('Erro ao criar pedido/QR:', error);
      alert('Falha ao iniciar pagamento Pix.');
    }
    setIsProcessing(false);
  };

  return (
    <PaymentContainer>
      {/* Cabeçalho da página de Pagamento */}
      <PaymentBox>
        {currentStep === 'CHOOSE_METHOD' && (
          <>
            <PaymentHeader>
              <h2>Pagamento</h2>
              <span>Expira em 04:45</span> {/* Exemplo estático; você pode controlar logicamente */}
            </PaymentHeader>

            <PaymentInfo>
              <h4>Informações sobre o pagamento via Pix:</h4>
              <ul>
                <li>Pagamento Seguro (pague no app do seu banco)</li>
                <li>Aprovação Imediata (compra aprovada em segundos)</li>
              </ul>
            </PaymentInfo>

            <PaymentResume>
              <p>Resumo da compra:</p>
              <p>Pacote Básico × 1</p>
              <p><strong>R$ 9,90</strong></p>
            </PaymentResume>

            <PaymentButton onClick={handlePixPayment}>
              PAGAR COM PIX
            </PaymentButton>

            <div style={{ margin: '1rem 0' }}>
              <button onClick={() => alert('Pagamento via Mercado Pago')}>
                MERCADO PAGO
              </button>
            </div>
          </>
        )}

        {currentStep === 'SHOW_QR' && orderData && (
          <>
            <PaymentHeader>
              <h2>Pedido {orderData.orderId}</h2>
            </PaymentHeader>

            <QrContainer>
              <QrImage src={orderData.qrcodeImageUrl} alt="QR Code Pix" />
              <p style={{ marginTop: '1rem' }}>{orderData.pixPayload}</p>
              <p><strong>Pagamento R$ {orderData.amount.toFixed(2)}</strong></p>

              {timeLeft > 0 ? (
                <>
                  <p style={{ marginTop: '1rem' }}>
                    Expira em {formatTime(timeLeft)}
                  </p>
                  <TimerBar>
                    <div
                      className="fill"
                      style={{ width: `${(timeLeft / 300) * 100}%` }}
                    />
                  </TimerBar>
                  <p style={{ fontSize: '0.9rem' }}>
                    Redirecionamento automático após confirmação do pagamento.
                  </p>
                </>
              ) : (
                <p style={{ color: 'red' }}>Tempo expirado. Gere um novo QR.</p>
              )}
            </QrContainer>
          </>
        )}
      </PaymentBox>

      {isProcessing && (
        <ProcessingOverlay>
          <ProcessingModal>
            <h3>Processando o pagamento...</h3>
          </ProcessingModal>
        </ProcessingOverlay>
      )}
    </PaymentContainer>
  );
}
