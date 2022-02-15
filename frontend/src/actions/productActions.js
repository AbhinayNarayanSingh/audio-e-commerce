import axios from "axios";
import * as constants from "../constants/productConstants";

export const listProducts = () => async (dispatch) => {
  try {
    dispatch({ type: constants.PRODUCT_LIST_REQUEST });
    const { data } = await axios.get("/api/products/");

    dispatch({ type: constants.PRODUCT_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: constants.PRODUCT_LIST_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const productListCategory = (category) => async (dispatch) => {
  try {
    dispatch({
      type: constants.PRODUCT_CATEGORY_LIST_REQUEST,
    });

    const { data } = await axios.get(
      `/api/products/category/${Number(category)}`
    );

    dispatch({
      type: constants.PRODUCT_CATEGORY_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: constants.PRODUCT_CATEGORY_LIST_SUCCESS,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const listProductDetails = (id) => async (dispatch) => {
  // thunk action creator
  try {
    dispatch({ type: constants.PRODUCT_DETAILS_REQUEST });
    const { data } = await axios.get(`/api/products/${id}`);

    dispatch({ type: constants.PRODUCT_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: constants.PRODUCT_DETAILS_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};
