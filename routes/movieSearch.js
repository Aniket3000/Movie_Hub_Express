const express = require('express');
const movieRouter = express.Router();

const dotenv = require('dotenv');
dotenv.config();

const moviedata = require('../services/moviedata');
// const { response } = require('express');


let imagepath = 'https://image.tmdb.org/t/p/w185/';

// let s = im;

// let movie_name = [];
// let movie_name = [];
movieRouter.post('/', async function(req,res,next) {
    try{
        // res.send('HELLO');
        // console.log(req.);
        let movie_name = [];
        let movie_url = [];
        let id = [];
        let response = await moviedata.getResults(req.body.movieName);
        for (let i = 0; i < response.results.length; i++) {
            const element = response.results[i];
            if(element.backdrop_path != null && element.poster_path != null && element.release_date != null){
                movie_name.push(element.title);
                movie_url.push(imagepath + element.poster_path);
                id.push(element.id);
            }
        }
        res.render('allresults.ejs',{
            results: movie_name,
            movieurl: movie_url,
            movieid: id
        });
    }catch(err){
        console.log(`Error `, err.message);
        next(err);
    }

});

module.exports = {
    movieRouter
};