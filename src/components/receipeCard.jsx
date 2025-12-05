function RecipeCard({ recipe, onSelect }) {
    return (
        <div
            onClick={() => onSelect(recipe)}
            className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-xl"
        >
            <img
                src={recipe.strMealThumb}
                alt={recipe.strMeal}
                className="w-full h-48 object-cover"
            />
            <div className="p-4">
                <h3 className="text-lg font-bold">{recipe.strMeal}</h3>
                <p className="text-gray-500 text-sm">{recipe.strCategory}</p>
            </div>
        </div>
    )
}

export default RecipeCard;

