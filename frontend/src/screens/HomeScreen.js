import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// ? React-Redux
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productActions";

// ?_Component Import
import Hero from "../components/Hero";
import SearchForm from "../components/SearchForm";
import Message from "../components/Message";
import Loader from "../components/Loader";

function HomeScreen() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { error, loading, products } = productList;

  useEffect(() => {
    dispatch(listProducts()); // *action creator
  }, [dispatch]);

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
              <Link to="" className="badge_p">
                Headphone
              </Link>
              <Link to="" className="badge">
                Headphone
              </Link>
              <Link to="" className="badge">
                Earpads
              </Link>
              <Link to="" className="badge">
                Cable
              </Link>
            </div>

            <div className="banner">
              <div className="text">
                <h2>TMA-2 Modular Headphone</h2>
                <Link to="">Shop now</Link>
              </div>
              <div className="img">
                <img src="/img/product/product.png" alt="" />
              </div>
            </div>

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
                <Link to={`/product/${product._id}`}>
                  <div class="product-card" key={product._id}>
                    <div class="img">
                      <img src={product.image} />
                    </div>
                    <div class="text">
                      <h2>{product.name}</h2>
                      <p>INR {product.price}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </main>
      )}
    </div>
  );
}

export default HomeScreen;
