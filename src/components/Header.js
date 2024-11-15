import React, { useState } from 'react';
import logo from '../assets/images/bindvalue_logo.webp';
import {
  HeaderWrapper,
  Container,
  Logo,
  Nav,
  NavLink,
  Hamburger,
  CTAButton
} from './Header.styles';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <HeaderWrapper>
      <Container>
        <Logo href="/">
          <img src={logo} alt="BindValue.dev Logo" />
        </Logo>
        <Nav open={isMenuOpen}>
          <NavLink href="#home">Home</NavLink>
          <NavLink href="#services">Serviços</NavLink>
          <NavLink href="#portfolio">Portfólio</NavLink>
          <NavLink href="#contact">Contato</NavLink>
        </Nav>
        <CTAButton href="#contact">Fale Conosco</CTAButton>
        <Hamburger onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </Hamburger>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
