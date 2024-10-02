import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
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
  // Componentes Modal
  ModalOverlay,
  ModalContainer,
  ModalHeader,
  ModalTitle,
  CloseButton,
  ModalContent,
  RecipeDetails,
  RecipeMetrics,
  MetricItem,
  RecipeIngredients,
  RecipeInstructions,
  DetailButton,
  DietTag,
  DietTagsContainer
} from './Features.styles';

const Features = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [cuisine, setCuisine] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fecha o modal quando pressionar ESC
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) setIsModalOpen(false);
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);

  // Previne o scroll do body quando o modal está aberto
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  const searchRecipes = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const searchResponse = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=18ed7a6005854383b44ff977374ee1a9&query=${searchTerm}&cuisine=${cuisine}&number=8` // api (mostrar 8 receitas)
      );
      const searchData = await searchResponse.json();
      setRecipes(searchData.results);
    } catch (error) {
      console.error('Erro ao buscar receitas:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchRecipeDetails = async (recipeId) => {
    try {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=18ed7a6005854383b44ff977374ee1a9`
      );
      const data = await response.json();
      setSelectedRecipe(data);
      setIsModalOpen(true);
    } catch (error) {
      console.error('Erro ao buscar detalhes da receita:', error);
    }
  };

  return (
    <FeaturesContainer id='features'>
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
            {loading ? 'Buscando...' : <Search />}
          </SearchButton>
        </SearchForm>
        <ResultsGrid>
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.id}>
              <RecipeImage src={recipe.image} alt={recipe.title} />
              <RecipeInfo>
                <RecipeTitle>{recipe.title}</RecipeTitle>
                <DetailButton onClick={() => fetchRecipeDetails(recipe.id)}>
                  Ver Detalhes
                </DetailButton>
              </RecipeInfo>
            </RecipeCard>
          ))}
        </ResultsGrid>
      </SearchContainer>

      {isModalOpen && selectedRecipe && (
        <ModalOverlay onClick={() => setIsModalOpen(false)}>
          <ModalContainer onClick={e => e.stopPropagation()}>
            <ModalHeader>
              <ModalTitle>{selectedRecipe.title}</ModalTitle>
              <CloseButton onClick={() => setIsModalOpen(false)}>×</CloseButton>
            </ModalHeader>
            
            <ModalContent>
              <RecipeDetails>
                <RecipeImage 
                  src={selectedRecipe.image} 
                  alt={selectedRecipe.title} 
                />
                
                <RecipeMetrics>
                  <MetricItem>
                    <span>Tempo de Preparo</span>
                    <span>{selectedRecipe.readyInMinutes} minutos</span>
                  </MetricItem>
                  <MetricItem>
                    <span>Porções</span>
                    <span>{selectedRecipe.servings}</span>
                  </MetricItem>
                  <MetricItem>
                    <span>Pontuação de Saúde</span>
                    <span>{selectedRecipe.healthScore}/100</span>
                  </MetricItem>
                  <MetricItem>
                    <span>Preço por Porção</span>
                    <span>${(selectedRecipe.pricePerServing / 100).toFixed(2)}</span>
                  </MetricItem>
                </RecipeMetrics>

                <div>
                  <RecipeIngredients>
                    <h3>Ingredientes</h3>
                    <ul>
                      {selectedRecipe.extendedIngredients.map((ingredient) => (
                        <li key={ingredient.id}>
                          {ingredient.amount} {ingredient.unit} {ingredient.name}
                        </li>
                      ))}
                    </ul>
                  </RecipeIngredients>

                  <RecipeInstructions>
                    <h3>Modo de Preparo</h3>
                    <div dangerouslySetInnerHTML={{ __html: selectedRecipe.instructions }} />
                  </RecipeInstructions>
                </div>

                {selectedRecipe.diets?.length > 0 && (
                  <div>
                    <h3>Dietas</h3>
                    <DietTagsContainer>
                      {selectedRecipe.diets.map((diet) => (
                        <DietTag key={diet}>
                          {diet}
                        </DietTag>
                      ))}
                    </DietTagsContainer>
                  </div>
                )}
              </RecipeDetails>
            </ModalContent>
          </ModalContainer>
        </ModalOverlay>
      )}
    </FeaturesContainer>
  );
};

export default Features;