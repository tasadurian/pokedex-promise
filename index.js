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
    for (var key in data.pokemon) {
      return data.pokemon[key];
    }
  },

};
