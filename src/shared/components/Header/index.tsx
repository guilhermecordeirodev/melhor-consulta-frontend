import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Logo } from '../../assets/Logo';
import { useAuth } from '../../context/AuthContext';
import { Container } from '../Footer/styles';
import LoadingBackdrop from '../LoadingBackdrop';
import {
  CreditsTag,
  EnterButton,
  HeaderContainer,
  MenuIcon,
  MenuToggle,
  MobileMenu,
  MobileMenuItem,
  MobileMenuList,
  Nav,
  NavItem,
  NavList,
  UserImage,
  UserInfoContainer
} from './styles';


export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loading, _setLoading] = useState(false);
  const navigate = useNavigate();

  const { user } = useAuth();

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // useEffect(() => {
  //   if (user.user && user.user.name) {
  //     setLoading(false);
  //   }
  // }, [user])

  return (
    <>
      {loading ? 
        (<LoadingBackdrop open={loading} />) :
        (<Container>
          <HeaderContainer id="header">
            <Logo width={120} /> {/* Ajuste o tamanho da logo, se quiser */}

            {/* Menu desktop */}
            <Nav>
              <NavList>
                <NavItem>Consultas</NavItem>
                <NavItem><a href="#pacotes">Pacotes</a></NavItem>
                <NavItem>FAQ</NavItem>
                <NavItem>Termos</NavItem>
              </NavList>
            </Nav>

            {/* Se TIVER user, mostra a foto + nome + créditos;
              caso NÃO tiver (user == null), poderia mostrar o botão "Entrar" */}
            {user && user.user ? (
              <UserInfoContainer>
                <CreditsTag>Créditos: {user.user?.quantityOfSearch || 0}</CreditsTag>
                <span>{user.user?.name.split(' ')[0]}</span>
                <UserImage src={user.user.picture} alt="Foto do usuário" />
              </UserInfoContainer>
            ) : (
              <EnterButton onClick={() => navigate('/login')}>Entrar</EnterButton>
            )}

            {/* Ícone de menu (visível somente em mobile) */}
            <MenuToggle onClick={handleToggleMenu}>
              <MenuIcon />
            </MenuToggle>

            {/* Menu mobile (abre/fecha quando clica no ícone) */}
            {menuOpen && (
              <MobileMenu>
                <MobileMenuList>
                  <MobileMenuItem>Consultas</MobileMenuItem>
                  <MobileMenuItem>Pacotes</MobileMenuItem>
                  <MobileMenuItem>FAQ</MobileMenuItem>
                  <MobileMenuItem>Termos</MobileMenuItem>
                  <hr />
                  {user ? (
                    <MobileMenuItem>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                          <UserImage src={user.user.picture} alt="Foto do usuário" />
                          <span>{user.user.name.split(' ')[0]}</span>
                        </div>
                        <CreditsTag>Créditos: {user.user.quantityOfSearch}</CreditsTag>
                      </div>
                    </MobileMenuItem>
                  ) : (
                    <MobileMenuItem>
                      <EnterButton onClick={() => navigate('/login')}>Entrar</EnterButton>
                    </MobileMenuItem>
                  )}
                </MobileMenuList>
              </MobileMenu>
            )}
          </HeaderContainer>
        </Container>)
      }
    </>
  );
}
