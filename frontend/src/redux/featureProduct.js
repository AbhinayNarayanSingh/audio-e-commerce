import axios from "axios";
// ! CONSTANTS

const FEATURE_PRODUCT_REQUEST = "FEATURE_PRODUCT_REQUEST";
const FEATURE_PRODUCT_SUCCESS = "FEATURE_PRODUCT_SUCCESS";
const FEATURE_PRODUCT_FAIL = "FEATURE_PRODUCT_FAIL";

// ! REDUCERS

export const featureProductReducer = (state = {}, action) => {
  switch (action.type) {
    case FEATURE_PRODUCT_REQUEST:
      return { loading: true, _featureProduct: {} };
    case FEATURE_PRODUCT_SUCCESS:
      return { loading: false, _featureProduct: action.payload };
    case FEATURE_PRODUCT_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

// ! ACTIONS

export const featureProduct = () => async (dispatch) => {
  try {
    dispatch({ type: FEATURE_PRODUCT_REQUEST });
    const { data } = await axios.get("/api/feature-product");
    dispatch({ type: FEATURE_PRODUCT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: FEATURE_PRODUCT_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};
