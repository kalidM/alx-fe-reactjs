import { useRecipeStore } from '../recipeStore';
import { Link } from 'react-router-dom';

const RecipeList = () => {
    const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);
    const recipes = useRecipeStore((state) => state.recipes);
    const searchTerm = useRecipeStore((state) => state.searchTerm);

    const displayedRecipes = searchTerm ? filteredRecipes : recipes;

    return (
        <div>
            {displayedRecipes.map((recipe) => (
                <div key={recipe.id}>
                    <Link to={`/recipe/${recipe.id}`}>
                        <h3>{recipe.title}</h3>
                    </Link>
                    <p>{recipe.description}</p>
                </div>
            ))}
        </div>
    );
};

export default RecipeList;