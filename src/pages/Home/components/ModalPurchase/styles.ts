import styled from 'styled-components';
import { colors } from '../../../../shared/assets/colors';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContainer = styled.div`
  background: white;
  width: 60vw;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  position: relative;

  @media (max-width: 400px) {
    width: 90vw;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 12px;
  right: 16px;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
`;

export const UserInfo = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  text-align: left;
  font-size: 16px;
  color: #333;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background: #f9f9f9;
`;

export const SectionContainer = styled.section`
  padding: 3rem 1rem;
  text-align: center;

  display: flex;
  flex-direction: row;
  gap: 1.5rem;

  h2 {
    font-size: 48px;
    color: ${colors.text};
    margin-bottom: 2rem;
  }

  @media (max-width: 400px) {
    display: none;
    flex-direction: column;
  }
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