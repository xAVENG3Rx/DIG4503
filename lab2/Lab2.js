const axios = require("axios");

//Fetch URL
axios('https://pokeapi.co/api/v2/pokemon/trubbish')
    //then
    .then(function (response) {
        //Use 'data'
        const pokemon = response.data;
        //URL returns object with data of Pokemon Requested
        console.log("Look! it's a " + pokemon.name + "! ID# " + pokemon.id);
    })
    .catch(function (error) {
        //handles error
        console.log("OOF: " + error);
    });
