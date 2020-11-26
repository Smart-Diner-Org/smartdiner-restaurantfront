import React, { Component } from "react";

class NewCustomer extends Component {
  render() {
    return (
      <div className="new-customer ">
        <form onSubmit={this.props.addCustomer}>
          <input
            autoFocus
            className="mt-10"
            type="text"
            required
            name="name"
            placeholder="Enter your Name"
            onChange={this.props.handleChange}
          />
          <input
            className=" mt-10"
            type="email"
            required
            name="email"
            placeholder="Enter your mailID"
            onChange={this.props.handleChange}
          />
          <input
            className=" mt-10"
            type="text"
            required
            name="addressOne"
            placeholder="Address Line 1"
            onChange={this.props.handleChange}
          />
          {localStorage.getItem("LocationplaceID") === "1" && (
            <label style={{ fontSize: "18px" }} className="mt-10">
              {this.props.addressTwo}
            </label>
          )}
          {localStorage.getItem("LocationplaceID") === "2" && (
            <select
              className="mt-10"
              required
              onChange={this.props.selectAddress}
            >
              <option value="" disabled selected hidden>
                Select Address Line 2
              </option>
              {localStorage
                .getItem("DeliveryLocations")
                .split(",")
                .map((location, index) => {
                  return (
                    <option key={index} value={location}>
                      {location}
                    </option>
                  );
                })}
            </select>
          )}

          {this.props.errorMessage && (
            <small className="error-message" style={{ color: "#e22a28" }}>
              {this.props.errorMessage}
            </small>
          )}

          <div className="mt-30">
            {/* <a href="#" style={{marginRight:"35%"}}>Get Location</a> */}
            <button type="submit" className="new-address">
              Add address
            </button>
          </div>
        </form>
        <div className="mt-30">
          <label>*Give Location access for delivery</label>
        </div>
      </div>
    );
  }
}

export default NewCustomer;
