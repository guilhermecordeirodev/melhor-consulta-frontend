import React from 'react';
import { Container, ContainerBackdrop, Loading as LoadingStyle, Title } from './styles';

interface ILoadingProps {
  open?: boolean; // Controla se o loading deve aparecer
  color?: string; // Cor opcional para o spinner
  message?: string; // Mensagem opcional para o título
}

const LoadingBackdrop: React.FC<ILoadingProps> = ({ open = false, color, message = 'Aguarde...' }) => (
  <>
    {open && (
      <ContainerBackdrop>
        <Container>
          <LoadingStyle color={color} />
          <Title>{message}</Title>
        </Container>
      </ContainerBackdrop>
    )}
  </>
);

export default LoadingBackdrop;
