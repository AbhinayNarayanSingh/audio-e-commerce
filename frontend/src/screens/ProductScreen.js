import React, { useState, useEffect } from "react";

import { Link, useParams, useNavigate } from "react-router-dom";

// ? React-Redux
import { useDispatch, useSelector } from "react-redux";
import { listProductDetails } from "../actions/productActions";

// ? component import
import Message from "../components/Message";
import Loader from "../components/Loader";

import { inr } from "./INR";

function ProductScreen() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.productDetails);
  const { error, loading, product } = productDetails;

  useEffect(() => {
    dispatch(listProductDetails(id)); // *action creator
  }, [dispatch]);

  // *V6 useNavigate hook

  const navigate = useNavigate();
  const addToCardHandler = () => {
    if (product.countInStock > 0) {
      const qty = 1;
      navigate(`/cart/${id}/qty=${qty}`);
    } else {
      console.log(
        `>>> out of stock, count of ${product.name}: ${product.countInStock}`
      );
    }
  };

  // const inr = (number) => {
  //   return new Intl.NumberFormat("en-IN", {
  //     maximumSignificantDigits: 3,
  //   }).format(number);
  // };

  return (
    <div className="container">
      {loading ? (
        <Loader />
      ) : error ? (
        <Message cls="error" msg={error}></Message>
      ) : (
        <div className="individual-product">
          <div className="product-title">
            <p>
              {product.countInStock > 0
                ? `INR ${inr(product.price)}.00`
                : "Out of Stock"}
            </p>
            <h2>{product.name}</h2>
          </div>
          <div className="product-detail-section">
            <Link to="">Overview</Link>
            <Link to="">Features</Link>
            <Link to="">Specification</Link>
          </div>
          <div className="product-image">
            <img alt={product.name} src={product.image} />
          </div>
          <div className="product-description">
            <h2>Description</h2>
            <p>{product.description}</p>
          </div>

          {/* <!-- Review this product, Share your thoughts with other customers, Write a product review --> */}

          <div className="add-to-cart" onClick={addToCardHandler}>
            <div className="action-button">
              <button>
                {product.countInStock > 0 ? `Add To Cart` : "Out of Stock"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductScreen;
