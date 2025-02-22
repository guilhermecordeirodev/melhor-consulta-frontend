// src/pages/Register/index.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Form } from './styles';

const Register: React.FC = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Lógica para criar conta (enviar para o backend)
    // console.log({ name, email, acceptTerms });
    // Redirecionar usuário para a Home ou Login
    navigate('/login');
  };

  return (
    <Container>
      <h2>Criar uma conta</h2>
      <Form onSubmit={handleSubmit}>
        <label>Nome Completo</label>
        <input
          type="text"
          placeholder="Seu nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label>E-mail</label>
        <input
          type="email"
          placeholder="Seu e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <div style={{ margin: '1rem 0', textAlign: 'left' }}>
          <input
            type="checkbox"
            id="chkTermos"
            checked={acceptTerms}
            onChange={(e) => setAcceptTerms(e.target.checked)}
          />
          <label htmlFor="chkTermos" style={{ marginLeft: '0.5rem' }}>
            Aceito as políticas de cookies
          </label>
        </div>

        <button type="submit">Cadastrar</button>
      </Form>
    </Container>
  );
};

export default Register;
