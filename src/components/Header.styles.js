import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  background: linear-gradient(90deg, #3b2e8c, #591c55, #3b2e8c);
  background-size: 300% 300%;
  animation: gradientShift 10s infinite linear;
  color: #fff;
  padding: 1rem 0;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @keyframes gradientShift {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

export const Logo = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #00d9ff;

  img {
    height: 40px;
    width: auto;

    @media (min-width: 768px) {
      height: 50px;
    }

    @media (min-width: 1024px) {
      height: 60px;
    }
  }
`;

export const Nav = styled.nav`
  display: flex;
  gap: 1.5rem;

  @media (max-width: 768px) {
    display: ${(props) => (props.open ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    top: 100%;
    right: 0;
    background-color: #1a1a2e;
    width: 100%;
    text-align: center;
  }
`;

export const NavLink = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.3s ease;

  &:hover {
    color: #00d9ff;
  }
`;

export const CTAButton = styled.a`
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
    display: none;
  }
`;

export const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  gap: 0.3rem;

  span {
    width: 25px;
    height: 3px;
    background-color: #fff;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;