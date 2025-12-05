const BASE_URL = "https://www.themealdb.com/api/json/v1/1";
export async function searchRecipes(query) {
    const response =await fetch(`${BASE_URL}/search.php?s=${query}`);
    const data=await response.json();
    return data.meals;
}

export async function getRecipeById(id) {
    const response =await fetch(`${BASE_URL}/lookup.php?i=${id}`);
    const data=await response.json();
    return data.meals;
}


export async function getRandomRecipe() {
    const response =await fetch(`${BASE_URL}/random.php`);
    const data=await response.json();
    return data.meals;
}

export async function getRecipeByCategory(category) {
    const response =await fetch(`${BASE_URL}/filter.php?c=${category}`);
    const data=await response.json();
    return data.meals;

}
export async function getCategories() {
    const response =await fetch(`${BASE_URL}/categories.php`);
    const data=await response.json();
    return data.categories;
}
