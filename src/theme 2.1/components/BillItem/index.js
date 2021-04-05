import React, { Component } from "react";
import BurgerImage from "../../assets/images/food1.jpg";

class BillItem extends Component {
  render() {
    return (
      <div className="bag-item mb-10">
        <div className="container ">
          <div className="row d-flex align-items-center">
            <div className="col-2 p-0">
              <div
                style={{
                  height: "100px",
                  width: "100%",
                  maxWidth: "100px",

                  display: "flex",
                  alignItems: "centre",
                  borderRadius: "8px",
                }}
              >
                {this.props.image ? (
                  <>
                    <a href="#">
                      <img
                        loading="lazy"
                        src={this.props.image}
                        alt="Product"
                      />{" "}
                    </a>
                  </>
                ) : (
                  <a href="#">
                    <img loading="lazy" src={BurgerImage} alt="Product" />{" "}
                  </a>
                )}
              </div>
            </div>
            <div className="col-10">
              <div className="row">
                <label
                  className="col-auto mr-auto mb-0"
                  style={{ color: "#e22a28" }}
                >
                  <i className="lni lni-dinner"></i>
                </label>

                {!this.props.statuspage && (
                  <div className="col-auto pr-0">
                    <button
                      className="cancelbutton"
                      onClick={this.props.removeItem}
                    >
                      X
                    </button>
                  </div>
                )}
              </div>
              <div className="row mt-10 mb-10">
                <div className="col-5 des">
                  <h4 className="itemname">{this.props.itemName}</h4>

                  {this.props.description != null &&
                  this.props.description.length > 37 ? (
                    <h6 className="containment">
                      {this.props.description.slice(0, 37).concat("...")}
                    </h6>
                  ) : (
                    <h6 className="containment">{this.props.description}</h6>
                  )}
                  {/* <h6 className="containment">{this.props.description}</h6> */}
                </div>

                <div
                  className="col-3 price-display"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <h6 style={{ color: "#000466" }} className="containment">
                    {this.props.menuQuantity.quantity_values.quantity}
                    {this.props.menuQuantity?.measure_values.name}
                  </h6>

                  {this.props.discount > 0 ? (
                    <>
                      <label className="disc-price">
                        Rs.{this.props.price}
                      </label>
                      <label>Rs.{this.props.discountPrice}</label>
                    </>
                  ) : (
                    <label>Rs.{this.props.price}</label>
                  )}
                </div>

                {this.props.statuspage ? (
                  <div
                    className="quantity"
                    style={{ maxHeight: "50px", maxWidth: "50px" }}
                  >
                    <label>{this.props.quantity}</label>
                  </div>
                ) : (
                  <div className="col-4 pr-0">
                    <div className="quantity d-flex justify-content-around">
                      <button
                        name="sub"
                        className="d-flex justify-content-center align-items-center "
                        onClick={this.props.decreasequantity}
                      >
                        -
                      </button>
                      <label>{this.props.quantity}</label>
                      <button
                        name="add"
                        className="d-flex justify-content-center align-items-center"
                        onClick={this.props.increasequantity}
                      >
                        +
                      </button>
                    </div>
                  </div>
                )}
              </div>
              <div className="row"></div>
              <div className="row col-6">
                {this.props.discount > 0 ? (
                  <>
                    <h3 className="offer-applied">
                      {this.props.discount}% OFFER APPLIED
                    </h3>
                  </>
                ) : (
                  <div>
                    <br />
                  </div>
                )}
              </div>
              {/* <div className="row">
                            <div className='top-up'>
                                <button className="col-3" >Extra Cheese</button>
                                <button className="col-3" >Extra suger</button>
                                <button className="col-3" >Extra Patty</button>
                            </div>
                        </div> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BillItem;
