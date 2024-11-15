import React from 'react';
import styled from 'styled-components';

const HomeWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 0 1rem;
  background-color: #1a1a2e;
  color: #fff;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #00d9ff;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  max-width: 600px;
  margin-bottom: 2rem;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const CallToAction = styled.a`
  background-color: #00d9ff;
  color: #fff;
  padding: 0.8rem 1.5rem;
  border-radius: 4px;
  text-decoration: none;
  font-size: 1.2rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #008fb3;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0.6rem 1rem;
  }
`;

const Home = () => {
  return (
    <HomeWrapper>
      <Title>Bem-vindo ao BindValue Dev</Title>
      <Subtitle>
        Somos especialistas em desenvolvimento de aplicativos e soluções tecnológicas para o futuro.
      </Subtitle>
      <CallToAction href="#contact">Fale Conosco</CallToAction>
    </HomeWrapper>
  );
};

export default Home;
