import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";

import { saveShippingAddress } from "../actions/cartActions";

function SaveAddressScreen() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");

  const { shippingAddress } = useSelector((state) => state.cart);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    if (streetAddress) {
      dispatch(
        saveShippingAddress({
          name,
          phone,
          streetAddress,
          city,
          postalCode,
          state,
          country,
        })
      );
    }

    navigate("/checkout/");
  };

  return (
    <div className="container">
      <section className="addresses">
        <div className="checkout-heading">
          <p>Saved Shipping Address</p>
        </div>
        {shippingAddress.country ? (
          <div class="saved-add">
            <h2>{shippingAddress.name}</h2>
            <p>
              {shippingAddress.streetAddress}, {shippingAddress.city},{" "}
              {shippingAddress.state}, {shippingAddress.country}-
              {shippingAddress.postalCode}
            </p>
            <p class="mob">
              <span>Mob:</span> +91 {shippingAddress.phone}
            </p>
          </div>
        ) : (
          ""
        )}
        <form>
          <div className="checkout-heading">
            <p>New Shipping Address</p>
          </div>

          <section>
            <form className="form">
              <div>
                <p>Name</p>
                <input
                  required="true"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <p>Phone</p>
                <input
                  required="true"
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div>
                <p>Street Address</p>
                <input
                  required="true"
                  type="text"
                  value={streetAddress}
                  onChange={(e) => setStreetAddress(e.target.value)}
                />
              </div>
              <div>
                <p>City</p>
                <input
                  required="true"
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>
              <div>
                <p>Zip/Postal Code</p>
                <input
                  required="true"
                  type="text"
                  value={postalCode}
                  onChange={(e) => setPostalCode(e.target.value)}
                />
              </div>
              <div>
                <p>State/Province</p>
                <input
                  required="true"
                  type="text"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                />
              </div>
              <div>
                <p>Country</p>
                <input
                  required="true"
                  type="text"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                />
              </div>
            </form>
          </section>
          <div className="submit" onClick={submitHandler}>
            <input required="true" type="submit" value="Save & Continue" />
          </div>
        </form>
      </section>
    </div>
  );
}

export default SaveAddressScreen;
