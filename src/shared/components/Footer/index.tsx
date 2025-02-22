import { Logo } from '../../assets/Logo';
import { Container, FooterContainer, FooterContent } from './styles';

export default function Footer() {
  return (
    <Container>
      <FooterContainer>
        <FooterContent style={{
          flexDirection: 'column',
          alignItems: 'flex-start',
          paddingLeft: 48
        }}>
          <Logo width={173} height={69} />
          <p>Copyright © 2025 Studio Vilela | Todos os direitos reservados</p>
        </FooterContent>
        <FooterContent className="back-to-top">
          <a href="#header">Voltar ao topo ↑</a>
        </FooterContent>
      </FooterContainer>
    </Container>
  );
}