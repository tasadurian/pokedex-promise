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

Use **getPokemonList** to return the names and resource_uri for all pokemon.
```js
router.get('/', function(req, res) {
  Pokedex.getPokemonList
    .then(function(response) {
      res.json(response);
    })
    .catch(function(error) {
      console.log('There was an ERROR: ', error);
    });
});
```

Use **getPokemonById** to return data on a specific pokemon.
Note: the ID for Pokémon is special. Use the National pokédex number as the ID to return the desired resource.
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

Use **getTypeById** to return data about a specific type. A Type resource represent a single Pokémon type.
```js
router.get('/', function(req, res) {
  Pokedex.getTypeById(5)
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
