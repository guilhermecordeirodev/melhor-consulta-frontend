import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { Product } from "../../../../dtos/product";
import bgHero from '../../../../shared/assets/images/BG.png';
import ControlledInput from '../../../../shared/components/ControlledInput';
import LoadingBackdrop from "../../../../shared/components/LoadingBackdrop";
import api from '../../../../shared/services/api/api';
import { maskCPForCNPJ } from "../../../../shared/utils/formatters";
import Modal from "../ModalPurchase";
import { Container, HeroContent, HeroInput, Overlay, Title } from './styles';

interface IHeroForm {
  cpf: string;
}

const schema: Yup.ObjectSchema<IHeroForm> = Yup.object().shape({
  cpf: Yup.string().required("O CPF é obrigatório")
});


interface IHeroProps {
  products: Array<Product>;
}

export default function HeroSection({ products }: IHeroProps) {
  const [loading, setLoading] = useState<boolean>(false);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [userData, setUserData] = useState<any>({} as any);
  const { control, handleSubmit } = useForm({ resolver: yupResolver(schema) });

  async function handleSubmitForm(data: IHeroForm) {
    setLoading(true);
    try {
      const response = await api.get(`/public/cpf/${data.cpf}`)
      setUserData(response.data);
      setLoading(false);
      setModalOpen(true);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }

  function closeModal() {
    setModalOpen(false);
  }

  return (
    <>
      <LoadingBackdrop open={loading} />
      <Container style={{ backgroundImage: `url(${bgHero})` }}>
        <Overlay />
        <HeroContent>
          <Title>
            Consulte informações de <br />
            <strong>qualquer pessoa em segundos</strong>
          </Title>
          <p>Consulte informações pelo CPF de forma rápida e precisa</p>
          <HeroInput>
            <ControlledInput control={control} mask={maskCPForCNPJ} name='cpf' placeholder='Digite o CPF aqui' />
            {/* <input type="text" placeholder="Digite o CPF aqui" /> */}
            <button onClick={handleSubmit(handleSubmitForm)}>Consultar CPF</button>
          </HeroInput>
          <p style={{ marginTop: '1rem', fontSize: 14 }}>
            + de 10 mil consultas já realizadas
          </p>
        </HeroContent>
      </Container>
      <Modal isOpen={modalOpen} onClose={closeModal} products={products} userData={userData} />
    </>
  );
}
