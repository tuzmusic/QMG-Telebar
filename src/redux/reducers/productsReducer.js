// @flow
import type Product from "../../models/Product";
import type { ProductAction } from "../actions/ActionTypes";
import { Actions } from "../actions/ActionTypes";

type ProductState = {
  +products: Product[]
};

const initialState = {
  products: []
};

export default function productsReducer(
  state: ProductState = initialState,
  action: ProductAction
): ProductState {
  switch (action.type) {
    case Actions.Product.Fetch.success:
      return { ...state, products: action.products };
    default:
      (action: empty);
      return state;
  }
}
