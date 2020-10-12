const axios = require("axios");

module.exports = {
    async getRecipesFromIngredients(ingredients) {
        const response = await axios.default.get(`http://www.recipepuppy.com/api/?i=${ingredients}`);

        return response.data;
    }
}