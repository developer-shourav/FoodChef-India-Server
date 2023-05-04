const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const chefs = require('./data/chefs.json');
const questionAns = require('./data/questionAns.json');
const recipes = require('./data/recipes.json');

app.use(cors());

app.get('/', (req, res) => {
    res.send('Welcome to FoodChef India')
})


app.listen(port , () => {
    console.log(`The FoodChef India running on Port: ${port}` );
})
