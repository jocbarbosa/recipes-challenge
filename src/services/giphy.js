const axios = require('axios');

module.exports = {
    async getGif(search) {
        const response = await axios.default.get(`https://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_API}&q=${search}&limit=1&offset=0&rating=g&lang=${process.env.GIPHY_LANGUAGE}`);

        return response.data;
    }
}