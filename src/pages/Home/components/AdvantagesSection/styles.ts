// import styled from 'styled-components';
// import { colors } from '../../../../shared/assets/colors';

// export const AdvantagesContainer = styled.section`
//   background-color: ${colors.primary};
//   color: #fff;
//   text-align: center;
//   padding: 4rem 1rem;
//   position: relative;
// `;

// export const PhonesWrapper = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
  
//   @media (max-width: 992px) {
//     flex-direction: column;
//   }
// `;

// export const CardsContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 2rem;
// `;

// export const CardBox = styled.div`
//   display: flex;
//   flex-direction: row;
//   background-color: #fff;
//   color: #000;
//   width: 350px;
//   height: 160px;
//   border-radius: 15px;
//   text-align: left;
//   box-shadow: 0 2px 6px rgba(0,0,0,0.15);
// `;

// export const IconWrapper = styled.div`
//   width: 84px;
//   border-radius: 15px 0 0 15px;
//   background-color: ${colors.text};
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;

// export const CardBody = styled.div`
//   width: 266px;
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
//   justify-content: center;
//   padding: 24px;

//   h4 {
//     font-size: 18px;
//     margin-bottom: 0.5rem;
//     color: ${colors.text};
//   }

//   p {
//     font-size: 13px;
//     line-height: 1.25;
//     color: ${colors.text};
//   }
// `;

import styled from 'styled-components';
import { colors } from '../../../../shared/assets/colors';

export const AdvantagesContainer = styled.section`
  background-color: ${colors.primary};
  color: #fff;
  text-align: center;
  padding: 4rem 1rem;
  position: relative;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

export const PhonesWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  @media (max-width: 992px) {
    flex-direction: column;
  }
  /* Se quiser que seja 768px o breakpoint, substitua 992px por 768px */
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const CardBox = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #fff;
  color: #000;
  width: 350px;
  height: 160px;
  border-radius: 15px;
  text-align: left;
  box-shadow: 0 2px 6px rgba(0,0,0,0.15);

  @media (max-width: 480px) {
    width: 300px;
    height: auto;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

export const IconWrapper = styled.div`
  width: 84px;
  background-color: ${colors.text};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 15px 0 0 15px;

  @media (max-width: 480px) {
    width: 100%;
    border-radius: 15px 15px 0 0;
    height: 70px;
  }
`;

export const CardBody = styled.div`
  width: 266px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 24px;

  @media (max-width: 480px) {
    width: auto;
    align-items: center;
    p {
      text-align: center;
    }
  }

  h4 {
    font-size: 18px;
    margin-bottom: 0.5rem;
    color: ${colors.text};
  }

  p {
    font-size: 13px;
    line-height: 1.25;
    color: ${colors.text};
  }
`;

