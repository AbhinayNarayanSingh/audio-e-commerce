import React from "react";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

function FeatureProduct({ product }) {
  return (
    <section>
      {/* <p>{product.name}</p> */}
      <div className="banner">
        <div className="text">
          <h2>
            {/* {product[0]["name"] ? product[0]["name"] : ""} */}
            Apple iPad Air 4th Gen
          </h2>
          <Link to="">Shop now</Link>
        </div>
        <div className="img">
          <img
            src="/img/product/Apple-MYFQ2HN-A-Tablets-491901110-i-3-1200Wx1200H.jpg"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}

export default FeatureProduct;
