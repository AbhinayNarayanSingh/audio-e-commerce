import * as constants from "../constants/orderConstants";

export const orderCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case constants.ORDER_CREATE_REQUEST:
      return {
        loading: true,
      };
    case constants.ORDER_CREATE_SUCCESS:
      return {
        loading: false,
        success: true,
        order: action.payload,
      };
    case constants.ORDER_CREATE_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case constants.ORDER_CREATE_RESET:
      return {};
    default:
      return state;
  }
};

// orders: []

export const orderViewReducer = (state = {}, action) => {
  switch (action.type) {
    case constants.ORDER_DETAILS_REQUEST:
      return { loading: true, orders: [] };
    case constants.ORDER_DETAILS_SUCCESS:
      return { loading: false, orders: action.payload };
    case constants.ORDER_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
