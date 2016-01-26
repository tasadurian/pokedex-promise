var rp = require('request-promise');

var Pokedex = (function() {
  function Pokedex() {}
  Pokedex.prototype.getJSON = function() {
    var options = {
      url: 'http://pokeapi.co/api/v1/pokedex/1/',
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
  return Pokedex;
})();

module.exports = Pokedex;



module.exports = Pokedex;
