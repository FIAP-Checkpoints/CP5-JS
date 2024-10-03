import styled from 'styled-components';

export const HeroContainer = styled.section`
  position: relative;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('../../../food.avif') no-repeat center center;
  background-size: cover;
  color: white;
  margin-top: 0; 

  @media (max-width: 768px) {
    height: calc(100vh - 60px);
  }
`;

export const HeroContent = styled.div`
  max-width: 600px;
  z-index: 1;
  padding: 0 5%; 
`;

export const HeroTitle = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const HeroDescription = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 1.5rem;
  }
`;

export const DownloadButton = styled.a`
  display: inline-block;
  background-color: #ff4081;
  color: white;
  padding: 0.8rem 1.5rem;
  border-radius: 30px;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: #e6005c;
  }

  @media (max-width: 480px) {
    padding: 0.7rem 1.2rem;
    font-size: 0.9rem;
  }
`;