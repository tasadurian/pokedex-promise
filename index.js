var request = require('request');

var pokeUrl = 'http://pokeapi.co';

var getData = function(url) {
  return request({
      url: url,
      json: true
    },
    function(error, response, body) {
      if (!error && response.statusCode == 200) {
        return body;
      }
    });
};

module.exports = {

  /**
   * Get data from pokeapi.
   *
   * @return {JSON}
   */
  getPokemon: function() {
    var data = getData('http://pokeapi.co/api/v1/pokedex/1/');
    return data;
  },

  /**
   * Get specific data from pokeapi.
   * @param {Int} ID number of the pokemon you want.
   * @return {JSON}
   */
  getPokemonDataById: function(numberId) {
    var url = pokeUrl + '/api/v1/pokemon/' + numberId + '/';
    var data = getData(url);
    return data;
  },

};
