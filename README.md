# pokedex-promise

> An easy way to use [pokeapi](http://pokeapi.co/) with promises in node.js
[![npm version](https://badge.fury.io/js/pokedex-promise.svg)](https://badge.fury.io/js/pokedex-promise)
## Install

You can install with npm!
```
npm install pokedex-promise
```

## Setup

Import to your project.
```js
var Pokedex = require('pokedex-promise');
```

## Usage

Initialize the constructor.
```js
var P = new Pokedex();
```

Use **getPokemonList** to return the names and resource_uri for all pokemon.
```js
router.get('/', function(req, res) {
  P.getPokemonList
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
  P.getPokemonById(5)
    .then(function(response) {
      res.json(response);
    })
    .catch(function(error) {
      console.log('There was an ERROR: ', error);
    });
});
```

Use **getTypeById** to return data about a specific type. A Type resource represents a single Pokémon type.
```js
router.get('/', function(req, res) {
  P.getTypeById(5)
    .then(function(response) {
      res.json(response);
    })
    .catch(function(error) {
      console.log('There was an ERROR: ', error);
    });
});
```

Use **getMoveById** to return data about a specific move. A Move resource represents a single move.
```js
router.get('/', function(req, res) {
  P.getMoveById(5)
    .then(function(response) {
      res.json(response);
    })
    .catch(function(error) {
      console.log('There was an ERROR: ', error);
    });
});
```

Use **getAbilityById** to return data about a specific ability. An Ability resource represents a single Pokémon ability.
```js
router.get('/', function(req, res) {
  P.getAbilityById(5)
    .then(function(response) {
      res.json(response);
    })
    .catch(function(error) {
      console.log('There was an ERROR: ', error);
    });
});
```

Use **getEggById** to return data about a specific egg group. An egg group resource represents a single Pokémon egg group.
```js
router.get('/', function(req, res) {
  P.getEggById(5)
    .then(function(response) {
      res.json(response);
    })
    .catch(function(error) {
      console.log('There was an ERROR: ', error);
    });
});
```

Use **getDescriptionById** to return data about a specific Pokémon description. A description resource represents a single Pokémon description.
```js
router.get('/', function(req, res) {
  P.getDescriptionById(5)
    .then(function(response) {
      res.json(response);
    })
    .catch(function(error) {
      console.log('There was an ERROR: ', error);
    });
});
```

Use **getSpriteById** to return data about a specific Pokémon sprite. A sprite resource represents a single Pokémon sprite.
```js
router.get('/', function(req, res) {
  P.getSpriteById(5)
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
