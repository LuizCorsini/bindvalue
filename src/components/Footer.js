import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background: linear-gradient(90deg, #3B2E8C, #591C55);
  color: #fff;
  padding: 2rem 1rem;
  text-align: center;
  font-size: 0.9rem;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;

  @media (min-width: 768px) {
    align-items: flex-start;
  }
`;

const Links = styled.a`
  color: #00d9ff;
  text-decoration: none;
  font-size: 0.9rem;

  &:hover {
    text-decoration: underline;
  }
`;

const Copyright = styled.p`
  margin-top: 1.5rem;
  font-size: 0.8rem;
  color: #aaa;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContent>
        <FooterSection>
          <h4>Sobre Nós</h4>
          <p>Especialistas em desenvolvimento de aplicativos e soluções tecnológicas.</p>
        </FooterSection>

        <FooterSection>
          <h4>Links Úteis</h4>
          <Links href="#home">Home</Links>
          <Links href="#services">Serviços</Links>
          <Links href="#portfolio">Portfólio</Links>
          <Links href="#contact">Contato</Links>
        </FooterSection>

        <FooterSection>
          <h4>Contato</h4>
          <p>Email: contato@bindvalue.dev</p>
          <p>Telefone: +55 (11) 99999-9999</p>
        </FooterSection>
      </FooterContent>

      <Copyright>
        &copy; {new Date().getFullYear()} BindValue Dev. Todos os direitos reservados.
      </Copyright>
    </FooterWrapper>
  );
};

export default Footer;
