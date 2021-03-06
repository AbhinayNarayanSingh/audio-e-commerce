import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { inr } from "./INR";
import { createOrder } from "../actions/orderActions";

function Checkout() {
  const { paymentMethod, shippingAddress, cartItems } = useSelector(
    (state) => state.cart
  );

  const { order, error, success } = useSelector((state) => state.orderCreate);

  const { userInfo } = useSelector((state) => state.userLogin);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!userInfo.email) {
      navigate("/sign/");
    }
    if (success) {
      navigate(`/order-confirmation/${order._id}`);
    }
    if (error) {
      console.log(`>>>> ${error}`);
    }
  });

  const cartTotal = cartItems
    .reduce((acc, item) => acc + item.qty * item.price, 0)
    .toFixed(2)
    .toLocaleString("en-IN");

  const tax = ((cartTotal / 112) * 12).toFixed(2);
  const Shipping = 0;

  const placeOrder = () => {
    dispatch(
      createOrder({
        orderItems: cartItems,
        shippingAddress: shippingAddress,
        paymentMethod: paymentMethod,
        cartTotal: cartTotal,
        Shipping: Shipping,
        tax: tax,
      })
    );
  };

  return (
    <div className="container">
      <section className="addresses">
        <section>
          <div className="checkout-heading">
            <p>Shipping Address</p>
            <Link to="/shipping-address/">Add / Edit</Link>
          </div>
          {shippingAddress.country ? (
            <div class="saved-add">
              <h2>{shippingAddress.name}</h2>
              <p>
                {shippingAddress.streetAddress}, {shippingAddress.city},{" "}
                {shippingAddress.state}, {shippingAddress.country}-
                {shippingAddress.postalCode}
              </p>
              <p class="mob">
                <span>Mob:</span> +91 {shippingAddress.phone}
              </p>
            </div>
          ) : (
            ""
          )}

          <div className="checkout-heading billing-summary-heading">
            <p>Payment Method</p>
            <Link to="/payment-method/">Select / Change</Link>
          </div>

          <div className="payment-method">
            <label>
              <p>{paymentMethod}</p>
            </label>
          </div>

          <div className="checkout-heading billing-summary-heading">
            <p>Billing Summary</p>
          </div>

          <div className="billing-summary">
            <div>
              <h2>Subtotal</h2>
              <p>INR {inr(((cartTotal / 112) * 100).toFixed(2))}</p>
            </div>
            <div>
              <h2>Shipping</h2>
              <p>FREE</p>
            </div>
            <div>
              <h2>Tax</h2>
              <p>INR {inr(tax)}</p>
            </div>
            <div>
              <h2>Order Total</h2>
              <h3>INR {inr(cartTotal)}.00</h3>
            </div>
          </div>

          <div className="submit" onClick={placeOrder}>
            <button>Place your order</button>
            {/* <input type="submit" value="Place your order" /> */}
          </div>
        </section>

        {/* <p onClick={placeOrder}>Place your order</p> */}
      </section>
    </div>
  );
}

export default Checkout;
