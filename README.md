# pokedex
<img width="728" src="http://i.imgur.com/SHuavFt.png?1" alt="Demo">

> An easy way to use [pokeapi](http://pokeapi.co/) in node.js

## Install

You can install with npm!
```
npm install **todo not published yet**
```

## Setup

Import to your project.
```js
var pokedex = require('pokedex');
```

## Usage

Initialize the constructor.
```js
var Pokedex = new Pokedex();
```

Use the getPokemonList function to return data about all Pokemon.
```js
router.get('/', function(req, res) {
  Pokedex.getPokemonById(5)
    .then(function(response) {
      res.json(response);
    })
    .catch(function(error) {
      console.log('There was an ERROR: ', error);
    });
});
```

## Want to contribute?

Submit a pull request!
