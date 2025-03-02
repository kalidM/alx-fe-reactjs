import { useParams } from 'react-router-dom';
import { useRecipeStore } from '../recipeStore';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeDetails = () => {
    const { recipeId } = useParams();
    const recipe = useRecipeStore((state) =>
        state.recipes.find((recipe) => recipe.id === parseInt(recipeId))
    );
    const addFavorite = useRecipeStore((state) => state.addFavorite);
    const removeFavorite = useRecipeStore((state) => state.removeFavorite);
    const favorites = useRecipeStore((state) => state.favorites);

    const isFavorite = favorites.includes(recipe.id);

    const handleFavoriteClick = () => {
        if (isFavorite) {
            removeFavorite(recipe.id);
        } else {
            addFavorite(recipe.id);
        }
    };

    if (!recipe) {
        return <div>Recipe not found</div>;
    }

    return (
        <div>
            <h1>{recipe.title}</h1>
            <p>{recipe.description}</p>
            <button onClick={handleFavoriteClick}>
                {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
            </button>
            <EditRecipeForm recipeId={recipe.id} onCancel={() => window.history.back()} />
            <DeleteRecipeButton recipeId={recipe.id} />
        </div>
    );
};

export default RecipeDetails;