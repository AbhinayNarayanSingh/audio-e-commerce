// imp import
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Routes, Route, Link } from "react-router-dom"; // https://reacttraining.com/blog/react-router-v6-pre/

// Screen
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import CheckoutScreen from "./screens/CheckoutScreen";
import SaveAddressScreen from "./screens/SaveAddressScreen";
import PaymentMethodScreen from "./screens/PaymentMethodScreen.js";
import MenuScreen from "./screens/MenuScreen";
import OrderScreen from "./screens/OrderScreen";
import ProductByCategory from "./screens/ProductByCategory";
import OrderConfirmation from "./screens/OrderConfirmation";

function App() {
  const inr = (number) => {
    return new Intl.NumberFormat("en-IN", {
      maximumSignificantDigits: 3,
    }).format(number);
  };

  return (
    <div className="mobile">
      <Header />
      <Routes>
        {/* All component children of <Routes> must be a <Route> or <React.Fragment> */}
        <Route path="/" element={<HomeScreen />} exact />
        <Route path="/menu/" element={<MenuScreen />} exact />

        <Route
          path="/product/category/:category"
          element={<ProductByCategory />}
        />
        <Route path="/product/:id/:slug" element={<ProductScreen />} />

        <Route path="/cart">
          <Route path="" element={<CartScreen />} />
          <Route path=":id/qty=:qty" element={<CartScreen />} />
        </Route>

        <Route path="/sign/" element={<LoginScreen />} />
        <Route path="/sign-up/" element={<RegisterScreen />} />

        <Route path="/shipping-address/" element={<SaveAddressScreen />} />
        <Route path="/payment-method/" element={<PaymentMethodScreen />} />
        <Route path="/checkout/" element={<CheckoutScreen />} />

        <Route path="/order/" element={<OrderScreen />} />
        <Route path="/order-confirmation/:id" element={<OrderConfirmation />} />
      </Routes>

      {/* <Footer /> */}
    </div>
  );
}

export default App;
