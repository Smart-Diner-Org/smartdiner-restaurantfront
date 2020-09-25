import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import "flatpickr/dist/themes/material_green.css";
import Flatpickr from "react-flatpickr";


class Delivery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pre_order: false,
      deliveryDate: null,
      deliveryTime: null,
      confirm: false,
    };
    this.canRoute = this.canRoute.bind(this);
  }


  canRoute(){
    alert(Boolean(this.props.restaurant_website_detail.is_pre_booking_time_required ))
    if (Boolean(this.props.restaurant_website_detail.is_pre_booking_enabled && this.state.deliveryDate)) {
        if (Boolean(this.props.restaurant_website_detail.is_pre_booking_time_required && this.state.deliveryTime)) {
          this.setState({ confirm: true });
          alert("hi")
        } else if(!this.props.restaurant_website_detail.is_pre_booking_time_required) {
          this.setState({ confirm: true });
        }
      }
  }

  render() {
    if(this.state.confirm){
      return(
          <Redirect to='/signup'/>
      )
  }
    return (
      <div>
        <hr />
        <div className="delivery-type">
          {!this.state.pre_order && (
            <>
              <Link to="/signup">
                <button>Order for Now</button>
              </Link>
            </>
          )}

          {this.props.restaurant_website_detail.is_pre_booking_enabled && (
            <>
              {!this.state.pre_order && (
                <button
                  onClick={() => {
                    this.setState({ pre_order: true });
                  }}
                  className="mt-10"
                >
                  Order for Later
                </button>
              )}
              {this.state.pre_order && (
                <>
                  <p>When do you want us to deliver?</p>
                  <div className="delivery-type-inputs mt-10">
                    <Flatpickr
                    placeholder = "Delivery Date"
                    onChange={deliveryDate => {
                      this.setState({deliveryDate});}}
                    />
                    {this.props.restaurant_website_detail
                      .is_pre_booking_time_required && (
                        <Flatpickr
                        options={{ enableTime: true,
                        noCalendar: true,
                        dateFormat: "H:i"}}
                        placeholder = "Delivery time"
                        onChange={deliveryTime => {
                          this.setState({deliveryTime});}}
                        />
                  
                    )}
                  </div>

                    <button onClick={this.canRoute} className="mt-10">Confirm</button>
                </>
              )}
            </>
          )}
        </div>
        <hr />
      </div>
    );
  }
}
export default Delivery;
