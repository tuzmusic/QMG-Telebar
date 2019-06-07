// @flow
import type Product from "../../models/Product";
import type { ProductAction } from "../actions/ActionTypes";
import { Actions } from "../actions/ActionTypes";

type ProductState = {
  +products: Product[]
};

const initialState = {
  products: [],
  isLoading: false
};

export default function productsReducer(
  state: ProductState = initialState,
  action: ProductAction
): ProductState {
  switch (action.type) {
    case Actions.Product.Fetch.success:
      return { ...state, isLoading: false, products: action.products };
    default:
      (action: empty);
      return state;
  }
}
