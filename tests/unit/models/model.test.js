const sinon = require("sinon");
const { expect } = require("chai");
const { describe } = require("mocha");
const connection = require("../../../models/connection");
const productModel = require("../../../models/productModel");

describe("Busca os produtos no BD", () => {
  describe("Quando não existe", () => {
    before(() => {
      const product = [[], []];
      sinon.stub(connection, "execute").resolves(product);
    });
    after(() => {
      connection.execute.restore();
    });
    it("Retorna um array vazio", async () => {
      const response = await productModel.getAll();
      expect(response).to.be.an("array");
      expect(response).to.be.empty;
    });
  });

  describe("Quando existe produtos", () => {
    before(() => {
      sinon.stub(connection, "execute").resolves([{ id: 1, name: "Martelo de Thor" }]);
    });
    after(() => {
      connection.execute.restore();
    });
    it("Retorna um array que não esta vazio", async () => {
      const response = await productModel.getAll();
      expect(response).to.be.an("array");
      expect(response).to.be.not.empty;
    });
    it("Retorna o produto corretamente", async () => {
      const response = await productModel.getAll();
      expect(response[0]).to.include.all.keys("id", "name");
    });
  });
});

describe("Busca produtos por id no BD", () => {
  describe("Quando não existe", async () => {
    before(() => {
      sinon.stub(productModel, "getProductById").resolves(true)
    });
    after(() => {
      productModel.getProductById.restore();
    });
    it("Retorna null", async () => {
      const response = await productModel.getProductById(1);
      expect(response).to.be.equal(null);
    });
  });

  describe("Quando existe o produto", async () => {
    const product = { id: 1, name: "Martelo de Thor" };

    before(() => {
      sinon.stub(productModel, "getProductById").resolves(product);
    });
    after(() => {
      productModel.getProductById.restore();
    });
    it("Retorna um objeto corretamente", async () => {
      const response = await productModel.getProductById(1);
      expect(response).to.be.an("object");
      expect(response).to.include.all.keys("id", "name");
    });
  });
}); 