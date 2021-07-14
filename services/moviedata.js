const dotenv = require('dotenv');
const axios = require('axios');
const { json } = require('body-parser');

dotenv.config();
async function getResults(movieSearch){
    const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${movieSearch}`;
    try{
        const response = await axios.get(searchUrl);
        // const result = response.data.results[0].overview;
        if(response.status == 200){
            // const result = json.parse(response.data.results);
            const result = response.data;
            // console.log(response.data.results[0].gn);
            return result;
        }
        // console.log(response);
            // return result;
    } catch(error) {
        console.log(error);
    };
};

module.exports = {
    getResults
};