import React, { useState } from 'react';
import {
  FeaturesContainer,
  FeaturesTitle,
  FeaturesSubtitle,
  SearchContainer,
  SearchForm,
  SearchInput,
  FilterSelect,
  SearchButton,
  ResultsGrid,
  RecipeCard,
  RecipeImage,
  RecipeInfo,
  RecipeTitle,
  RecipeMeta
} from './Features.styles';

const Features = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [cuisine, setCuisine] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchRecipes = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=18ed7a6005854383b44ff977374ee1a9&query=${searchTerm}&cuisine=${cuisine}&number=6`
      );
      const data = await response.json();
      setRecipes(data.results);
    } catch (error) {
      console.error('Erro ao buscar receitas:', error);
    } finally {
      setLoading(false);
    }
  };

  

  return (
    <FeaturesContainer>
      <FeaturesTitle>Descubra Novas Receitas</FeaturesTitle>
      <FeaturesSubtitle>
        Explore nossa vasta coleção de receitas com filtros avançados para encontrar exatamente o que você procura
      </FeaturesSubtitle>
      
      <SearchContainer>
        <SearchForm onSubmit={searchRecipes}>
          <SearchInput
            type="text"
            placeholder="Busque por receitas..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          
          <FilterSelect
            value={cuisine}
            onChange={(e) => setCuisine(e.target.value)}
          >
            <option value="">Todas as Cozinhas</option>
            <option value="italian">Italiana</option>
            <option value="mexican">Mexicana</option>
            <option value="japanese">Japonesa</option>
            <option value="indian">Indiana</option>
          </FilterSelect>
          
          <SearchButton type="submit">
            {loading ? 'Buscando...' : 'Buscar'}
          </SearchButton>
        </SearchForm>

        <ResultsGrid>
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.id}>
              <RecipeImage src={recipe.image} alt={recipe.title} />
              <RecipeInfo>
                <RecipeTitle>{recipe.title}</RecipeTitle>
                <RecipeMeta>
                  {recipe.readyInMinutes && `${recipe.readyInMinutes} minutos • `}
                  {recipe.servings && `${recipe.servings} porções`}
                </RecipeMeta>
              </RecipeInfo>
            </RecipeCard>
          ))}
        </ResultsGrid>
      </SearchContainer>
    </FeaturesContainer>
  );
};

export default Features;