import React from "react";

function OrderScreen() {
  return (
    <div>
      <h2 className="h2-heading">Orders</h2>

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
            <div className="order-status">
              {/* <p>Delivered</p> */}
              <p>Dispatched</p>
            </div>
            {/* <p class="product_price">INR 2,39,900.00</p> */}
          </div>
        </div>
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
            <div className="order-status">
              <p>Delivered</p>
              {/* <p>Dispatched</p> */}
            </div>
            {/* <p class="product_price">INR 2,39,900.00</p> */}
          </div>
        </div>
      </div>

      {/* 
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
              <p class="product_price">INR {inr(item.price)}.00</p>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default OrderScreen;
