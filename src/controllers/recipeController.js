const getRecipes = require('../services/recipePuppy');

module.exports = {
    getRecipes(request, response) {
        const clientRequest = request.query;

        const ingredientsList = clientRequest.i.split(',');

        // call axios function
        getRecipes.getRecipesFromIngredients(ingredientsList)
            .then(result => {
                response.json({
                    keywords: ingredientsList,
                    recipes: result.results.map((recipe) => {
                        return {
                            title: recipe.title,
                            ingredients: recipe.ingredients,
                            link: recipe.href
                        }
                    })
                });
            })
            .catch((error) => {
                response.status(500).json({
                    status: 500,
                    message: "The site is unavailable",
                    details: error
                });
            });
    }
}