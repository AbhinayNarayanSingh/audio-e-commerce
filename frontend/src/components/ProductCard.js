// rafc react arrow functional component
// rfce react functional component export

import React from "react";
import { Link } from "react-router-dom";

function ProductCard({ name, image, id, slug }) {
  return (
    <div>
      <div class="product-card">
        <Link to={`/product/${id}/${slug}`}>
          <div class="img">
            <img src={image} />
          </div>
        </Link>
        <h2>{name}</h2>
        <p>USD 350</p>
        <div class="review">
          <img src="/img/assets/review-star.svg" />
          <h3>
            <span>4.6</span> 86 Reviews
          </h3>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
