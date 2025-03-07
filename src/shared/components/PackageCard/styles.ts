import styled from "styled-components";
import { colors } from "../../assets/colors";

interface IHighlightProps {
  highlight: boolean;
}

/**
 * Mantemos um tamanho fixo no desktop (largura ~346px).
 * No mobile, deixamos a largura um pouco maior (ex: 95%),
 * mas reduzimos a altura fixa, fontes etc.
 */
export const CardContainer = styled.div<IHighlightProps>`
  background: #eeeeee;
  border-radius: 8px;
  width: 346px; /* Tamanho "original" no desktop */
  height: ${(props) => (props.highlight ? "240px" : "204px")};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.2s ease;
  overflow: hidden; /* caso algum texto estoure, ocultar */

  @media (max-width: 768px) {
    /* No mobile, aumenta a largura para ~95% (mais "cheio" na tela) */
    width: 99.99%;
    max-width: 400px; /* se quiser um limite maior no mobile */
    height: auto; /* Remove altura fixa para não ficar muito grande ou estourar conteúdo */
    margin: 0 auto;
  }
`;

export const Header = styled.div<IHighlightProps>`
  width: 100%;
  height: ${(props) => (props.highlight ? "78px" : "48px")};
  background-color: ${(props) => (props.highlight ? colors.green : "#fff")};
  border-radius: 8px 8px 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px solid #eeeeee;
  border-left: 1px solid #eeeeee;
  border-right: 1px solid #eeeeee;

  h3 {
    font-size: 28px;
    font-weight: ${(props) => (props.highlight ? 800 : 300)};
    color: ${colors.text};
    margin: 0;
  }

  @media (max-width: 768px) {
    height: auto; /* sem altura fixa */
    padding: 0.5rem 0.2rem;

    h3 {
      font-size: 16px; /* Fonte menor no mobile */
    }
  }
`;

export const Body = styled.div<IHighlightProps>`
  height: ${(props) => (props.highlight ? "109px" : "103px")};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    height: auto;
    padding: 0.5rem 0; /* Adiciona padding para não ficar colado */
  }
`;

export const ProductName = styled.span`
  font-size: 14px;
  color: #000;

  @media (max-width: 768px) {
    font-size: 11px; /* ligeiramente menor no mobile */
  }
`;

export const Price = styled.span<IHighlightProps>`
  font-size: ${(props) => (props.highlight ? "38px" : "31px")};
  color: ${(props) => (props.highlight ? colors.text : colors.green)};
  font-weight: 600;
  margin: 0.3rem 0;

  @media (max-width: 768px) {
    padding: 0 3px;
    font-size: ${(props) => (props.highlight ? "24px" : "20px")};
  }
`;

export const Subtitle = styled.span`
  font-size: 17px;
  color: ${colors.text};

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const Button = styled.button<IHighlightProps>`
  background-color: ${(props) => (props.highlight ? colors.text : colors.green)};
  color: ${(props) => (props.highlight ? colors.white : colors.text)};
  border: none;
  cursor: pointer;
  font-weight: 600;
  height: 53px;
  width: 100%;
  font-size: 22px;
  font-weight: 300;

  @media (max-width: 768px) {
    height: 36px;
    font-size: 13px;
  }
`;
