function RecipeModal({ recipe, onClose }) {
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
        if (recipe[`strIngredient${i}`]) {
            ingredients.push(
                `${recipe[`strIngredient${i}`]} - ${recipe[`strMeasure${i}`]}`
            );
        }
    }

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
            onClick={onClose}
        >
            <div
                className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 m-4"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 float-right"
                    onClick={onClose}
                >
                    ✕
                </button>

                <img
                    src={recipe.strMealThumb}
                    alt={recipe.strMeal}
                    className="w-full h-64 object-cover rounded-lg mt-8"
                />

                <h2 className="text-2xl font-bold mt-4">{recipe.strMeal}</h2>
                <p className="text-gray-500">{recipe.strCategory} | {recipe.strArea}</p>

                <h3 className="text-xl font-bold mt-4">Ingredients</h3>
                <ul className="list-disc list-inside">
                    {ingredients.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>

                <h3 className="text-xl font-bold mt-4">Instructions</h3>
                <p className="text-gray-700 whitespace-pre-line">{recipe.strInstructions}</p>
            </div>
        </div>
    )
}

export default RecipeModal;

