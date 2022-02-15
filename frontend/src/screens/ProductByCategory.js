import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

// ? React-Redux
import { useDispatch, useSelector } from "react-redux";

import ProductCard from "../components/ProductCard";
import SearchForm from "../components/SearchForm";

import { productListCategory } from "../actions/productActions";
import { inr } from "./INR";

function ProductByCategory() {
  const { category } = useParams();

  const dispatch = useDispatch();

  const { error, loading, products } = useSelector(
    (state) => state.productsByCategory
  );
  // const productList = useSelector((state) => state.productsByCategory);
  // const { error, loading, products } = productList;

  useEffect(() => {
    dispatch(productListCategory(category)); // *action creator
  }, [dispatch]);

  return (
    <div>
      <div class="container">
        <SearchForm />
      </div>
      <main>
        <div class="container">
          <div class="product_card">
            {products.map((i) => (
              <ProductCard
                name={i["name"]}
                image={i["image"]}
                id={i["_id"]}
                slug={i["slug"]}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default ProductByCategory;
