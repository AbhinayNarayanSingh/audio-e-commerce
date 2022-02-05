import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_SAVE_SHIPPING_ADDRESS,
  CART_SAVE_PAYMENT_METHOD,
  CART_CLEAR_ITEMS,
} from "../constants/cartConstants";

import axios from "axios";

export const addToCart = (id, qty) => async (dispatch, getState) => {
  try {
    const { data } = await axios.get(`/api/products/${id}`);

    dispatch({
      type: CART_ADD_ITEM,
      payload: {
        product: data._id,
        name: data.name,
        image: data.image,
        price: data.price,
        countInStock: data.countInStock,
        qty,
      },
    });

    // localStorage.setItem(key, value);

    localStorage.setItem(
      "cartItems",
      JSON.stringify(getState().cart.cartItems)
    );
  } catch (error) {
    dispatch({
      type: "CART_ADD_ITEM_FAIL",
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const removeFromCart = (id) => (dispatch, getState) => {
  try {
    dispatch({
      type: CART_REMOVE_ITEM,
      payload: id,
    });

    localStorage.setItem(
      "cartItems",
      JSON.stringify(getState().cart.cartItems)
    );
  } catch (error) {
    dispatch({
      type: "CART_REMOVE_ITEM_FAIL",
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const saveShippingAddress = (data) => (dispatch) => {
  try {
    dispatch({ type: CART_SAVE_SHIPPING_ADDRESS, payload: data });

    localStorage.setItem("shippingAddress", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: "CART_SAVE_SHIPPING_ADDRESS_FAIL",
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const savePaymentMethod = (data) => (dispatch) => {
  try {
    dispatch({
      type: CART_SAVE_PAYMENT_METHOD,
      payload: data,
    });

    localStorage.setItem("paymentMethod", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: "CART_SAVE_PAYMENT_METHOD_FAIL",
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};
