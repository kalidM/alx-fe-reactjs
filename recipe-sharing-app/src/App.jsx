import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';
import SearchBar from './components/SearchBar';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';

function App() {
    return (
        <BrowserRouter>
            <nav>
                <Link to="/">Home</Link> | <Link to="/add">Add Recipe</Link> |{' '}
                <Link to="/favorites">Favorites</Link>
            </nav>
            <SearchBar />
            <Routes>
                <Route path="/" element={<RecipeList />} />
                <Route path="/add" element={<AddRecipeForm />} />
                <Route path="/recipe/:recipeId" element={<RecipeDetails />} />
                <Route path="/favorites" element={<FavoritesList />} />
            </Routes>
            <RecommendationsList />
        </BrowserRouter>
    );
}

export default App;