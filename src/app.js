express = require('express');
const app = express();
const port = 8081;
const knex = require('knex')(require('../knexfile.js')['development'])

app.get('/', (req, res) => {
    res.send(`App running on port ${port}`);
})

app.listen(port, () => {
    console.log(`Your KNEX and Express are running.`)
})

app.get('/pets', (req, res) => {
    knex('pet')
    .select('*')
    .then(pets => {
        var petNames = pets.map(pet => pet.name);
        res.json(petNames);
    })
})