import React, { useEffect } from "react";

import { Link, useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../actions/cartActions";

import Loader from "../components/Loader";
import Message from "../components/Message";

function CartScreen() {
  const { id, qty } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (id) {
      dispatch(addToCart(id, qty));
    }
  }, [dispatch, id, qty]);

  useEffect(() => {
    dispatch(removeFromCart(id));
  }, [dispatch, id]);

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const navigate = useNavigate();
  const addToCardHandler = () => {
    navigate(`/cart/${id}/qty=${qty}`);
  };

  return (
    <section class="container">
      {cartItems.length === 0 ? (
        <h2 className="h2-heading">Cart is Empty</h2>
      ) : (
        <section className="cart-product-list">
          <h2 className="h2-heading">Shopping Cart</h2>
          {cartItems.map((item) => (
            <div key={item.product}>
              <div class="product_list_item">
                <div
                  class="product_img"
                  onClick={() => navigate(`/product/${item.product}`)}
                >
                  <img src={item.image} alt={item.name} />
                </div>
                <div class="text">
                  <div>
                    <h2 class="product_title">{item.name}</h2>
                    <p class="product_price">INR {item.price}</p>
                  </div>
                  <div className="cart-user-action">
                    <div className="cart-quantity">
                      <i
                        onClick={() => {
                          navigate(
                            `/cart/${item.product}/qty=${Number(item.qty) + 1}`
                          );
                        }}
                        class="fas fa-plus-circle"
                      ></i>
                      <p>{item.qty}</p>
                      <i
                        onClick={() => {
                          navigate(
                            `/cart/${item.product}/qty=${Number(item.qty) - 1}`
                          );
                        }}
                        class="fas fa-minus-circle"
                      ></i>
                    </div>
                    <i
                      onClick={() => {
                        dispatch(removeFromCart(item.product));
                      }}
                      class="fas fa-trash-alt"
                    ></i>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>
      )}

      {cartItems.length !== 0 ? (
        <div class="action-buttom-container">
          <div class="sub-total">
            <p>Total {cartItems.length} Items</p>
            <p>
              <span>INR </span>

              {cartItems
                .reduce((acc, item) => acc + item.qty * item.price, 0)
                .toFixed(2)
                .toLocaleString("en-IN")}
            </p>
          </div>
          <div class="checkout">
            <a href="">Proceed to Checkout</a>
          </div>
        </div>
      ) : (
        <h2 className="h2-heading"></h2>
      )}
    </section>
  );
}

export default CartScreen;
