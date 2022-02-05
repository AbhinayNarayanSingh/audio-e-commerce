import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { inr } from "./INR";

function Checkout() {
  // const inr = (number) => {
  //   return new Intl.NumberFormat("en-IN", {
  //     maximumSignificantDigits: 20,
  //   }).format(number);
  // };

  const { paymentMethod, shippingAddress, cartItems } = useSelector(
    (state) => state.cart
  );
  const { userInfo } = useSelector((state) => state.userLogin);
  const navigate = useNavigate();

  useEffect(() => {
    if (!userInfo.email) {
      navigate("/sign/");
    }
  });

  const cartTotal = cartItems
    .reduce((acc, item) => acc + item.qty * item.price, 0)
    .toFixed(2)
    .toLocaleString("en-IN");

  return (
    <div className="container">
      <section className="addresses">
        <form action="">
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
              <p>INR {inr(((cartTotal / 112) * 12).toFixed(2))}</p>
            </div>
            <div>
              <h2>Order Total</h2>
              <h3>INR {inr(cartTotal)}.00</h3>
            </div>
          </div>

          <div className="submit">
            <input type="submit" value="Place your order" />
          </div>
        </form>
      </section>
    </div>
  );
}

export default Checkout;
