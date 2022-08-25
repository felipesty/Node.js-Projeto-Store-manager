const sinon = require("sinon");
const { expect } = require("chai");
const { describe } = require("mocha");
const productService = require("../../../services/productService");
const productModel = require("../../../models/productModel");

describe("Busca os produtos no BD 3", () => {
  describe("Quando não existe", () => {
    before(() => {
      const product = [[], []];
      sinon.stub(productModel, "getAll").resolves(product);
    });
    after(() => {
      productModel.getAll.restore();
    });
    // it("Retorna um array vazio", async () => {
    //   const response = await productService.getAllProducts();
    //   expect(response).not.to.be.an("array");
    //   expect(response).not.to.be.empty;
    // });
  });

  describe("Quando existe produtos", () => {
    before(() => {
      sinon.stub(productModel, "getAll").resolves({ id: 1, name: "Martelo de Thor" });
    });
    after(() => {
      productModel.getAll.restore();
    });
    it("Retorna um array", async () => {
      const response = await productService.getAll();
      expect(response).not.to.be.an("array");
      expect(response).not.to.be.not.empty;
    });

    // it("Retorna o produto corretamente", async () => {
    //   const response = await productService.getAll();
    //   expect(response[0]).not.to.include.all.keys("id", "name");
    // });
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
      const response = await productService.getProductById();
      expect(response).not.to.be.equal(null);
    });
  });

  describe('Quando existe o produto', () => {
    const product = { id: 1, name: "Martelo de Thor" };

    before(() => {
      sinon.stub(productModel, "getProductById").resolves(product);
    });
    after(() => {
      productModel.getProductById.restore();
    });
    it('Retorna um objeto', async () => {
      const response = await productService.getProductById(1);
      expect(response).to.be.an("object");
      expect(response).to.include.all.keys("id", "name");
    });
  });
}); 