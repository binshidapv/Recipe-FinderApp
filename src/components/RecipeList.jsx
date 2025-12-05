import RecipeCard from "./receipeCard";

function RecipeList({ recipes, onSelectRecipe }) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
            {recipes.map((recipe) => (
                <RecipeCard
                    key={recipe.idMeal}
                    recipe={recipe}
                    onSelect={onSelectRecipe}
                />
            ))}
        </div>
    )
}

export default RecipeList;
