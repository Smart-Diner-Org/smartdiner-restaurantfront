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
    this.checkboxes = [];
    this.state = {
      showToolTip: false,
      target: null,
      showModal: false,
      canEnableAddToCart:
        this.props.priceList && this.props.priceList.length > 0 ? true : false,
      modalTotal: 0,
    };
  }

  handleChecked = (e, id, discount) => {
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
    this.calculateModalTotal(discount);
  };

  calculateModalTotal = (discount) => {
    const total = this.props.priceList.reduce(function (
      accumulator,
      currentValue
    ) {
      const valueToBeAdded = currentValue.quantity
        ? discount > 0
          ? (currentValue.price - currentValue.price * (discount / 100)) *
            currentValue.quantity
          : currentValue.price * currentValue.quantity
        : 0;
      const newTotal = accumulator + valueToBeAdded;
      return newTotal;
    },
    0);
    this.setState({ modalTotal: total });
  };

  openPriceListModal = () => {
    if (this.state.modalTotal <= 0) {
      this.props.changequantity(
        1,
        this.props.categoryID,
        this.props.menuID,
        this.props.priceList[0].id
      );
    }
    this.setState({ showModal: true });
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
          onHide={() => this.setState({ showModal: false })}
        >
          <Modal.Header closeButton>
            <h4>Choose your custom order</h4>
          </Modal.Header>
          <Modal.Body>
            {this.props.priceList.map((item, index) => {
              return (
                <div className="row" key={index}>
                  <div className="col-auto d-flex flex-column">
                    <label id={`${item.id}`}>
                      <input
                        type="radio"
                        ref={(a) => (this.checkboxes[index] = a)}
                        value={item.quantity}
                        checked={item.quantity > 0 && true}
                        onClick={(e) =>
                          this.handleChecked(e, item.id, this.props.discount)
                        }
                      />
                      {item.quantity_values.quantity} {item.measure_values.name}{" "}
                      -{" "}
                      {this.props.discount > 0 ? (
                        <>
                          <span
                            style={{
                              textDecoration: "line-through",
                              opacity: "0.4",
                              marginRight: "5px",
                            }}
                          >
                            Rs.{item.price}
                          </span>
                          <span>
                            Rs.
                            {item.price -
                              item.price * (this.props.discount / 100)}
                          </span>
                        </>
                      ) : (
                        <span>Rs.{item.price}</span>
                      )}
                    </label>
                  </div>
                  <div className="col-4">
                    {item.quantity > 0 && (
                      <QuantityButtons
                        increaseQuantity={() => {
                          this.props.changequantity(
                            1,
                            this.props.categoryID,
                            this.props.menuID,
                            item.id
                          );
                          this.calculateModalTotal(this.props.discount);
                        }}
                        decreaseQuantity={() => {
                          if (item.quantity === 1) {
                            this.checkboxes[index].checked = false;
                          }
                          this.props.changequantity(
                            -1,
                            this.props.categoryID,
                            this.props.menuID,
                            item.id
                          );
                          this.calculateModalTotal(this.props.discount);
                        }}
                        quantity={item.quantity}
                      />
                    )}
                  </div>
                </div>
              );
            })}
            <div className="row">
              {this.state.modalTotal > 0 && (
                <h5
                  style={{ color: "#000466" }}
                  className="col d-flex align-self-center"
                >
                  Total : Rs. {this.state.modalTotal}
                </h5>
              )}
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
                        onClick={() => this.openPriceListModal()}
                      >
                        {this.state.modalTotal > 0 ? "Edit" : "Add to Cart"}
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
