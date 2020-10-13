const getRecipes = require('../services/recipePuppy');
const getGifFromRecipe = require('../services/giphy');

module.exports = {
    async getRecipes(request, response) {
        const clientRequest = request.query;

        const ingredientsList = clientRequest.i.split(',');

        const recipesResponse = await getRecipes.getRecipesFromIngredients(ingredientsList);

        if (recipesResponse) {

            response.json({
                keywords: ingredientsList,
                recipes: recipesResponse.results.map((recipe) => {
                    return {
                        title: recipe.title,
                        ingredients: recipe.ingredients,
                        link: recipe.href,
                    }
                })
            });
        }
    }
}