import styled from 'styled-components';
import { colors } from '../../assets/colors';

export const Container = styled.div`
  display: flex;
  width: 100vw;
  align-items: center;
  justify-content: center;
  background-color: ${colors.primary};
`;

export const FooterContainer = styled.footer`
  display: flex;
  width: 1080px;
  flex-direction: row;
  background-color: ${colors.primary};
  color: #fff;
  text-align: center;
  padding: 1.5rem 1rem;
  height: 261px;
`;

export const FooterContent = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;

  p {
    font-size: 13px;
  }
`;