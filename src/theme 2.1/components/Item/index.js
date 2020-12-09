import React, { Component } from "react";
import Burger from "../../assets/images/food1.jpg";
import Overlay from "react-bootstrap/Overlay";
import Popover from "react-bootstrap/Popover";
import ReactGA from "react-ga";
import Modal from "react-bootstrap/Modal";
import QuantityButtons from "../QuantityButtons/index";

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showToolTip: false,
      target: null,
      showModal: false,
      canEnableAddToCart:
        this.props.priceList && this.props.priceList.length > 0 ? true : false,
      showModalText: "Add to Cart",
    };
  }

  handleChecked = (e, id) => {
    if (Number(e.target.value) > 0) {
      this.props.changequantity(
        -e.target.value,
        this.props.categoryID,
        this.props.menuID,
        id
      );
      e.target.checked = false;
    } else {
      this.props.changequantity(
        1,
        this.props.categoryID,
        this.props.menuID,
        id
      );
      e.target.checked = true;
    }
  };

  render() {
    return (
      <div
        id={"product_" + this.props.productId}
        className="col-md-4 "
        style={{ marginBlockEnd: "2rem", marginBlockStart: "1.5rem" }}
      >
        <Modal
          show={this.state.showModal}
          aria-labelledby="contained-modal-title-vcenter"
          centered
          backdrop="static"
          onHide={() => this.setState({ showModal: false })}
        >
          <Modal.Header closeButton>
            <div>
              <h4>Choose your custom order</h4>
              <h6>
                Rs. {this.props.priceList[0].price} - Rs.{" "}
                {this.props.priceList[this.props.priceList.length - 1].price}
              </h6>
            </div>
          </Modal.Header>
          <Modal.Body>
            {this.props.priceList.map((item, index) => {
              return (
                <div className="row" key={index}>
                  <div
                    className="col-6 d-flex flex-column"
                    style={{ borderRight: "1px solid lightgrey" }}
                  >
                    <label id={`${item.id}`}>
                      <input
                        type="radio"
                        value={item.quantity}
                        onChange={(e) => this.handleChecked(e, item.id)}
                      />
                      {item.quantity_values.quantity} {item.measure_values.name}{" "}
                      - Rs.{item.price}
                    </label>
                  </div>
                  <div className="col-6 d-flex justify-content-center">
                    {item.quantity > 0 && (
                      <QuantityButtons
                        increaseQuantity={() =>
                          this.props.changequantity(
                            1,
                            this.props.categoryID,
                            this.props.menuID,
                            item.id
                          )
                        }
                        decreaseQuantity={() =>
                          this.props.changequantity(
                            -1,
                            this.props.categoryID,
                            this.props.menuID,
                            item.id
                          )
                        }
                        quantity={item.quantity}
                      />
                    )}
                  </div>
                </div>
              );
            })}
            <div className="row">
              <button
                className="continue-btn ml-auto"
                onClick={() => this.setState({ showModal: false })}
              >
                Continue
              </button>
            </div>
          </Modal.Body>
        </Modal>

        {/* {!this.state.canEnableAddToCart && <p>Call/WhatsApp us to order Customized Cakes.</p>} */}
        <div className="single-product-items">
          <div className="product-item-image">
            {this.props.image ? (
              <>
                <a>
                  <img loading="lazy" src={this.props.image} alt="Product" />{" "}
                </a>
              </>
            ) : (
              <a>
                <img loading="lazy" src={Burger} alt="Product" />{" "}
              </a>
            )}

            {this.props.discount > 0 && (
              <div className="product-discount-tag">
                <p>{this.props.discount}% OFF</p>
              </div>
            )}
          </div>
          <div className="product-item-content mt-30">
            {/* eslint-disable-next-line */}
            <div className="d-flex" style={{ width: "100%" }}>
              <h5 className="product-title">
                <a>{this.props.itemName}</a>
              </h5>
              {this.props.description && (
                <label
                  onPointerEnter={(e) => {
                    this.setState({
                      target: e.target,
                      showToolTip: true,
                    });
                  }}
                  onPointerLeave={(e) => {
                    this.setState({
                      target: null,
                      showToolTip: false,
                    });
                  }}
                  className="info-icon ml-auto d-flex align-items-center"
                >
                  i
                </label>
              )}
              <Overlay
                show={this.state.showToolTip}
                placement="bottom-end"
                target={this.state.target}
              >
                <Popover id="popover-contained">
                  <Popover.Content>{this.props.description}</Popover.Content>
                </Popover>
              </Overlay>
            </div>

            <p className="description">{this.props.short_description}</p>
            {this.state.canEnableAddToCart ? (
              <>
                {this.props.discount > 0 ? (
                  <>
                    <span
                      style={{
                        color: "#c4c4c4",
                        textDecoration: "line-through",
                      }}
                    >
                      Rs.{this.props.priceList[0].price}
                    </span>
                    <span style={{ color: "#000000" }}>
                      Rs.
                      {this.props.priceList[0].price -
                        this.props.priceList[0].price *
                          (this.props.discount / 100)}
                    </span>
                    <input
                      type="hidden"
                      id={"original_price_" + this.props.productId}
                      value={this.props.priceList[0].price}
                    ></input>
                    <input
                      type="hidden"
                      id={"discounted_price_" + this.props.productId}
                      value={
                        this.props.priceList[0].price -
                        this.props.priceList[0].price *
                          (this.props.discount / 100)
                      }
                    ></input>
                  </>
                ) : (
                  <>
                    <span style={{ color: "#000000" }}>
                      Rs.{this.props.priceList[0].price}
                    </span>
                    <input
                      type="hidden"
                      id={"original_price_" + this.props.productId}
                      value={this.props.priceList[0].price}
                    ></input>
                  </>
                )}

                <div className="d-flex flex-column justify-content-end">
                  <div>
                    {this.props.priceList.length === 1 ? (
                      <QuantityButtons
                        increaseQuantity={() =>
                          this.props.changequantity(
                            1,
                            this.props.categoryID,
                            this.props.menuID,
                            this.props.priceList[0].id
                          )
                        }
                        decreaseQuantity={() =>
                          this.props.changequantity(
                            -1,
                            this.props.categoryID,
                            this.props.menuID,
                            this.props.priceList[0].id
                          )
                        }
                        quantity={this.props.priceList[0].quantity}
                      />
                    ) : (
                      <button
                        className="btn add-to-cart"
                        onClick={() => this.setState({ showModal: true })}
                      >
                        {this.state.showModalText}
                      </button>
                    )}
                  </div>
                </div>
              </>
            ) : (
              <>
                <a
                  href={`tel:+91${this.props.contact_number}`}
                  className="custom-menu-call-button"
                  target="blank"
                  onClick={() => {
                    ReactGA.event({
                      category: "menu-product-item",
                      action: "clicked call button",
                      label: this.props.itemName,
                      transport: "beacon",
                    });
                  }}
                >
                  <i class="lni-phone-handset"></i>
                </a>
              </>
            )}

            {/* <ul className="rating">
                  <li><i className="lni-star-filled"></i></li>
                  <li><i className="lni-star-filled"></i></li>
                  <li><i className="lni-star-filled"></i></li>
                  <li><i className="lni-star-filled"></i></li>
                  <li><i className="lni-star-filled"></i></li>
    
              </ul> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Item;
