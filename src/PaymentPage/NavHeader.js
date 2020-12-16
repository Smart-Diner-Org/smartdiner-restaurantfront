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
            transport:"beacon",
          });
          sessionStorage.setItem("openCart", true);
          window.open("/", "_self");
        }}
      >
        1. Shopping Cart
      </label>
      <label>{">"}</label>
      <label
        onClick={() => {
          ReactGA.event({
            category: "signup page",
            action: `Clicked Customer Details header link`,
            label: `Shows customer detials part `,
          });
          props.showCustomerDetails();
        }}
      >
        2. Customer Details
      </label>
      <label>{">"}</label>
      <label
        onClick={() => {
          ReactGA.event({
            category: "signup page",
            action: `Clicked Checkout header link`,
            label: `Shows Payment part `,
          });
          props.showPayment();
        }}
      >
        3. Checkout
      </label>
    </div>
  );
}

export default NavHeader;
