import React, { Component } from "react";
import { Link } from "react-router-dom";

class Delivery extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     pre_order: false,
  //     deliveryDate: null,
  //     deliveryTime: null,
  //     confirm: false,
  //   };
  //   this.dateSelected = this.dateSelected.bind(this);
  //   this.timeSelected = this.timeSelected.bind(this);
  //   this.canRoute = this.canRoute.bind(this);
  // }

  // dateSelected(event) {
  //   const  value = event.target.value;
  //   this.setState({
  //       deliveryDate: value,
  //   });
  //   sessionStorage.setItem("deliveryDate", value);
  //   const today = new Date()
  //   const selectedDate = new Date(value)


  //   if((today.getTime()) <(selectedDate.getTime())){
  //       this.canRoute()
  //   }
  //   else{
  //       alert("Please provide proper date")
  //   }
   
  // }

  // timeSelected(event){
  //   const  value = event.target.value;
  //   this.setState({
  //       deliveryTime: value,
  //   });
  //   sessionStorage.setItem("deliveryTime", value);
  //   this.canRoute()
  // }

  // canRoute(){
  //   if (this.props.restaurant_website_detail.is_pre_booking_enabled && this.state.deliveryDate) {
  //       if (this.props.restaurant_website_detail.is_pre_booking_time_required && this.state.deliveryTime) {
  //         this.setState({ confirm: true });
  //       } else if(!this.props.restaurant_website_detail.is_pre_booking_time_required) {
  //         this.setState({ confirm: true });
  //       }
  //     }
  // }

  render() {
    return (
      <div>
        <hr />
        <div className="delivery-type">
         
            <>
              <Link to="/signup">
                <button>Check Out</button>
              </Link>
            </>
     

          {/* {this.props.restaurant_website_detail.is_pre_booking_enabled && (
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
                    <input
                      className="row "
                      name="deliveryDate"
                      required="true"
                      type="text"
                      placeholder="Delivery Date"
                      onFocus={(e) => {
                        e.target.type = "date";
                        e.target.click();
                      }}
                      onChange={(e)=>this.dateSelected(e)}
                    />
                    {this.props.restaurant_website_detail
                      .is_pre_booking_time_required && (
                      <input
                        className="row mt-10"
                        name="deliveryTime"
                        required="true"
                        type="text"
                        placeholder="Delivery Time"
                        onFocus={(e) => {
                          e.target.type = "time";
                        }}
                        onChange={(e)=>this.timeSelected(e)}
                      />
                    )}
                  </div>

                  <Link to={this.state.confirm? "/signup" : ""}>
                    <button className="mt-10">Confirm</button>
                  </Link>
                </>
              )}
            </>
          )} */}
        </div>
        <hr />
      </div>
    );
  }
}
export default Delivery;
