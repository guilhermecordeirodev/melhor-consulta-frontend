import styled from 'styled-components';
import { colors } from '../../../../shared/assets/colors';

export const SectionContainer = styled.section`
  padding: 3rem 1rem;
  text-align: center;

  h2 {
    font-size: 48px;
    color: ${colors.text};
    margin-bottom: 2rem;
  }

  .cards {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    flex-wrap: wrap;
  }
`;
