// @flow
import type Product from "../../models/Product";

type ActionNamesObject = {
  [key: string]: { [key: string]: { [key: string]: string } }
};

export const Actions: ActionNamesObject = {
  Product: {
    Fetch: {
      start: "PRODUCT_FETCH_START",
      success: "PRODUCT_FETCH_SUCCESS"
    }
  }
};

export type ProductAction =
  | { type: "PRODUCT_FETCH_START" }
  | {
      type: "PRODUCT_FETCH_SUCCESS",
      products: Product[]
    };
