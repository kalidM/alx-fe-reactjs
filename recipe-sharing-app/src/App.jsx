import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';

function App() {
    return (
        <BrowserRouter>
            <nav>
                <Link to="/">Home</Link> | <Link to="/add">Add Recipe</Link>
            </nav>
            <Routes>
                <Route path="/" element={<RecipeList />} />
                <Route path="/add" element={<AddRecipeForm />} />
                <Route path="/recipe/:recipeId" element={<RecipeDetails />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;