// styles.js
import styled from 'styled-components';
import { colors } from '../../assets/colors';


interface IPackageCardProps {
  highlight: boolean;
}

export const CardContainer = styled.div<IPackageCardProps>`
  background: #EEEEEE;
  border-radius: 8px;
  height: ${(props) => props.highlight ? 240 : 204}px;
  width: 346.42px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  text-align: center;
  transition: transform 0.2s ease;
`;

export const Header = styled.div<IPackageCardProps>`
  height: ${(props) => props.highlight ? 78 : 48}px;
  width: 100%;
  background-color: ${(props) => props.highlight ? colors.green : '#fff'};
  border-radius: 8px 8px 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px solid #EEEEEE;
  border-left: 1px solid #EEEEEE;
  border-right: 1px solid #EEEEEE;

  h3 {
    font-size: 28px;
    font-weight: ${(props) => props.highlight ? 800 : 300};
    color: ${colors.text};
  }
`;

export const Body = styled.div<IPackageCardProps>`
  height: ${(props) => props.highlight ? 109 : 103}px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ProductName = styled.span`
  font-size: 14px;
  color: #000;
`;

export const Subtitle = styled.span`
  font-size: 17px;
  color: ${colors.text};
`;

export const Price = styled.span<IPackageCardProps>`
  font-size: ${(props) => props.highlight ? 38 : 31}px;
  color: ${(props) => props.highlight ? colors.text : colors.green};
  font-weight: 600;
`;

export const Button = styled.button<IPackageCardProps>`
  background-color: ${(props) => props.highlight ? colors.text : colors.green};
  color: ${(props) => props.highlight ? colors.white : colors.text};
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  font-weight: 600;
  height: 53px;
  width: 100%;
  font-size: 22px;
  font-weight: 300;
`;