import { useState } from "react";
import SearchBar from "./components/searchBar";
import RecipeList from "./components/RecipeList";
import RecipeModal from "./components/RecipeModal";
import CategoryFilter from "./components/CategoryFilter";
import LoadingSpinner from "./components/LoadingSpinner";
import { searchRecipes, getRecipeByCategory, getRecipeById } from "./service/api";

function App() {
    const [recipes, setRecipes] = useState([]);
    const [selectedRecipe, setSelectedRecipe] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSearch = async (query) => {
        setLoading(true);
        setError(null);
        const data = await searchRecipes(query);
        if (data) {
            setRecipes(data);
        } else {
            setError("No recipes found");
        }
        setLoading(false);
    }

    const handleCategorySelect = async (category) => {
        if (!category) return;
        setLoading(true);
        setError(null);
        const data = await getRecipeByCategory(category);
        if (data) {
            setRecipes(data);
        } else {
            setError("No recipes found");
        }
        setLoading(false);
    }

    const handleSelectRecipe = async (recipe) => {
        const fullRecipe = await getRecipeById(recipe.idMeal);
        setSelectedRecipe(fullRecipe[0]);
    }

    const handleCloseModal = () => {
        setSelectedRecipe(null);
    }

    return (
        <div className="min-h-screen bg-gray-100">
            <h1 className="text-4xl font-bold text-center py-6 text-green-600">
                Recipe Finder
            </h1>

            <div className="flex justify-center gap-4 px-4">
                <SearchBar onSearch={handleSearch} />
                <CategoryFilter onSelectCategory={handleCategorySelect} />
            </div>

            {loading && <LoadingSpinner />}

            {error && (
                <p className="text-center text-red-500 mt-4">{error}</p>
            )}

            <RecipeList recipes={recipes} onSelectRecipe={handleSelectRecipe} />

            {selectedRecipe && (
                <RecipeModal recipe={selectedRecipe} onClose={handleCloseModal} />
            )}
        </div>
    );
}

export default App;
