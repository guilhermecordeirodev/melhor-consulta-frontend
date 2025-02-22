import { useState } from 'react';
import api from '../../services/api/api';
import ConsultationModal from '../ConsultationModal';
import { Button, Container, Form, Input } from './styles';

export default function CPFSearchForm() {
  const [cpf, setCpf] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [consultaData, setConsultaData] = useState(null);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    // Exemplo de chamada a API (substitua pela sua rota real)
    try {
      const response = await api.get(`/public/cpf/${cpf}`);
      setConsultaData(response.data);
      setIsModalOpen(true);
    } catch (error) {
      console.error('Erro na consulta', error);
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Digite o CPF aqui"
          value={cpf}
          onChange={(e) => {
            setCpf(e.target.value)
          }}
          required
        />
        <Button type="submit">Consultar CPF</Button>
      </Form>

      {isModalOpen && (
        <ConsultationModal
          data={consultaData}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </Container>
  );
}
