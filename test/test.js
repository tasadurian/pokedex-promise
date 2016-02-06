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

  describe(".getPokemonById(Id: int)", function() {
    before(function() {
      promise = P.getPokemonById(id);
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property name", function() {
      return expect(promise).to.eventually.have.property("name");
    });
  });

  describe(".getTypeById(Id: int)", function() {
    before(function() {
      promise = P.getTypeById(id);
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property name", function() {
      return expect(promise).to.eventually.have.property("name");
    });
  });

  describe(".getMoveById(Id: int)", function() {
    before(function() {
      promise = P.getMoveById(id);
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property name", function() {
      return expect(promise).to.eventually.have.property("name");
    });
  });

  describe(".getAbilityById(Id: int)", function() {
    before(function() {
      promise = P.getAbilityById(id);
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property name", function() {
      return expect(promise).to.eventually.have.property("name");
    });
  });

  describe(".getEggById(Id: int)", function() {
    before(function() {
      promise = P.getEggById(id);
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property name", function() {
      return expect(promise).to.eventually.have.property("name");
    });
  });
});
