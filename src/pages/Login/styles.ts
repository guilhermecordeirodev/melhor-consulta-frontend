// src/pages/Login/styles.ts
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 400px;
  margin: 2rem auto;
  text-align: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 2rem;

  label {
    text-align: left;
    font-weight: 600;
  }

  input {
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  button[type='submit'] {
    margin-top: 1rem;
    padding: 0.75rem;
    border: none;
    border-radius: 4px;
    background-color: #0099ff;
    color: #fff;
    cursor: pointer;
    font-size: 1rem;

    &:hover {
      background-color: #007acc;
    }
  }
`;

export const GoogleButtonWrapper = styled.div`
  display: inline-block;
  margin: 1rem 0;
  /* A própria API do Google irá injetar o botão aqui */
`;
