import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0; 
  left: 0; 
  right: 0; 
  bottom: 0;
  background-color: rgba(0,0,0,0.5);
  display: flex; 
  justify-content: center;
  align-items: center;
`;

export const Modal = styled.div`
  background-color: #fff;
  padding: 1.5rem;
  border-radius: 8px;
  max-width: 400px;
  width: 100%;
  position: relative;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  cursor: pointer;
  border: none;
  background: transparent;
  font-size: 1.2rem;
`;

export const BuyButton = styled.button`
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
  background-color: orange;
  border: none;
  border-radius: 4px;
`;
