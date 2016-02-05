var Pokedex = require("../index.js");
var chai = require('chai'),
  expect = chai.expect;

chai.use(require("chai-as-promised"));
chai.use(require("chai-things"));


describe("pokedex", function() {
  var promise,
    id = 5,
    P = new Pokedex();

  describe(".getPokemonList()", function() {
    before(function() {
      promise = P.getPokemonList();
    });

    it("should succeed", function() {
      return promise;
    });
    it("should have property pokemon", function() {
      return expect(promise).to.eventually.have.property("pokemon");
    });
  });
});
