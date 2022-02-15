import axios from "axios";

// ! CONSTANTS

const CATEGORY_LIST_REQUEST = "CATEGORY_LIST_REQUEST";
const CATEGORY_LIST_SUCCESS = "CATEGORY_LIST_SUCCESS";
const CATEGORY_LIST_FAIL = "CATEGORY_LIST_FAIL";

// ! REDUCERS

export const categoryReducer = (state = {}, action) => {
  switch (action.type) {
    case CATEGORY_LIST_REQUEST:
      return { loding: true, category: [] };
    case CATEGORY_LIST_SUCCESS:
      return { loding: false, category: action.payload };
    case CATEGORY_LIST_FAIL:
      return { loding: false, error: action.payload };
    default:
      return state;
  }
};

// ! ACTIONS

export const categoryList = () => async (dispatch) => {
  try {
    dispatch({ type: CATEGORY_LIST_REQUEST });
    const { data } = await axios.get("/api/category/");
    dispatch({ type: CATEGORY_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: CATEGORY_LIST_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};
