import styled from 'styled-components';

export const FeaturesContainer = styled.section`
  padding: 4rem 2rem;
  background-color: #f8f8f8;
`;

export const FeaturesTitle = styled.h2`
  text-align: center;
  font-size: 3.5rem;
  color: #333;
  margin-bottom: 3rem;
`;

export const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

export const FeatureCard = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const FeatureIcon = styled.div`
  font-size: 3rem;
  color: #ff4081;
  margin-bottom: 1rem;
`;

export const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 1rem;
`;

export const FeatureDescription = styled.p`
  font-size: 1rem;
  color: #666;
  line-height: 1.6;
`;
