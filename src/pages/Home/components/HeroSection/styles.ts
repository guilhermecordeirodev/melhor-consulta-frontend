import styled from 'styled-components';
import { colors } from '../../../../shared/assets/colors';

export const Container = styled.section`
  width: 100%;
  height: 100vh; /* ou 70vh, conforme deseja */
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  /* Ajuste a cor e opacidade */
  background-color: rgba(0,0,0,0.4);
`;

export const HeroContent = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
  max-width: 600px;
  z-index: 1; /* ficar acima do Overlay */

  p {
    margin-bottom: 1rem;
    font-size: 1rem;
  }
`;

export const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
  font-weight: normal;
`;

export const HeroInput = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
  gap: 10px;

  button {
    background-color: ${colors.green};
    border: none;
    color: #06054B;
    padding: 1rem;
    border-radius: 15px;
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
  }
`;
