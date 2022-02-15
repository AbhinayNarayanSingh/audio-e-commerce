import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// ? React-Redux
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productActions";
import { categoryList } from "../redux/category";
import { featureProduct } from "../redux/featureProduct";

// ?_Component Import
import Hero from "../components/Hero";
import SearchForm from "../components/SearchForm";
import FeatureProduct from "../components/FeatureProduct";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { inr } from "./INR";

function HomeScreen() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listProducts()); // *action creator
    dispatch(categoryList()); // *action creator
    dispatch(featureProduct()); // *action creator
  }, [dispatch]);

  const { error, loading, products } = useSelector(
    (state) => state.productList
  );
  const { category } = useSelector((state) => state.categories);
  // const { _featureProduct } = useSelector((state) => state.heroProduct);         // unable to access

  return (
    <div>
      <div className="container">
        <Hero />
        <SearchForm />
      </div>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message cls="error" msg={error}></Message>
      ) : (
        <main>
          <div className="container">
            <div className="category">
              {category
                ? category.map((set) => (
                    <Link
                      to={`/product/category/${set.pk}`}
                      className="badge_p"
                    >
                      {set.name}
                    </Link>
                  ))
                : ""}
            </div>

            <FeatureProduct />

            {/* <div className="banner">
              <div className="text">
                <h2>Apple iPad Air 4th Gen</h2>
                <Link to="">Shop now</Link>
              </div>
              <div className="img">
                <img
                  src="/img/product/Apple-MYFQ2HN-A-Tablets-491901110-i-3-1200Wx1200H.jpg"
                  alt=""
                />
              </div>
            </div> */}

            <div className="nav">
              <Link to="">
                <h2>Featured Products</h2>
              </Link>
              <Link to="">
                <p>See All</p>
              </Link>
            </div>

            <div class="product">
              {products.map((product) => (
                <div class="product-card" key={product._id}>
                  <Link to={`/product/${product._id}/${product.slug}`}>
                    <div class="img">
                      <img src={product.image} alt={product.name} />
                    </div>
                  </Link>
                  <div class="text">
                    <h2>{product.name}</h2>
                    <p>INR {inr(product.price)}.00</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      )}
    </div>
  );
}

export default HomeScreen;
