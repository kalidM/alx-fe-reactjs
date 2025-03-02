import { useParams } from 'react-router-dom';
import { useRecipeStore } from '../recipeStore';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeDetails = () => {
    const { recipeId } = useParams();
    const recipe = useRecipeStore((state) =>
        state.recipes.find((recipe) => recipe.id === parseInt(recipeId))
    );

    if (!recipe) {
        return <div>Recipe not found</div>;
    }

    return (
        <div>
            <h1>{recipe.title}</h1>
            <p>{recipe.description}</p>
            <EditRecipeForm recipeId={recipe.id} onCancel={() => window.history.back()} />
            <DeleteRecipeButton recipeId={recipe.id} onDelete={() => window.history.back()} />
        </div>
    );
};

export default RecipeDetails;