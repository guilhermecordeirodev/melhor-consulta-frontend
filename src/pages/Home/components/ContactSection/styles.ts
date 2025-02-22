import styled from 'styled-components';
import { colors } from '../../../../shared/assets/colors';

export const ContactContainer = styled.section`
  background-color: #fff;
  color: ${colors.text};
  padding: 3rem 1rem;
  text-align: center;

  h3 {
    font-size: 28px;
    color: ${colors.text};
    margin-bottom: 1rem;
  }

  h1 {
    font-size: 48px;
    margin-bottom: 1rem;
    font-weight: 400;
  }

  p {
    line-height: 1.5;
    font-size: 28px;
    font-weight: 200;
  }
`;
