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
`;

export const Logo = styled.a`
  font-size: 1.8rem;
  font-weight: bold;
  color: #ff4081;
  text-decoration: none;
  list-style: none;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.1);
  
`;

export const Nav = styled.nav`
  display: flex;
  gap: 1.5rem;
  
  @media (max-width: 768px) {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(5px);
    padding: 1rem;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    flex-direction: column;
    align-items: center;
    transform: ${props => props.isOpen ? 'translateY(0)' : 'translateY(-100%)'};
    opacity: ${props => props.isOpen ? 1 : 0};
    visibility: ${props => props.isOpen ? 'visible' : 'hidden'};
    transition: all 0.3s ease-in-out;
  }
`;

export const NavItem = styled.a`
  color: #333;
  text-decoration: none;
  font-weight: 500;
  position: relative;
  transition: color 0.2s ease;
  
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
  }
`;
