import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const slideUp = keyframes`
  from { transform: translateY(10px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`;

export const FooterContainer = styled.footer`
  background-color: white;
  color: #333;
  padding: 2rem 1rem;
  font-family: Arial, sans-serif;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
`;

export const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 2rem;
`;

export const FooterSection = styled.div`
  flex: 1;
  min-width: 200px;
  margin-bottom: 1rem;
  animation: ${fadeIn} 0.5s ease-out;

  @media (max-width: 768px) {
    flex-basis: 100%;
  }
`;

export const FooterTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: #ff4081;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -5px;
    width: 0;
    height: 2px;
    background-color: #ff4081;
    transition: width 0.3s ease;
  }
  
  &:hover::after {
    width: 70%;
  }
`;

export const FooterList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const FooterListItem = styled.li`
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateX(5px);
  }
`;

export const FooterLink = styled.a`
  color: #333;
  text-decoration: none;
  transition: color 0.3s;
  
  &:hover {
    color: #ff4081;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;
`;

export const IconWrapper = styled.span`
  margin-right: 0.5rem;
  color: #ff4081;
`;

export const SocialLink = styled(FooterLink)`
  display: inline-block;
  transition: transform 0.3s ease, color 0.3s;
  
  &:hover {
    transform: scale(1.2);
    color: #ff4081;
  }
`;

export const Copyright = styled.div`
  text-align: center;
  margin-top: 2rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  animation: ${slideUp} 0.5s ease-out;
`;