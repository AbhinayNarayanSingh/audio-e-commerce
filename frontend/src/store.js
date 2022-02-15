import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

// * Reducer Import
import {
  productListReducer,
  productDetailsReducer,
  productListCategoryReducer,
  // productDeleteReducer,
  // productCreateReducer,
  // productUpdateReducer,
  // productReviewCreateReducer,
  // productTopRatedReducer,
} from "./reducers/productReducers";

import { cartReducer } from "./reducers/cartReducers";
import { userLoginReducer, userRegisterReducer } from "./reducers/userReducers";
import { orderCreateReducer, orderViewReducer } from "./reducers/orderReducers";
import { categoryReducer } from "./redux/category";
import { featureProductReducer } from "./redux/featureProduct";

const reducer = combineReducers({
  productList: productListReducer,
  productsByCategory: productListCategoryReducer,

  productDetails: productDetailsReducer,
  categories: categoryReducer,

  heroProduct: featureProductReducer,

  cart: cartReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  orderCreate: orderCreateReducer,
  orderDetail: orderViewReducer,
});

// Reading data from localStorage  syntax: localStorage.getItem(key);

const cartItemFromLocalStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const userInfoFromLocalStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : "";

const shippingAddressFromLocalStorage = localStorage.getItem("shippingAddress")
  ? JSON.parse(localStorage.getItem("shippingAddress"))
  : {};

const paymentMethodFromLocalStorage = localStorage.getItem("paymentMethod")
  ? JSON.parse(localStorage.getItem("paymentMethod"))
  : "";

const initialState = {
  cart: {
    cartItems: cartItemFromLocalStorage,
    shippingAddress: shippingAddressFromLocalStorage,
    paymentMethod: paymentMethodFromLocalStorage,
  },
  userLogin: { userInfo: userInfoFromLocalStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
