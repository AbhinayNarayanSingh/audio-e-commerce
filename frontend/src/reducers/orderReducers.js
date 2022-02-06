import * as constants from "../constants/orderConstants";

export const orderCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case constants.ORDER_CREATE_REQUEST:
      return {
        loading: true,
      };
      break;
    case constants.ORDER_CREATE_SUCCESS:
      return {
        loading: false,
        success: true,
        order: action.payload,
      };
      break;
    case constants.ORDER_CREATE_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
      break;
    case constants.ORDER_CREATE_RESET:
      return {};
      break;
    default:
      return state;
      break;
  }
};
