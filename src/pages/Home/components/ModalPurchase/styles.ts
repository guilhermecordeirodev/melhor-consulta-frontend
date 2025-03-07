import styled from "styled-components";
import { colors } from "../../../../shared/assets/colors";

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

  @media (max-width: 768px) {
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

export const ShowMoreButton = styled.button`
  margin-top: 10px;
  background: ${colors.green};
  border: none;
  color: #06054b;
  padding: 0.5rem 1rem;
  border-radius: 15px;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
`;

/* Título principal (desktop + mobile) */
export const DesktopTitle = styled.h2`
  font-size: 2rem;
  color: ${colors.text};
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1.5rem; /* Título menor no mobile */
  }
`;

/* Container dos cards */
export const SectionContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  /* 'flex-wrap: wrap' permite quebrar linha se a tela for menor que o total */
  /* flex-wrap: wrap; */
  margin-top: 1rem;

  /* No desktop, cada card deve aparecer lado a lado (o flex-wrap ajuda se não couber) */
  /* Se quiser FORÇAR que fiquem na mesma linha sempre, você poderia usar white-space: nowrap e overflow-x: auto */
  /* Mas geralmente 'flex-wrap' é o mais comum. */

  @media (max-width: 768px) {
    gap: 0.6rem; /* Pode reduzir o espaço entre cards no mobile */
  }
`;

/* Badge para destacar o pacote recomendado */
export const Badge = styled.span`
  position: absolute;
  top: -10px;
  right: -10px;
  background: ${colors.green};
  color: #fff;
  padding: 0.4rem 0.8rem;
  border-radius: 8px;
  font-size: 0.8rem;
  font-weight: bold;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
`;
