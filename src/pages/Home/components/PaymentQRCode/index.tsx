import { QRCodeSVG } from "qrcode.react";
import { useState } from "react";
import styled from "styled-components";

const QRCodeContainer = styled.div`
  text-align: center;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
  background: #f9f9f9;
  width: 100%;
  max-width: 400px;
  margin: auto;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  @media (max-width: 480px) {
    padding: 15px;
  }
`;

const QRCodeImage = styled(QRCodeSVG)`
  margin: 10px 0;
`;

const PixKeyText = styled.p`
  font-size: 14px;
  color: #333;
  word-break: break-all;
  background: #fff;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const CopyButton = styled.button<{ copied: boolean}>`
  background: ${(props) => (props.copied ? "#4CAF50" : "#008CBA")};
  color: white;
  padding: 10px;
  width: 100%;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
  transition: background 0.3s;

  &:hover {
    background: ${(props) => (props.copied ? "#45a049" : "#007bb5")};
  }
`;

interface IPaymentQRCodeProps {
  pixKey: string;
}

const PaymentQRCode = ({ pixKey }: IPaymentQRCodeProps) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(pixKey)
      .then(() => setCopied(true))
      .catch(() => alert("Erro ao copiar o código Pix."));

    setTimeout(() => setCopied(false), 2000); // Reseta o status após 2 segundos
  };

  return (
    <QRCodeContainer>
      <h3>Escaneie ou copie o código Pix</h3>
      <QRCodeImage value={pixKey} size={200} />
      <PixKeyText>{pixKey}</PixKeyText>
      <CopyButton copied={copied} onClick={copyToClipboard}>
        {copied ? "Copiado!" : "Copiar Código Pix"}
      </CopyButton>
    </QRCodeContainer>
  );
};

export default PaymentQRCode;
