import * as constants from "../constants/productConstants";

// Reducer
export const productListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case constants.PRODUCT_LIST_REQUEST:
      return { loading: true, products: [] };
    case constants.PRODUCT_LIST_SUCCESS:
      return { loading: false, products: action.payload };
    case constants.PRODUCT_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const productListCategoryReducer = (
  state = { products: [] },
  action
) => {
  switch (action.type) {
    case constants.PRODUCT_CATEGORY_LIST_REQUEST:
      return { loading: true, products: [] };
    case constants.PRODUCT_CATEGORY_LIST_SUCCESS:
      return { loading: false, products: action.payload };
    case constants.PRODUCT_CATEGORY_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const productDetailsReducer = (state = { product: [] }, action) => {
  switch (action.type) {
    case constants.PRODUCT_DETAILS_REQUEST:
      return { loading: true, product: [] };
      break;
    case constants.PRODUCT_DETAILS_SUCCESS:
      return { loading: false, product: action.payload };
      break;
    case constants.PRODUCT_DETAILS_FAIL:
      return { loading: false, error: action.payload };
      break;

    default:
      return state;
      break;
  }
};
