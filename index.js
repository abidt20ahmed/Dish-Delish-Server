const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const chefs = require('./data/chefs.json');
const recipes = require('./data/recipes.json');

app.use(cors());

app.get('/', (req, res)=>{
    res.send('Chefs Server running')
})

app.get('/chefs', (req, res) =>{
    res.send(chefs)
})

app.get('/chefs/:id', (req, res) =>{
    const id = req.params.id;
    console.log(id)
    const selectedChefs = chefs.find(chef => chef.id === id);
    console.log(selectedChefs);
    res.send(selectedChefs)
})

app.get('/recipes', (req, res) =>{
    res.send(recipes)
})

app.get('/recipes/:id', (req, res) =>{
    const id = req.params.id;
    console.log(id)
    const selectedRecipes = recipes.find(recipe => recipe.id === id);
    console.log(selectedRecipes);
    res.send(selectedRecipes)
})

app.listen(port, ()=>{
    console.log(`Chefs API is running on port:${port}`);
})
