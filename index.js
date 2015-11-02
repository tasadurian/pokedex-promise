var request = require('request');

modual.exports = {
  pokeUrl: 'http://pokeapi.co',

  /**
   * Get data from pokeapi.
   *
   * @param  {String} url
   * @return {String} JSON data
   */
  getData: function(url) {
    request(url,
      function(error, response, body) {
        if (!error && response.statusCode == 200) {
          return body;
        }
      });
  },

  /**
   * Get data from pokeapi.
   *
   * @return {Array} List of pokemon.
   */
  getPokemon: function() {
    var data = getData(pokeUrl + '/api/v1/pokedex/1/');
    return data.pokemon;
  },

  /**
   * Get specific data from pokeapi.
   * @param {Int} ID number of the pokemon you want.
   * @param {String} Which peice of info you want.
   * abilities, attack, catch_rate, defense, exp, height,
   * hp, moves, name, speed, weight.
   * @return {String} or {Array}
   */
  getPokemonDataById: function(numberId, param) {
    var url = pokeUrl + '/api/v1/pokemon/' + numberId + '/';
    var data = getData(url);

    if (param === "abilities") {
      return data.abilities;
    }
  },

};
