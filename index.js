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

};
