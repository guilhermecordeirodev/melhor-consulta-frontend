import { MdOutlineInfo } from 'react-icons/md';
import styled from 'styled-components';
import { colors } from '../../assets/colors';

export const LabelWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const LabelHelperMessageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  color: red;
`;

export const StyledLabel = styled.label`
  font-size: 14px;
  font-weight: 500;
  color: ${(props) => props.theme.palette.text.primary}; /* Texto dinâmico */
`;

export const HelperMessage = styled.span`
  font-size: 12px;
  color: ${colors.error};
`;

export const TooltipWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledIcon = styled(MdOutlineInfo)`
  color: ${(props) => props.theme.palette.secondary.main}; /* Cor do ícone */
`;
