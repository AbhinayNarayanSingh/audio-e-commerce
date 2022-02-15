import axios from "axios";
import * as constants from "../constants/orderConstants";
import { CART_CLEAR_ITEMS } from "../constants/cartConstants";

export const createOrder = (order) => async (dispatch, getState) => {
  try {
    dispatch({
      type: constants.ORDER_CREATE_REQUEST,
    });

    const { userInfo } = getState().userLogin;

    const config = {
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${userInfo.access}`,
      },
    };

    // await axios.post(url: string, data?: any, config?: AxiosRequestConfig<any>)
    const { data } = await axios.post("/order-create/", order, config);

    dispatch({
      type: constants.ORDER_CREATE_SUCCESS,
      payload: data,
    });

    dispatch({
      type: constants.ORDER_CREATE_RESET,
    });

    dispatch({
      type: CART_CLEAR_ITEMS,
      payload: data,
    });
    localStorage.removeItem("cartItems");
  } catch (error) {
    dispatch({
      type: constants.ORDER_CREATE_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const viewOrder = (orderId) => async (dispatch, getState) => {
  try {
    dispatch({
      type: constants.ORDER_DETAILS_REQUEST,
    });

    const { userInfo } = getState().userLogin;

    const config = {
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${userInfo.access}`,
      },
    };

    const { data } = await axios.post("/order-view/", config);

    dispatch({
      type: constants.ORDER_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: constants.ORDER_DETAILS_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};
