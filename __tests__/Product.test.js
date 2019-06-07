import Product from "../src/models/Product";
import apiResponse from "./__mocks__/api-index-response";
import expectedProduct from "./__mocks__/mock-created-object";

describe("Product", () => {
  describe("fromApi()", () => {
    const createdProduct = new Product(apiResponse);

    it("takes an API response and returns a product", () => {
      expect(createdProduct).toEqual(expectedProduct);
    });
  });
});
