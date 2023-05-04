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

app.get('/chefs', (req, res) => {
    res.send(chefs)
})

app.get('/recipes', (req, res) => {
    res.send(recipes)
})

app.get('/chefDetails/:id', (req, res) => {
    const iD = req.params.id;
   const eachChefRecipes = recipes.find( recipe => recipe.id == iD);
   res.send(eachChefRecipes || {})
})

app.get('/questionAns', ( req, res) => {
    res.send(questionAns)
})

app.listen(port , () => {
    console.log(`The FoodChef India running on Port: ${port}` );
})

