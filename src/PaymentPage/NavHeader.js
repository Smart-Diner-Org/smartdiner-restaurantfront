import React from "react";
import ReactGA from "react-ga";

function NavHeader(props) {
  return (
    <div
      className={props.check ? "navheader end-active" : "navheader  mid-active"}
    >
      <label
        onClick={() => {
          ReactGA.event({
            category: "signup page",
            action: `Clicked Shopping Cart header link`,
            label: `Opens up cart in the home page `,
          });
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
