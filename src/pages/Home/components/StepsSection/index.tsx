import {
  Button,
  ImageWrapper,
  ListItem,
  StepsContainer,
  StepSection,
  StepsList,
  SubTitle,
  TextBlock,
  Title,
  TitleWrapper
} from './styles';

import stepsImage from '../../../../shared/assets/images/stepsImage.jpeg';

export default function StepsSectionComponent() {
  return (
    <StepSection>
      <StepsContainer>
        <TitleWrapper>
          <SubTitle>Nunca foi tão fácil buscar um CPF</SubTitle>
          <Title>Buscas rápidas e simples em 4 passos</Title>
        </TitleWrapper>
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between'
        }}>
          <TextBlock>
            <StepsList>
              <ListItem>
                <span>1</span>Busque o CPF;
              </ListItem>
              <ListItem>
                <span>2</span>Confirme se o nome é referente à pessoa consultada;
              </ListItem>
              <ListItem>
                <span>3</span>Compre créditos para desbloquear sua consulta completa;
              </ListItem>
              <ListItem>
                <span>4</span>Acesse as informações;
              </ListItem>
            </StepsList>

            <Button>Consultar CPF</Button>
          </TextBlock>

          <ImageWrapper>
            <img src={stepsImage} alt="Pessoa digitando para pesquisa" />
          </ImageWrapper>
        </div>
      </StepsContainer>
    </StepSection>
  );
}
