var rp = require('request-promise');

var Pokedex = (function() {
  function Pokedex() {}

  Pokedex.prototype.getJSON = function() {
    var options = {
      uri: 'http://pokeapi.co/api/v1/pokedex/1/',
      json: true
    };

    return rp(options)
      .then(function(response) {
        console.log('getting data');
        return response;
      })
      .catch(function(err) {
        console.log('GET failed');
      });
  };
})();



module.exports = Pokedex;
