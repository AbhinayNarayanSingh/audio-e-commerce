import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Hero from "../components/Hero";
import SearchForm from "../components/SearchForm";

// import products from "../product";

import axios from 'axios'


function HomeScreen() {
  const [products, setProducts] = useState([])

  
  useEffect(()=>{

    async function fetchProduct() {
      const {data} = await axios.get('/api/products/')
      setProducts(data)
    }
    fetchProduct()

  }, [])

  return (

    <div>
      <div className="container">
        <Hero />
        <SearchForm />
      </div>

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
              <div class="product-card" key={product._id}>
                <div class="img">
                  <img src={product.image} />
                </div>
                <div class="text">
                  <Link to={`/product/${product._id}`}>
                    <h2>{product.name}</h2>

                    <p>INR {product.price}</p>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default HomeScreen;
