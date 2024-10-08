import styled from 'styled-components';

export const FeaturesContainer = styled.section`
  padding: 4rem 1rem;
  background-color: white;

  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
`;

export const FeaturesTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const FeaturesSubtitle = styled.p`
  text-align: center;
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 3rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 2rem;
  }
`;

export const SearchContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const SearchForm = styled.form`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

export const SearchInput = styled.input`
  flex: 1;
  min-width: 200px;
  padding: 0.8rem 1rem;
  border: 2px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;

  &:focus {
    border-color: #ff4081;
    outline: none;
  }

  @media (max-width: 768px) {
    min-width: unset;
  }
`;

export const FilterSelect = styled.select`
  appearance: none;
  padding: 0.8rem 2.5rem 0.8rem 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  font-size: 1rem;
  color: #2d3748;
  background-color: white;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  width: 100%;
  max-width: 200px;

  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%236B7280' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 0.5rem center;
  background-size: 1.5em;

  &:hover {
    border-color: #cbd5e0;
    background-color: #f8fafc;
  }

  &:focus {
    border-color: #ff4081;
    outline: none;
    box-shadow: 0 0 0 3px rgba(255, 64, 129, 0.1);
  }

  & option {
    color: #2d3748;
    padding: 8px;
  }

  @media (max-width: 768px) {
    max-width: unset;
  }
`;

export const SearchButton = styled.button`
  background-color: #ff4081;
  color: white;
  padding: 0.8rem 2rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e6005c;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const ResultsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

export const RecipeCard = styled.div`
  background-color: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const RecipeImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

export const RecipeInfo = styled.div`
  padding: 1.5rem;
`;

export const RecipeTitle = styled.h3`
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 0.5rem;
`;

export const DetailButton = styled.button`
  background-color: #ff4081;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 6px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #e6005c;
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 1rem;
`;

export const ModalContainer = styled.div`
  background-color: white;
  border-radius: 12px;
  width: 90%;
  max-width: 900px;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  position: relative;
  animation: slideUp 0.3s ease-out;

  @keyframes slideUp {
    from {
      transform: translateY(20px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    max-height: 100vh;
    border-radius: 0;
  }
`;

export const ModalHeader = styled.div`
  padding: 1.5rem;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const ModalTitle = styled.h2`
  margin: 0;
  font-size: 1.5rem;
  color: #333;

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  color: #666;
  cursor: pointer;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.3s ease;

  &:hover {
    color: #333;
  }
`;

export const ModalContent = styled.div`
  padding: 1.5rem;
  overflow-y: auto;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const RecipeDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (max-width: 768px) {
    gap: 1.5rem;
  }
`;

export const RecipeMetrics = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: 0.75rem;
  }
`;

export const MetricItem = styled.div`
  background-color: #f8f9fa;
  padding: 1rem;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  
  span:first-child {
    font-size: 0.875rem;
    color: #666;
    margin-bottom: 0.25rem;
  }
  
  span:last-child {
    font-size: 1.125rem;
    font-weight: 600;
    color: #333;
  }

  @media (max-width: 768px) {
    padding: 0.75rem;

    span:first-child {
      font-size: 0.8rem;
    }

    span:last-child {
      font-size: 1rem;
    }
  }
`;

export const RecipeIngredients = styled.div`
  margin-top: 2rem;

  h3 {
    font-size: 1.25rem;
    color: #333;
    margin-bottom: 1rem;
  }

  ul {
    list-style-type: disc;
    padding-left: 1.5rem;

    li {
      margin-bottom: 0.5rem;
      color: #666;
    }
  }

  @media (max-width: 768px) {
    margin-top: 1.5rem;

    h3 {
      font-size: 1.1rem;
      margin-bottom: 0.75rem;
    }

    ul {
      padding-left: 1.25rem;

      li {
        font-size: 0.9rem;
        margin-bottom: 0.4rem;
      }
    }
  }
`;

export const RecipeInstructions = styled.div`
  margin-top: 2rem;

  h3 {
    font-size: 1.25rem;
    color: #333;
    margin-bottom: 1rem;
  }

  div {
    color: #666;
    line-height: 1.6;
  }

  @media (max-width: 768px) {
    margin-top: 1.5rem;

    h3 {
      font-size: 1.1rem;
      margin-bottom: 0.75rem;
    }

    div {
      font-size: 0.9rem;
      line-height: 1.5;
    }
  }
`;

export const DietTagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;

  @media (max-width: 768px) {
    gap: 0.4rem;
    margin-top: 0.75rem;
  }
`;

export const DietTag = styled.span`
  background-color: #e8f5e9;
  color: #2e7d32;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 0.8rem;
    padding: 0.4rem 0.8rem;
  }
`;