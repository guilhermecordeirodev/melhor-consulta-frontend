import styled from 'styled-components';
import { colors } from '../../assets/colors';

export const StyledInput = styled.input`
  padding: 20px;
  border-radius: 15px;
  border: 2px solid #EBEDF0;
  background-color: #EBEDF0;
  color: ${colors.text};
  font-size: 16px;
  font-weight: bold;
  outline: none;
  
  &::placeholder {
    font-weight: 200;
    color: #B0BFC5;
  }
`;

