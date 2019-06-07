import productsReducer from "../src/redux/reducers/productsReducer";
import apiResponse from "../__mocks__/api-index-response";
import Product from "../src/models/Product";
import { Actions } from "../src/redux/actions/ActionTypes";

describe("Products reducer", () => {
  const products = apiResponse.map(p => new Product(p));

  it("populates the products from a PRODUCT_FETCH_SUCCESS action", () => {
    expect(
      productsReducer({}, { type: Actions.Product.Fetch.success, products })
    ).toEqual({ products });
  });
});
