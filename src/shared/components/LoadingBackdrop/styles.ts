import styled from 'styled-components';
import { colors } from '../../assets/colors';

interface ILoadingProps {
  color?: string;
}

export const Loading = styled.div<ILoadingProps>`
  width: 100px;
  height: 100px;
  border: 10px solid ${colors.primary}; /* Cor padrão dinâmica */
  border-top-color: ${colors.green}; /* Cor do tema ou customizada */
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

export const Title = styled.span`
  color: ${colors.primary};
  font-size: 14px;
  font-weight: 700;
  margin-top: 32px;
`;

export const ContainerBackdrop = styled.div`
  z-index: 9999;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: ${colors.default_bg};
  opacity: 0.8;
  width: 100vw;
  height: 100vh;
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
