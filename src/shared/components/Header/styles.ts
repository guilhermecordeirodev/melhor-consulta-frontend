import { FaBars } from 'react-icons/fa'; // Exemplo de ícone hamburger
import styled from 'styled-components';
import { colors } from '../../assets/colors';

 
// Ponto de corte para mobile (pode ajustar)
const breakpoint = '768px';

export const HeaderContainer = styled.header`
  width: 1080px;
  height: 80px;
  background-color: ${colors.primary};
  display: flex;
  align-items: center;
  padding: 0 3rem;
  box-sizing: border-box;
  justify-content: space-between;

  @media (max-width: ${breakpoint}) {
    padding: 0 1rem;
  }
`;

export const Nav = styled.nav`
  /* Escondido no mobile */
  @media (max-width: ${breakpoint}) {
    display: none;
  }
`;

export const NavList = styled.ul`
  display: flex;
  list-style: none;
  gap: 2rem;
`;

export const NavItem = styled.li`
  color: #fff;
  cursor: pointer;
  font-size: 1rem;
  &:hover {
    text-decoration: underline;
  }
`;

export const EnterButton = styled.button`
  background-color: ${colors.green};
  border: none;
  color: #06054B;
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  border-radius: 12px;

  &:hover {
    opacity: 0.9;
  }

  @media (max-width: ${breakpoint}) {
    /* Em mobile, vamos manter visível
       mas em outro lugar no layout. */
  }
`;

/* Ícone hamburger para mobile */
export const MenuToggle = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: ${breakpoint}) {
    display: block;
    color: #fff;
  }
`;

export const MenuIcon = styled(FaBars)`
  font-size: 1.5rem;
`;

/* Menu mobile expansível */
export const MobileMenu = styled.div`
  position: absolute;
  top: 80px; /* mesma altura do header */
  left: 0;
  right: 0;
  background-color: ${colors.primary};
  z-index: 999;
  padding: 1rem;

  @media (min-width: ${breakpoint}) {
    display: none; /* Somente no mobile */
  }
`;

export const MobileMenuList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const MobileMenuItem = styled.li`
  color: #fff;
  font-size: 1rem;
  padding: 0.75rem 0;
  border-bottom: 1px solid rgba(255,255,255,0.2);
  cursor: pointer;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    text-decoration: underline;
  }
`;

export const UserInfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem; /* espaço entre foto, nome e créditos */
  
  /* Ajuste se quiser cor de texto, margin etc. */

  span {
    color: #fff;
    cursor: pointer;
    font-size: 1rem;
  }
  
  @media (max-width: 768px) {
    /* Se quiser mudá-lo no mobile */
  }
`;

export const UserImage = styled.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
  border-radius: 50%;
`;

export const CreditsTag = styled.span`
  background-color: ${colors.green};
  padding: 8px;
  border-radius: 4px;
  font-size: 0.9rem;
  /* Exemplo, refine como achar melhor */
`;