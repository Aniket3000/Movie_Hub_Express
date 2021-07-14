// start app
const express = require('express');
const cors = require('cors');
// when we have to access variables from .env file
const {movieRouter} = require('./routes/movieSearch');
const {movieinforouter} = require('./routes/movinforoute');
const dotenv = require('dotenv');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

dotenv.config();
// When we have to deal with json things or apis
app.use(express.json());
app.use(express.urlencoded({
    extended: true,
}));
app.use(cors());


app.set('view engine','ejs');
app.set('views', path.join(__dirname + '/views/layouts'));
// const path = require('path')
app.use(express.static(path.join(__dirname, '/public')))
// const moviedata = require('./')
app.get('/',(req,res) => {
    res.render('home.ejs');
});

app.use('/movieSearch',movieRouter);
app.use('/result',movieinforouter);

app.listen(process.env.PORT,() => {
    console.log(`App running at: http://localhost:${process.env.PORT}`);
})