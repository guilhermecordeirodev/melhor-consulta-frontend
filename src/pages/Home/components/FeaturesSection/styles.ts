// import styled from 'styled-components';
// import { colors } from '../../../../shared/assets/colors';

// export const Container = styled.section`
//   background-color: ${colors.white};
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   padding: 24px 0;
// `;

// export const FeaturesTitleWrapper = styled.div`
//   width: 1078px;
//   display: flex;
//   align-items: center;
//   padding: 16px;
// `;

// export const FeaturesTitle = styled.h2`
//   text-align: center;
//   font-size: 48px;
//   color: ${colors.text};
//   font-weight: normal;
//   line-height: 1.25;
// `;

// export const FeatureCardContainer = styled.div`
//   display: flex;
//   flex-direction: row;
//   gap: 16px;
//   padding: 36px 24px;
// `;

// export const FeatureCard = styled.div`
//   width: 345px;
//   height: 300px;
//   border: 1px solid #B5B5B5;
//   border-radius: 8px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   flex-direction: column;
//   gap: 12px;
//   padding: 0 16px;

//   h4 {
//     font-size: 20px;
//     font-weight: bold;
//     color: ${colors.text};
//   }

//   p {
//     font-size: 16px;
//     font-weight: normal;
//     color: ${colors.text};
//     text-align: center;
//   }
// `;

import styled from 'styled-components';
import { colors } from '../../../../shared/assets/colors';

export const Container = styled.section`
  background-color: ${colors.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 24px 0;
`;

export const FeaturesTitleWrapper = styled.div`
  width: 1078px;
  display: flex;
  align-items: center;
  padding: 16px;

  @media (max-width: 1080px) {
    width: 100%;
  }
`;

export const FeaturesTitle = styled.h2`
  text-align: center;
  font-size: 48px;
  color: ${colors.text};
  font-weight: normal;
  line-height: 1.25;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

export const FeatureCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  padding: 36px 24px;

  @media (max-width: 992px) {
    flex-wrap: wrap; 
    justify-content: center;
  }
`;

export const FeatureCard = styled.div`
  width: 345px;
  height: 300px;
  border: 1px solid #B5B5B5;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 12px;
  padding: 0 16px;

  @media (max-width: 768px) {
    width: 280px;
    height: auto;
    margin-bottom: 1rem;
    padding: 16px;
  }

  h4 {
    font-size: 20px;
    font-weight: bold;
    color: ${colors.text};
  }

  p {
    font-size: 16px;
    font-weight: normal;
    color: ${colors.text};
    text-align: center;
  }
`;
