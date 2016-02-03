var rp = require('request-promise');

var pokeUrl = 'http://pokeapi.co';

getJSON = function(url) {
  var options = {
    url: url,
    json: true,
  };
  return rp.get(options)
    .catch(function(error) {
      return error;
    })
    .then(function(response) {
      return response;
    });
};

var Pokedex = (function() {
  function Pokedex() {}

  Pokedex.prototype.getPokemonList = function() {
    return getJSON(pokeUrl + '/api/v1/pokedex/1/');
  };

  Pokedex.prototype.getPokemonById = function(id) {
    return getJSON(pokeUrl + '/api/v1/pokemon/' + id + '/');
  };

  Pokedex.prototype.getTypeById = function(id) {
    return getJSON(pokeUrl + '/api/v1/type/' + id + '/');
  };

  Pokedex.prototype.getMoveById = function(id) {
    return getJSON(pokeUrl + '/api/v1/move/' + id + '/');
  };

  Pokedex.prototype.getAbilityById = function(id) {
    return getJSON(pokeUrl + '/api/v1/ability/' + id + '/');
  };

  Pokedex.prototype.getEggById = function(id) {
    return getJSON(pokeUrl + '/api/v1/egg/' + id + '/');
  };

  Pokedex.prototype.getDescriptionById = function(id) {
    return getJSON(pokeUrl + '/api/v1/description/' + id + '/');
  };

  Pokedex.prototype.getSpriteById = function(id) {
    return getJSON(pokeUrl + '/api/v1/sprite/' + id + '/');
  };

  return Pokedex;
})();

module.exports = Pokedex;
