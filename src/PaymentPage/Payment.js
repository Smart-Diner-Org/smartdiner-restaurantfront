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
const paymentNames =  {"1" : "Pay Cash","2":"Pay Online"}
class Payment extends React.Component {
  render() {
    return (
      <div className="payment-method">
        <div className="row">
          {sessionStorage.getItem("deliveryDate") && (
            <div className="col-lg-4 order-details">
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
              sessionStorage.getItem("deliveryDate")
                ? "col-lg-8 orders"
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
                    for (let key in item) {
                      return (
                        <Orders
                          key={index}
                          quantity={item[key].quantity}
                          itemName={item[key].name}
                          discountPrice={
                            item[key].discountPrice
                              ? item[key].discountPrice
                              : item[key].originalPrice
                          }
                          menuQuantity={item[
                            key
                          ].menu_quantity_measure_price_list.filter((menu) => {
                            return (
                              menu.id ==
                              item[key].selectedMenuQuantityMeasurePriceId
                            );
                          })}
                        />
                      );
                    }
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
                    onClick={() =>
                      this.props.check &&
                      this.props.goPayment(paymentType.payment_type.id)
                    }
                  >
                    {paymentNames[paymentType.payment_type.id]}
                  </button>
                );
              }
            )}
          {sessionStorage.getItem("totalWithoutTax") && (
            <button
              className="proceed"
              style={{
                color: "#000466",
                backgroundColor: "white",
                borderRadius: "8px",
                cursor: "default",
              }}
            >
              Total: Rs{sessionStorage.getItem("totalWithoutTax")}
            </button>
          )}
        </div>
        <div className="d-flex flex-wrap justify-content-around mt-40">
          {paymentIcons.map((icon) => {
            return <img src={icon} alt="payment-icon" />;
          })}
        </div>
        <div className="container mt-20 ">
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
