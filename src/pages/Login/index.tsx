// src/pages/Login/index.tsx
import { GoogleLogin } from '@react-oauth/google';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../shared/context/AuthContext';
import { Container, Form, GoogleButtonWrapper } from './styles';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  // Chamado quando o Google retorna as credenciais
  const handleCredentialResponse = (response: any) => {
    login(response.credential)
    navigate('/');
  };


  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Lógica de login com email/senha, se houver.
  };

  return (
    <Container>
      <h2>Entrar</h2>

      <Form onSubmit={handleSubmit}>
        <label>Email</label>
        <input type="email" placeholder="Digite seu e-mail" required />
        <label>Senha</label>
        <input type="password" placeholder="Digite sua senha" required />

        <button type="submit">Continuar</button>
      </Form>

      <p>Ou acesse com sua conta Google:</p>
      <GoogleButtonWrapper>
        <GoogleLogin
          ux_mode='popup'
          onSuccess={handleCredentialResponse}
          onError={() => {}}
        />
      </GoogleButtonWrapper>
    </Container>
  );
};

export default Login;
