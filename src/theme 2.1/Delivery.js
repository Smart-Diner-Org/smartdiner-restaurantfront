import React, { Component } from "react";
import ReactGA from "react-ga";
import { generateDeliveryTimeSlot } from "./generateTimeSlot";
import { withRouter } from "react-router-dom";
import Alert from "antd/lib/alert";
import DatePicker from "antd/lib/date-picker";

class Delivery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deliveryDateTime: null,
      selectedTimeSlot: null,
      availableSlot: [],
      noSlotsMessage: false,
    };
  }

  canRoute = () => {
    sessionStorage.setItem("deliveryTime", this.state.selectedTimeSlot);
    const dateTime = new Date(this.state.deliveryDateTime);
    let month = "" + (dateTime.getMonth() + 1);
    let day = "" + dateTime.getDate();
    let year = dateTime.getFullYear();
    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;
    const date = `${year}-${month}-${day}`;
    sessionStorage.setItem("deliveryDate", date);
    ReactGA.event({
      category: "Cart",
      action: "Clicked Proceed button",
      label: `by choosing date ${date} and slot ${this.state.selectedTimeSlot}`,
    });
    this.props.history.push("/signup");
  };

  datePickerChange = (deliveryDateTime) => {
    ReactGA.event({
      category: "Cart",
      action: "Clicked date picker in cart",
      label: "tried to change date",
    });
    let availableSlot = generateDeliveryTimeSlot(
      this.props.delivery_slots,
      deliveryDateTime,
      this.props.restaurant_website_detail.pre_book_prior_time
    );
    if (availableSlot.length < 1)
      this.setState({ noSlotsMessage: true, availableSlot: [] });
    else
      this.setState({
        deliveryDateTime,
        selectedTimeSlot: null,
        availableSlot: availableSlot,
        noSlotsMessage: false,
      });
  };

  disabledDate = (current) => {
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    return current.valueOf() < yesterday;
  };

  render() {
    return (
      <div>
        {this.props.restaurant_website_detail.is_run_time_booking_enabled && (
          <hr />
        )}
        <div className="delivery-type">
          <>
            {this.props.restaurant_website_detail
              .is_run_time_booking_enabled && (
              <button
                className={`schedule-order-button ${
                  Number(sessionStorage.getItem("totalWithTax")) <
                  Number(this.props.min_purchase_amount)
                    ? "disabled"
                    : ""
                }`}
                onClick={() => {
                  sessionStorage.removeItem("deliveryDate");
                  sessionStorage.removeItem("deliveryTime");
                  ReactGA.event({
                    category: "Cart",
                    action: "Order now",
                    label: "/signup",
                    transport: "beacon",
                  });
                  this.props.history.push("/signup");
                }}
              >
                {this.props.restaurant_website_detail.is_pre_booking_enabled
                  ? "Order Now"
                  : "Check Out"}
              </button>
            )}
          </>

          {this.props.restaurant_website_detail.is_pre_booking_enabled && (
            <>
              <hr />
              <p className="mt-20 text-justify" style={{ maxWidth: "350px" }}>
                {this.props.restaurant_website_detail.is_delivery_available
                  ? `Select your delivery date and time.`
                  : `Let us know when your order needs to be ready and the time of pick up.`}
              </p>
              <DatePicker
                size={"large"}
                getPopupContainer={(triggerNode) => {
                  return triggerNode.parentNode;
                }}
                showToday={false}
                onChange={(deliveryDateTime) => {
                  this.datePickerChange(deliveryDateTime);
                }}
                disabledDate={this.disabledDate}
                className={`mt-10 ${
                  Number(sessionStorage.getItem("totalWithTax")) <
                  Number(this.props.min_purchase_amount)
                    ? "disabled"
                    : ""
                }`}
                onFocus={() =>
                  ReactGA.event({
                    category: "Cart",
                    action: "Clicked date picker in cart",
                    label: "Focus event on date picker",
                  })
                }
              />
              {this.state.noSlotsMessage && (
                <Alert
                  className="mt-10"
                  message="No delivery slot available for the Selected Date"
                  type="error"
                  showIcon
                />
              )}

              {this.props.restaurant_website_detail
                .is_pre_booking_time_required && (
                <select
                  className={
                    this.state.availableSlot.length > 0
                      ? "menu-dropdown"
                      : "menu-dropdown disabled"
                  }
                  id="delivery_timeSlot_dropdown"
                  onChange={(e) => {
                    ReactGA.event({
                      category: "Cart",
                      action: "Clicked delivery time slots dropdown",
                      label: `selected slot ${e.target.value}`,
                    });
                    this.setState({ selectedTimeSlot: e.target.value });
                  }}
                >
                  <option value="" selected hidden>
                    Select Delivery Time Slot
                  </option>
                  {this.state.availableSlot.map((timeSlot, index) => {
                    return (
                      <option key={index} data-toggle="pill">
                        {timeSlot}
                      </option>
                    );
                  })}
                </select>
              )}
              <button
                onClick={this.canRoute}
                className={
                  this.state.deliveryDateTime && this.state.selectedTimeSlot
                    ? "mt-20 schedule-order-button"
                    : "schedule-order-button disabled mt-20"
                }
              >
                Schedule order
              </button>
            </>
          )}
        </div>
        <hr />
      </div>
    );
  }
}
export default withRouter(Delivery);
