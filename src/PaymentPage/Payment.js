import React from "react";
import BHIM from "./assets/images/bhim.svg";
import Gpay from "./assets/images/google-pay.svg";
import paytm from "./assets/images/paytm.svg";
import phonepe from "./assets/images/phonepe.svg";
import master from "./assets/images/025-mastercard.svg";
import visa from "./assets/images/visa.svg";
import rupay from "./assets/images/rupay.svg";
import jio from "./assets/images/jiomoney.svg";
import ola from "./assets/images/olamoney.svg";
import freeRe from "./assets/images/freecharge.svg";
import mobwik from "./assets/images/mobiwiki.svg";
import Orders from "./Orders";
import { paymentNames } from "../helpers/constant";
import ReactGA from "react-ga";

const paymentIcons = [
  BHIM,
  Gpay,
  paytm,
  phonepe,
  master,
  visa,
  rupay,
  jio,
  ola,
  freeRe,
  mobwik,
];
class Payment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      onlyCOD: false,
    };
  }
  componentDidMount() {
    if (
      localStorage.getItem("PaymentType") &&
      JSON.parse(localStorage.getItem("PaymentType")).length === 1
    ) {
      JSON.parse(localStorage.getItem("PaymentType"))[0].id ===
        Number(Object.keys(paymentNames)[0]) && //Object.keys(paymentNames)[0]: Cash on delivery
        this.setState({ onlyCOD: true });
    }
  }
  render() {
    return (
      <div className="payment-method text-center">
        {sessionStorage.getItem("items") &&
          JSON.parse(sessionStorage.getItem("items")).length > 4 && (
            <div className="d-flex justify-content-around mb-30">
              {localStorage.getItem("PaymentType") &&
                JSON.parse(localStorage.getItem("PaymentType")).map(
                  (paymentType) => {
                    return (
                      <button
                        className={
                          this.props.check ? "proceed" : "proceed disabled"
                        }
                        value={paymentType.payment_type.id}
                        onClick={() => {
                          this.props.check &&
                            this.props.goPayment(paymentType.payment_type.id);
                          ReactGA.event({
                            category: "signup page",
                            action: `Clicked ${
                              paymentNames[paymentType.payment_type.id]
                            } in top list of items`,
                            label: `Chose for ${paymentType.payment_type.name}`,
                          });
                        }}
                      >
                        {this.state.onlyCOD
                          ? "Order Now"
                          : paymentNames[paymentType.payment_type.id]}
                      </button>
                    );
                  }
                )}
              {sessionStorage.getItem("totalWithTax") && (
                <button
                  className="proceed"
                  style={{
                    color: "#000466",
                    backgroundColor: "white",
                    borderRadius: "8px",
                    cursor: "default",
                  }}
                >
                  Total: Rs.{" "}
                  {Number(sessionStorage.getItem("totalWithTax")).toFixed(2)}
                </button>
              )}
            </div>
          )}
        <div className="row">
          {sessionStorage.getItem("deliveryDate") && (
            <div className="col-lg-3 order-details">
              {sessionStorage.getItem("deliveryDate") && (
                <>
                  <h6>Delivery Date</h6>
                  <label>{sessionStorage.getItem("deliveryDate")}</label>
                </>
              )}
              {sessionStorage.getItem("deliveryTime") && (
                <>
                  <h6>Delivery Time</h6>
                  <label>{sessionStorage.getItem("deliveryTime")}</label>
                </>
              )}
            </div>
          )}
          <div
            className={
              sessionStorage.getItem("deliveryDate") &&
              sessionStorage.getItem("deliveryDate")
                ? "col-lg-9 orders"
                : "col-lg-12 orders"
            }
          >
            <h6 className="row d-flex justify-content-center">
              Items in the cart
            </h6>
            <ul>
              {sessionStorage.getItem("items") &&
                JSON.parse(sessionStorage.getItem("items")).map(
                  (item, index) => {
                    return (
                      <Orders
                        key={index}
                        quantity={item.selectedMenuQuantity.quantity}
                        itemName={item.menu.name}
                        price={
                          item.menu.discount > 0
                            ? item.selectedMenuQuantity.price -
                              item.selectedMenuQuantity.price *
                                (item.menu.discount / 100)
                            : item.selectedMenuQuantity.price
                        }
                        menuQuantity={item.selectedMenuQuantity}
                      />
                    );
                  }
                )}
            </ul>
          </div>
        </div>
        <div className="d-flex justify-content-around mt-40">
          {localStorage.getItem("PaymentType") &&
            JSON.parse(localStorage.getItem("PaymentType")).map(
              (paymentType) => {
                return (
                  <button
                    className={
                      this.props.check ? "proceed" : "proceed disabled"
                    }
                    value={paymentType.payment_type.id}
                    onClick={() => {
                      this.props.check &&
                        this.props.goPayment(paymentType.payment_type.id);
                      ReactGA.event({
                        category: "signup page",
                        action: `Clicked ${
                          paymentNames[paymentType.payment_type.id]
                        } in below list of items`,
                        label: `Chose for ${paymentType.payment_type.name}`,
                      });
                    }}
                  >
                    {this.state.onlyCOD
                      ? "Order Now"
                      : paymentNames[paymentType.payment_type.id]}
                  </button>
                );
              }
            )}
          {sessionStorage.getItem("totalWithTax") && (
            <button
              className="proceed"
              style={{
                color: "#000466",
                backgroundColor: "white",
                borderRadius: "8px",
                cursor: "default",
              }}
            >
              Total: Rs.{" "}
              {Number(sessionStorage.getItem("totalWithTax")).toFixed(2)}
            </button>
          )}
        </div>
        {this.state.onlyCOD === false && (
          <div className="d-flex flex-wrap justify-content-around mt-40">
            {paymentIcons.map((icon) => {
              return <img src={icon} alt="payment-icon" />;
            })}
          </div>
        )}
        <div className="row d-flex flex-wrap justify-content-center mb-40">
          {this.props.errorMessage ? (
            <small className="row message ml-1" style={{ color: "#e22a28" }}>
              {this.props.errorMessage}
            </small>
          ) : (
            <small className="row message ml-1" style={{ color: "green" }}>
              {this.props.successMessage}
            </small>
          )}
        </div>
      </div>
    );
  }
}

export default Payment;
