import React, { Component } from "react";
import "flatpickr/dist/themes/airbnb.css";
import Flatpickr from "react-flatpickr";
import ReactGA from "react-ga";

class Delivery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pre_order: false,
      deliveryDateTime: null,
    };
    this.canRoute = this.canRoute.bind(this);
  }

  canRoute() {
    const dateTime = new Date(this.state.deliveryDateTime);
    let month = "" + (dateTime.getMonth() + 1);
    let day = "" + dateTime.getDate();
    let year = dateTime.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    let hours = dateTime.getHours();
    let minutes = dateTime.getMinutes();

    if (hours < 10) {
      hours = "0" + hours;
    }
    if (minutes < 10) {
      minutes = "0" + minutes;
    }

    const date = `${year}-${month}-${day}`;
    const time = `${hours}:${minutes}`;
    sessionStorage.setItem("deliveryDate", date);
    if (this.props.restaurant_website_detail.is_pre_booking_time_required) {
      const timeDifference = dateTime.getTime() - new Date().getTime();
      const timeLimit =
        this.props.restaurant_website_detail.pre_book_prior_time *
        60 *
        60 *
        1000;
      if (timeDifference <= timeLimit) {
        alert(
          `We take orders placed in advance of ${this.props.restaurant_website_detail.pre_book_prior_time} hours from now.`
        );
        document.getElementById("datepicker").value = null;
        this.setState({ deliveryDateTime: null });
        return false;
      }
      sessionStorage.setItem("deliveryTime", time);
    }

    if (
      Boolean(
        this.props.restaurant_website_detail.is_pre_booking_enabled &&
          this.state.deliveryDateTime
      )
    ) {
      ReactGA.event({
        category: "Cart",
        action: "Order Later",
        label: "/signup",
        transport: "beacon",
      });
      window.location = "/signup";
    } else {
      alert("Tell us when you want to enjoy your food...");
    }
  }

  render() {
    console.log(this.props.restaurant_website_detail);
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
                className="mb-20"
                onClick={() => {
                  sessionStorage.removeItem("deliveryDate");
                  sessionStorage.removeItem("deliveryTime");
                  ReactGA.event({
                    category: "Cart",
                    action: "Order now",
                    label: "/signup",
                    transport: "beacon",
                  });
                  window.location = "/signup";
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

              <>
                <p className="mt-20 text-justify" style={{maxWidth:"350px"}}>
                  {this.props.restaurant_website_detail.is_delivery_available
                    ? `Select your delivery date and time.\n Please book your order(s) ${this.props.restaurant_website_detail.pre_book_prior_time} hours in advance.`
                    : `Let us know when your order needs to be ready and the time of pick up.`}
                </p>
                <div className="delivery-type-inputs mt-10">
                  <Flatpickr
                    id="datepicker"
                    options={
                      this.props.restaurant_website_detail
                        .is_pre_booking_time_required
                        ? { enableTime: true, minDate: "today" }
                        : { minDate: "today" }
                    }
                    placeholder={
                      this.props.restaurant_website_detail
                        .is_pre_booking_time_required
                        ? "YYYY-MM-DD HH:MM"
                        : "YYYY-MM-DD"
                    }
                    onChange={(deliveryDateTime) => {
                      this.setState({ deliveryDateTime });
                    }}
                  />
                </div>
                <button onClick={this.canRoute} className="mt-20">
                  Schedule order
                </button>
              </>
            </>
          )}
        </div>
        <hr />
      </div>
    );
  }
}
export default Delivery;
