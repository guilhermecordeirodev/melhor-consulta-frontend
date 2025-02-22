import { FaLock } from 'react-icons/fa';
import { HiSquaresPlus } from 'react-icons/hi2';
import { MdTrendingUp } from 'react-icons/md';
import { colors } from '../../../../shared/assets/colors';
import { Container, FeatureCard, FeatureCardContainer, FeaturesTitle, FeaturesTitleWrapper } from './styles';

export default function FeaturesSection() {
  return (
    <Container>
      <FeaturesTitleWrapper>
        <FeaturesTitle>
          Tenha acesso a todas as informações essenciais para realizar suas negociações de forma segura, tudo em um só lugar.
        </FeaturesTitle>
      </FeaturesTitleWrapper>
      <FeatureCardContainer>
        <FeatureCard>
          <HiSquaresPlus size={50} color={colors.green} />
          <h4>Personalização</h4>
          <p>Cada cliente é único, e nossas consultas são personalizadas para atender às suas necessidades específicas. Trabalhamos de perto com você para entender seus objetivos e desafios, fornecendo soluções sob medida que realmente funcionam.</p>
        </FeatureCard>
        <FeatureCard>
          <FaLock size={45} color={colors.green} />
          <h4>Confidencialidade</h4>
          <p>Tratamos todas as informações fornecidas durante as consultas com o mais alto nível de confidencialidade e segurança. Você pode confiar que seus dados estarão seguros conosco, respeitando todas as normas de privacidade e proteção de dados.</p>
        </FeatureCard>
        <FeatureCard>
          <div style={{
            height: 45, width: 45,
            display: 'flex', alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: colors.green,
            borderRadius: 3
          }}>
            <MdTrendingUp size={35} color='#fff' />
          </div>
          <h4>Eficiência</h4>
          <p>Valorizamos seu tempo e garantimos que nossas consultas sejam realizadas de maneira eficiente e dentro dos prazos acordados. Nossa abordagem é focada em resultados rápidos e eficazes, sem comprometer a qualidade.</p>
        </FeatureCard>
      </FeatureCardContainer>
    </Container>
  );
}
