import React, { Component } from "react";
import BagItemList from "./BagItemList";

class Bag extends Component {
  render() {
    return (
      // <Modal backdrop="static">
      <div className="bag-component">
        <header className="bag-header">
          <div className="row">
            <div className="col-auto mr-auto pl-0">
              <button className="bag-close" onClick={this.props.closePopup}>
                X
              </button>
            </div>
            <div className="col-auto">
              <a href="#" className="mt-10" onClick={this.props.editlocation}>
                {sessionStorage.getItem("address") &&
                  sessionStorage.getItem("address").split(",")[0]}
              </a>
            </div>
          </div>
        </header>

        {this.props.total > 0 ? (
          <BagItemList
            items={this.props.items}
            changequantity={this.props.changequantity}
            restaurant_website_detail={this.props.restaurant_website_detail}
            boundary={this.props.boundary}
            disc2={this.props.disc1}
            delivery_slots={this.props.delivery_slots}
            is_ecommerce={this.props.is_ecommerce}
          />
        ) : (
            <p className="mt-20 mb-20">
              Your cart is empty.
            <br /> Please enjoy food by adding from our menus
          </p>
          )}

        <footer>
          <div className="foot-content">
            Powered by{" "}
            <a href="https://smartdiner.co/" target="blank">
              Smart Diner
            </a>
          </div>
        </footer>
      </div>
    );
  }
}

export default Bag;

