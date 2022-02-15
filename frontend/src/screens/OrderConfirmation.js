import React, { useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { inr } from "./INR";

import { viewOrder } from "../actions/orderActions";

function OrderConfirmation() {
  const { id } = useParams();

  const dispatch = useDispatch();

  const { orders, loading, error } = useSelector((state) => state.orderDetail);

  useEffect(() => {
    dispatch(viewOrder(id));
  }, [dispatch]);

  //

  // viewOrder
  const shippingAddress = {
    name: "Abhinay Narayan Singh",
    phone: "8795675599",
    streetAddress:
      "12, 2nd Cross Rd, Opposite Gubbi Veeranna Rangamandira, Gandhi Nagar",
    city: "Bengaluru",
    postalCode: "560009",
    state: "Karnataka ",
    country: "India",
  };
  return (
    <section class="container">
      {orders.map((i) => (
        <p>{i}</p>
      ))}

      <section className="cart-product-list">
        <section className="addresses">
          <div className="checkout-heading">
            <p>Ordered on 4 February 2022</p>
          </div>

          <div class="saved-add">
            <div className="sub-heading">
              <p>Shipping Address :</p>
            </div>

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

          <div className="sub-heading">
            <p>Payment Method : Cash On Delivery</p>
          </div>

          <div className="sub-heading">
            <p>Order Details :</p>
          </div>

          <div class="product_list_item order-list" key="4">
            <div class="product_img">
              <img
                src="/img/product/Apple-MBPMK183HNA-MacBook-Pro-492573380-i-1-1200Wx1200H.jpg"
                alt="Apple MacBook Pro 16 inch"
              />
            </div>
            <div class="text">
              <div>
                <h2 class="product_title">Apple MacBook Pro 16 inch</h2>
                <p class="product_price">Qty: 2 | Price: INR 2,39,900.00</p>
              </div>
            </div>
          </div>
          <div className="billing-summary">
            <div>
              <h2>Subtotal</h2>
              <p>INR {inr(10000)}</p>
            </div>
            <div>
              <h2>Shipping</h2>
              <p>FREE</p>
            </div>
            <div>
              <h2>Tax</h2>
              <p>INR {inr(1000)}</p>
            </div>
            <div>
              <h2>Order Total</h2>
              <h3>INR {inr(11000)}.00</h3>
            </div>
          </div>
        </section>
      </section>
    </section>
  );
}

export default OrderConfirmation;
