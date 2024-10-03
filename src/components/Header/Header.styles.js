import styled from "styled-components";

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #ffffff;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
  z-index: 1000;

  @media (max-width: 768px) {
    background-color: ${props => props.isScrolled ? '#ffffff' : 'transparent'};
    box-shadow: ${props => props.isScrolled ? '0 2px 10px rgba(0,0,0,0.1)' : 'none'};
  }
`;

export const Logo = styled.a`
  font-size: 1.8rem;
  font-weight: bold;
  color: #ff4081;
  text-decoration: none;
  list-style: none;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.1);
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const Nav = styled.nav`
  display: flex;
  gap: 1.5rem;
  
  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    right: ${props => props.isOpen ? '0' : '-100%'};
    height: 100vh;
    width: 250px;
    background-color: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    padding: 5rem 2rem 2rem;
    box-shadow: -2px 0 10px rgba(0,0,0,0.1);
    flex-direction: column;
    align-items: flex-start;
    transition: right 0.3s ease-in-out;
  }
`;

export const NavItem = styled.a`
  color: #333;
  text-decoration: none;
  font-weight: 500;
  position: relative;
  transition: color 0.2s ease;
  
  @media (min-width: 769px) {
    &:hover {
      color: #ff4081;
    }
    
    &::after {
      content: '';
      position: absolute;
      width: 0;
      height: 2px;
      bottom: -5px;
      left: 0;
      background-color: #ff4081;
      transition: width 0.3s ease;
    }
    
    &:hover::after {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    color: #333;
    margin-bottom: 1rem;
    font-size: 1.2rem;

    &:hover, &:focus {
      color: #333;
    }
  }
`;

export const HamburgerMenu = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  color: #333;
  transition: color 0.2s ease;
  z-index: 1001;
  
  &:hover {
    color: #ff4081;
  }
  
  @media (max-width: 768px) {
    display: block;
    color: ${props => props.isScrolled ? '#333' : '#333'};
  }
`;