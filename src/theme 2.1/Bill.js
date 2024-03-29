import React, { Component } from "react";
import calculateTotalPrice from "../helpers/CommonFunctions";
// import displayTotalPrice from "../helpers/CalculateDiscountOnMrp";

let flag = 0
class Bill extends Component {
  render() {
    const [total, CGST, SGST, totalWithTax, totAftDis, discountAmt, deliveryCharge] = calculateTotalPrice(
      this.props.items,
      this.props.taxPercentage,
      // Number(this.props.default_delivery_charge),
      this.props.delivery_charges,
      this.props.disc3
    
    );
    
    return (

      <div class="bill-container">
        <hr />
        <div className="container">
        {(this.props.disc3 !== null && discountAmt!==0) &&  (
           <div className="row">
            <label className="col-auto mr-auto">Total MRP</label>
            <br />
            <label className="col-auto text"><strike>{`Rs ${total.toFixed(2)}`}</strike></label>
            <br />
          </div>
          )}
          {(this.props.disc3 === null || discountAmt===0) && (
            <div className="row">
              <label className="col-auto mr-auto">Total</label>
              <br />
              <label className="col-auto">{`Rs ${total.toFixed(2)}`}</label>
              <br />
            </div>
            
          )}
          {(totAftDis !== 0 && this.props.disc3 !== null && total != totAftDis) && (
          <div className="row">
                <label className="col-auto mr-auto">Total After Discount</label>
                <br />
                <label className="col-auto">{`Rs ${totAftDis.toFixed(2)}`}</label>
                <br />
              </div>
              )}
         
          {this.props.delivery_charges !== null && (
            <div className="row">
              <label className="col-auto mr-auto">Delivery Charge</label>
              <br />
              <label className="col-auto">{`Rs ${deliveryCharge.toFixed(2)}`}</label>
              <br />
            </div>
          )}

          
          {Number(this.props.taxPercentage) > 0 && (
            <>
              <div className="row">
                <label className="col-auto mr-auto">
                  CGST
                  <small>({Number(this.props.taxPercentage) / 2}%)</small>
                </label>
                <br />
                <label className="col-auto">{`Rs ${CGST.toFixed(2)}`}</label>
                <br />
              </div>
              <div className="row">
                <label className="col-auto mr-auto">
                  SGST
                  <small>({Number(this.props.taxPercentage) / 2}%)</small>
                </label>
                <br />
                <label className="col-auto">{`Rs ${SGST.toFixed(2)}`}</label>
                <br />
              </div>
            </>
          )}

          <div className="final-bill row">
            <div class="col-6">
              {/* <label >Coupon Code</label> */}
              {/* <input type="textbox" placeholder="Coupon Code"/>
                                    <button >Find</button> */}
            </div>

            <div class="col-6 total-amount">
              <label>
                To Pay :<span>{`Rs ${totalWithTax}`}</span>
              </label>

            </div>
            {total < Number(this.props.min_purchase_amount) && (
              <small
                className="col-12 text-right"
                style={{ color: "#e22a28" }}
              >{`Minimum purchase of Rs ${this.props.min_purchase_amount} is required`}</small>
            )}
          </div>
        </div>
      </div>
    );
  }
}
export default Bill;

