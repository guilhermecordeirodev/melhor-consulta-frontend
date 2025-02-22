import styled from 'styled-components';
import { colors } from '../../assets/colors';

export const StyledInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px 0 0 0;
`;

export const StyledError = styled.span`
  margin-top: 8px;
  font-size: 14px;
  color: ${colors.error};
  text-align: start;
  margin-left: 6px;
`;
