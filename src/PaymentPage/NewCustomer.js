import { Select } from "antd";
import React, { Component } from "react";
import axios from "axios";

const { Option } = Select;

class NewCustomer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      statesList: [],
    };
  }

  componentDidMount() {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/after_login/get_states`, {
        headers: {
          "x-access-token": `${sessionStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        this.setState({ statesList: res.data.states });
      })
      .catch((error) => {
        alert(error);
        console.log(error);
      });
  }

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
            placeholder={
              localStorage.getItem("LocationplaceID") === "2" &&
              sessionStorage.getItem("is_ecommerce") === "true"
                ? "House number, Street"
                : "Address Line 1"
            }
            onChange={this.props.handleChange}
          />
          {localStorage.getItem("LocationplaceID") === "2" &&
            sessionStorage.getItem("is_ecommerce") === "true" && (
              <input
                className=" mt-10"
                type="text"
                required
                name="addressTwo"
                placeholder="Locality/Area, Pincode"
                onChange={this.props.handleChange}
              />
            )}

          {localStorage.getItem("LocationplaceID") === "2" &&
            sessionStorage.getItem("is_ecommerce") === "true" && (
              <input
                className=" mt-10"
                type="text"
                required
                name="cityValueInText"
                placeholder="City name"
                onChange={this.props.handleChange}
              />
            )}

          {localStorage.getItem("LocationplaceID") === "1" &&
            sessionStorage.getItem("is_ecommerce") === "false" && (
              <label style={{ fontSize: "18px" }} className="mt-10">
                {this.props.addressTwo}
              </label>
            )}
          {localStorage.getItem("LocationplaceID") === "2" &&
            sessionStorage.getItem("is_ecommerce") === "false" && (
              <Select
                className="mt-10 col-12 p-0"
                required
                onChange={this.props.selectAddress}
                placeholder="Select Area/Locality"
              >
                {localStorage
                  .getItem("DeliveryLocations")
                  .split(",")
                  .map((location, index) => {
                    return (
                      <Option key={index} value={location}>
                        {location}
                      </Option>
                    );
                  })}
              </Select>
            )}
          {console.log(Boolean(sessionStorage.getItem("is_ecommerce")))}
          {localStorage.getItem("LocationplaceID") === "2" &&
            sessionStorage.getItem("is_ecommerce") === "true" && (
              <Select
                required
                placeholder="Select State"
                className="mt-10 col-12 p-0"
                onChange={this.props.setStateID}
              >
                {this.state.statesList.map((state) => (
                  <Option value={state.id}>{state.name}</Option>
                ))}
              </Select>
            )}
          {this.props.errorMessage && (
            <small className="error-message" style={{ color: "#e22a28" }}>
              {this.props.errorMessage}
            </small>
          )}

          <div className="mt-30">
            {/* <a href="#" style={{marginRight:"35%"}}>Get Location</a> */}
            <button type="submit" className="new-address">
              Add delivery address
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
