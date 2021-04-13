import React, { Component } from "react";
import calculateTotalPrice from "../helpers/CommonFunctions";

class Bill extends Component {
  render() {
    const [total, CGST, SGST, totalWithTax] = calculateTotalPrice(
      this.props.items,
      this.props.taxPercentage,
      Number(this.props.default_delivery_charge)
    );
    return (
      <div class="bill-container">
        <hr />
        <div className="container">
          <div className="row">
            <label className="col-auto mr-auto">Total</label>
            <br />
            <label className="col-auto">{`Rs ${total.toFixed(2)}`}</label>
            <br />
          </div>
          {this.props.payTax && (
            <>
              <div className="row">
                <label className="col-auto mr-auto">CGST</label>
                <br />
                <label className="col-auto">{`Rs ${CGST.toFixed(2)}`}</label>
                <br />
              </div>
              <div className="row">
                <label className="col-auto mr-auto">SGST</label>
                <br />
                <label className="col-auto">{`Rs ${SGST.toFixed(2)}`}</label>
                <br />
              </div>
            </>
          )}
          {this.props.default_delivery_charge > 0 && (
            <div className="row">
              <label className="col-auto mr-auto">Delivery Charge</label>
              <br />
              <label className="col-auto">{`Rs ${Number(
                this.props.default_delivery_charge
              ).toFixed(2)}`}</label>
              <br />
            </div>
          )}
          <div className="final-bill row">
            <div class="col-6">
              {/* <label >Coupon Code</label> */}
              {/* <input type="textbox" placeholder="Coupon Code"/>
                                    <button >Find</button> */}
            </div>

            <div class="col-6 total-amount">
              <label>
                To Pay :<span>{`Rs${totalWithTax.toFixed(2)}`}</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Bill;
