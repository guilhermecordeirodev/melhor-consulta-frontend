import { FaClock, FaLock, FaMedal, FaShieldAlt } from 'react-icons/fa';
import celulares from '../../../../shared/assets/images/iPhone 16 Pro.png';
import { AdvantagesContainer, CardBody, CardBox, CardsContainer, IconWrapper, PhonesWrapper } from './styles';

export default function AdvantagesSection() {
  return (
    <AdvantagesContainer>
      <PhonesWrapper>
        <CardsContainer style={{ alignItems: 'flex-end', zIndex: 1 }}>
          <CardBox>
            <IconWrapper>
              <FaLock color='#FFF' size={40} />
            </IconWrapper>
            <CardBody>
              <h4>100% Sigiloso</h4>
              <p>Sua privacidade é nossa prioridade. Ninguém jamais saberá sobre suas consultas, nem mesmo a pessoa pesquisada.</p>
            </CardBody>
          </CardBox>
          <CardBox>
            <IconWrapper>
              <FaClock color='#FFF' size={40}/>
            </IconWrapper>
            <CardBody>
              <h4>Receba na hora</h4>
              <p>Visualize e receba a pesquisa completa em tela imediatamente após a consulta.</p>
            </CardBody>
          </CardBox>
        </CardsContainer>

        <img
          src={celulares}
          alt="celular"
          style={{ marginTop: 36, marginRight: -24, marginLeft: -24, zIndex: 2 }}
        />

        <CardsContainer style={{ alignItems: 'flex-start', zIndex: 3 }}>
          <CardBox>
            <IconWrapper>
              <FaShieldAlt color='#FFF' size={40}/>
            </IconWrapper>
            <CardBody>
              <h4>Segurança</h4>
              <p>Nossa plataforma segue rigorosos padrões de segurança e conformidade com a legislação vigente.</p>
            </CardBody>
          </CardBox>
          <CardBox>
            <IconWrapper>
              <FaMedal color='#FFF' size={40}/>
            </IconWrapper>
            <CardBody>
              <h4>Garantia</h4>
              <p>Você recebe a pesquisa ou seu dinheiro de volta.</p>
            </CardBody>
          </CardBox>
        </CardsContainer>
      </PhonesWrapper>
    </AdvantagesContainer>
  );
}
