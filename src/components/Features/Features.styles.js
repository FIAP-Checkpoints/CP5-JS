import styled from 'styled-components';

export const FeaturesContainer = styled.section`
  padding: 4rem 2rem;
  background-color: white;
`;

export const FeaturesTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 1rem;
`;

export const FeaturesSubtitle = styled.p`
  text-align: center;
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 3rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
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
`;

export const FilterSelect = styled.select`
  padding: 0.8rem 1rem;
  border: 2px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;

  &:focus {
    border-color: #ff4081;
    outline: none;
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
`;

export const ResultsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
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

export const RecipeMeta = styled.p`
  font-size: 0.9rem;
  color: #666;
`;