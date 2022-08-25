const sinon = require("sinon");
const { expect } = require("chai");
const { describe } = require("mocha");
const productController = require("../../../controllers/productController");
const productService = require("../../../services/productService");

describe("Busca os produtos no BD", () => {
  describe("Quando não existe", () => {
    const res = {};
    const req = {};

    before(() => {
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon.stub(productService, "getAll").resolves({code: 404, message: "Product not found"});
    });
    after(() => {
      productService.getAll.restore();
    });
    it("Retorna um array vazio", async () => {
      await productController.getAll(req, res);
      expect(res.json.calledWith("Product not found")).to.be.equal(true);
    });
  });

  describe("Quando existe produtos", () => {
    const res = {};
    const req = {};
    
    before(() => {
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon.stub(productService, "getAll").resolves([{ id: 1, name: "Martelo de Thor" }]);
    });
    after(() => {
      productService.getAll.restore();
    });
    it("Retorne o status 200", async () => {
      await productController.getAll(req, res);
      expect(res.status.calledWith(200)).to.be.equal(true);
      expect(res.json.calledWith([{ id: 1, name: "Martelo de Thor" }])).to.be.equal(true);
    });
  });
});

describe("Busca produtos por id no BD", () => {
  describe("Quando não existe", async () => {
    const res = {};
    const req = {};

    before(() => {
      req.params = { id: 1 };
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon.stub(productService, "getProductById")
        .resolves({ code: 404, message: "Product not found" });
    });
    after(() => {
      productService.getProductById.restore();
    });
    it("Retorne o status 404", async () => {
      await productController.getProductById(req, res);
      expect(res.status.calledWith(404)).to.be.equal(true);
      expect(res.json.calledWith({ message: "Product not found" })).to.be.equal(true);
    });
  });

  describe("Quando existe o produto", async () => {
    const res = {};
    const req = {};
    const product = { id: 1, name: "Martelo de Thor" };

    before(() => {
      req.params = { id: 1 };
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon.stub(productService, "getProductById").resolves(product);
    });
    after(() => {
      productService.getProductById.restore();
    });
    it("Retorne o status 200", async () => {
      await productController.getProductById(req, res);
      expect(res.status.calledWith(200)).to.be.equal(true);
      expect(res.json.calledWith(product)).to.be.equal(true);
    });
  });
}); 