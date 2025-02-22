// import styled from 'styled-components';
// import { colors } from '../../../../shared/assets/colors';

// export const StepSection = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   background-color: ${colors.primary};
// `;

// export const StepsContainer = styled.section`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   background-color: ${colors.primary}; /* Ex: #6633cc */
//   color: ${colors.white};
//   padding: 4rem 2rem;
//   gap: 1rem;
//   width: 1080px;
//   /* Opção: border-radius, etc. */

//   @media (max-width: 900px) {
//     flex-direction: column;
//     text-align: center;
//   }
// `;

// export const TextBlock = styled.div`
//   flex: 1;
//   max-width: 600px; /* Ajuste conforme layout */
// `;

// export const SubTitle = styled.p`
//   font-size: 20px;
//   font-weight: 300;
//   margin-bottom: 0.5rem;
//   text-align: start;
// `;

// export const Title = styled.h2`
//   font-size: 48px;
//   line-height: 1.2;
//   margin-bottom: 2rem;
//   /* Ajuste conforme design, use 3rem se quiser maior */
// `;

// export const StepsList = styled.ol`
//   list-style: none; /* removemos a numeração padrão */
//   counter-reset: my-counter; /* para usar contadores se quiser */

//   margin-bottom: 2rem;
// `;

// export const ListItem = styled.li`
//   display: flex;
//   align-items: center;
//   margin-bottom: 1rem;
//   font-size: 20px;
//   font-weight: 200;
  
//   /* Numero em um círculo */
//   span {
//     display: inline-flex;
//     justify-content: center;
//     align-items: center;
//     border: 1px solid ${colors.green}; /* Ex: #3ECE5E */
//     color: ${colors.white};
//     border-radius: 50%;
//     width: 30px;
//     height: 30px;
//     font-weight: bold;
//     font-size: 20px;
//     margin-right: 0.75rem;
//   }
// `;

// export const Button = styled.button`
//   background-color: ${colors.green};
//   border: none;
//   padding: 0.75rem 1.25rem;
//   border-radius: 8px;
//   font-size: 1rem;
//   color: ${colors.text};
//   cursor: pointer;
//   font-weight: 600;
//   transition: 0.2s ease;

//   &:hover {
//     opacity: 0.9;
//   }
// `;

// export const ImageWrapper = styled.div`
//   flex: 1;
//   display: flex;
//   justify-content: center;

//   img {
//     max-width: 400px; /* Ajuste conforme design */
//     border-radius: 8px; /* se quiser cantos arredondados */
//     object-fit: cover;
//   }

//   @media (max-width: 900px) {
//     margin-top: 2rem;
//   }
// `;

import styled from 'styled-components';
import { colors } from '../../../../shared/assets/colors';

/* Envolve toda a seção */
export const StepSectionWrapper = styled.section`
  background-color: ${colors.primary}; /* Roxo */
  display: flex;
  justify-content: center;
  /* Poderia usar padding vertical maior, se quiser mais espaço */
  padding: 4rem 1rem;
`;

/* Container do conteúdo (texto) */
export const StepsContainer = styled.div`
  /* Largura fixa ou max-width para centralizar */
  width: 1080px;
  max-width: 100%;
  color: #fff;
  
  display: flex;
  flex-direction: column;
  gap: 1rem; /* espaçamento entre elementos internos */

  @media (max-width: 900px) {
    text-align: center; 
    align-items: center;
    width: 100%;
  }
`;


export const StepSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.primary};
  padding: 64px;
`;

export const TextBlock = styled.div`
  flex: 1;
  max-width: 600px; /* Ajuste conforme layout */
`;

/* SubTítulo menor */
export const SubTitle = styled.p`
  font-size: 20px;
  font-weight: 300;
  margin-bottom: 0.5rem;
  
  /* Alinhado à esquerda por padrão */
  text-align: start; 

  @media (max-width: 900px) {
    text-align: center;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  
  @media (max-width: 900px) {
    width: 100vw;
    padding: 0 32px;
    align-items: center;
  }
`;

/* Título grande */
export const Title = styled.h2`
  font-size: 48px;
  line-height: 1.2;
  margin-bottom: 2rem;
  font-weight: 400; /* se quiser "normal" */

  @media (max-width: 900px) {
    font-size: 25px;
  }
`;

/* Lista enumerada */
export const StepsList = styled.ol`
  list-style: none; 
  margin-bottom: 2rem;
`;

/* Cada item (com bolinha verde e texto em 20px) */
export const ListItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  font-size: 20px;
  font-weight: 200;

  /* Bolinha verde */
  span {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    background-color: ${colors.green};
    color: #fff;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    font-weight: bold;
    font-size: 20px;
    margin-right: 0.75rem;
  }

  @media (max-width: 900px) {
    justify-content: flex-start;
    text-align: start;
    font-size: 15px;

    span {
      margin-right: 0.5rem;
      width: 28px;
      height: 28px;
      font-size: 18px;
      border-radius: 100%;
    }
  }
`;

export const ImageWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;

  img {
    max-width: 400px; /* Ajuste conforme design */
    border-radius: 8px; /* se quiser cantos arredondados */
    object-fit: cover;
  }

  @media (max-width: 900px) {
    display: none;
  }
`;

/* Botão verde */
export const Button = styled.button`
  background-color: ${colors.green};
  border: none;
  padding: 0.75rem 1.25rem;
  border-radius: 8px;
  font-size: 1rem;
  color: ${colors.text}; /* Dependendo da cor do seu "text" */
  cursor: pointer;
  font-weight: 600;
  transition: 0.2s ease;

  &:hover {
    opacity: 0.9;
  }
  
  @media (max-width: 900px) {
    font-size: 0.95rem;
    width: 90vw;
  }
`;
