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

Want to get a list of pokemon?
```js
var pokemonList = pokedex.getPokemon().request.body.pokemon;
//returns an array of objects containing pokemon names and uri information.
```

Want to get information on a specific pokemon?
```js
var pokemon = getPokemonDataById(5).request.body;
//returns json data about a pokemon with the id of 5;
var name = pokemon.name;
//returns "Charmeleon";
var hp = pokemon.hp;
//returns 58;
var height = pokemon.height;
//returns "11";
var weight = pokemon.weight;
//returns "190";
```

## Want to contribute?

Submit a pull request!
