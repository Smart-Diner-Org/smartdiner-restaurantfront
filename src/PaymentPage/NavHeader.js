import React from "react";

function NavHeader(props) {
  return (
    <div
      className={props.check ? "navheader end-active" : "navheader  mid-active"}
    >
      <label>1. Shopping Cart</label>
      <label>{">"}</label>
      <label>2. Customer Details</label>
      <label>{">"}</label>
      <label>3. Checkout</label>
    </div>
  );
}

export default NavHeader;
