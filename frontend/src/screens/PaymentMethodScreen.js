import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";

import { savePaymentMethod } from "../actions/cartActions";

function PaymentMethodScreen() {
  const { paymentMethod } = useSelector((state) => state.cart);

  const [paymentMethods, setPaymentMethod] = useState("Cash on Delivery");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(paymentMethods);
    dispatch(savePaymentMethod(paymentMethods));

    navigate("/checkout/");
  };

  return (
    <div class="container">
      <section class="addresses">
        <div class="checkout-heading">
          <p>Current Payment Method</p>
        </div>
        <div className="payment-method">
          <label>
            <p>{paymentMethod}</p>
          </label>
        </div>

        <form>
          <div class="checkout-heading">
            <p>Payment Method</p>
          </div>

          <div className="payment-method">
            <input
              type="radio"
              name="payment-method"
              id="1"
              value="Cash on Delivery (COD)"
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            <label for="1">
              <p>Cash on Delivery</p>
            </label>
          </div>

          <div className="payment-method">
            <input
              type="radio"
              name="payment-method"
              id="2"
              value="Credit/Debit Card"
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            <label for="2">
              <p> Credit/Debit Card </p>
            </label>
          </div>

          <div className="payment-method">
            <input
              type="radio"
              name="payment-method"
              id="3"
              value="Net Banking"
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            <label for="3">
              <p>Net Banking</p>
            </label>
          </div>

          <div className="payment-method">
            <input
              type="radio"
              name="payment-method"
              id="4"
              value="Unified Payment Interface (UPI)"
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            <label for="4">
              <p>Unified Payment Interface (UPI)</p>
            </label>
          </div>

          <div className="submit" onClick={submitHandler}>
            <input type="submit" value="Save & Continue" />
          </div>
        </form>
      </section>
    </div>
  );
}

export default PaymentMethodScreen;
