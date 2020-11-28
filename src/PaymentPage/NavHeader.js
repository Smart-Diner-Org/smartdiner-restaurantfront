import React from "react";

function NavHeader(props) {
  return (
    <div
      className={props.check ? "navheader end-active" : "navheader  mid-active"}
    >
      <label
        onClick={() => {
          sessionStorage.setItem("openCart", true);
          window.open("/", "_self");
        }}
      >
        1. Shopping Cart
      </label>
      <label>{">"}</label>
      <label onClick={props.showCustomerDetails}>2. Customer Details</label>
      <label>{">"}</label>
      <label onClick={props.showPayment}>3. Checkout</label>
    </div>
  );
}

export default NavHeader;
