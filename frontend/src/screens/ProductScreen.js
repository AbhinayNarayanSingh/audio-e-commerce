import React, { useState, useEffect } from "react";

import { Link, useParams } from "react-router-dom";

// ? React-Redux
import { useDispatch, useSelector } from "react-redux";
import { listProductDetails } from "../actions/productActions";

function ProductScreen() {
  const { id } = useParams();

  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.productDetails);
  const { error, loading, product } = productDetails;

  useEffect(() => {
    dispatch(listProductDetails(id)); // *action creator
  }, [dispatch]);

  return (
    <div className="container">
      <div className="individual-product">
        <div className="product-title">
          <p>
            {product.countInStock > 0 ? `INR ${product.price}` : "Out of Stock"}
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

        <div className="add-to-cart">
          <Link to="/" className="action-button">
            Add To Cart
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductScreen;
