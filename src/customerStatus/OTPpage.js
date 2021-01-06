import React from "react";
import "./OTPpage.css"
import OTPBox from "../PaymentPage/OTPBox"
import ReactGA from "react-ga";

class OTPpage extends React.Component {
    constructor(props){
        super(props);
    }
    
    render() {
      return (
          <div className="otpPage-container d-flex flex-column justify-content-center align-items-center">
          <img src={this.props.logo} width="75" height="75" alt="logo" className="logo rounded-circle mt-50"></img>
          <h3>{this.props.restuarantName}</h3>
          {/*<a href="#">Login</a>/<a href="#">Sign up</a> */} 
          {!this.props.wrongOrder && 
        <p className="text-center mt-50">We have sent OTP to your given mobile number {this.props.customerContactNumber} please enter the OTP below</p>
          }
          {this.props.wrongOrder &&  
                 
                  <p className="text-center mt-50" style={{color:"#e22a28"}}> {this.props.wrongOrder}</p>
                  
                }
        
        {!this.props.wrongOrder && <>
          < div className="otp-box d-inline-flex justify-content-center ">
             <OTPBox 
             setOTPValue={this.props.setOTPValue}
             OTPverfication={this.props.OTPverfication}
             />
              <div className="d-flex align-items-center ">
           { this.props.minutes }:{ this.props.seconds < 10 ? `0${this.props.seconds }` : this.props.seconds }<strong style={{color:"#000466",fontSize:"15px"}}><i className="lni lni-timer"></i></strong>
           </div>
           
           </div>
          

        <div className="contact-button mt-20">
          {this.props.minutes===0 && this.props.seconds===0 && <button onClick={ this.props.resendOTP }>Resend OTP</button>
          }
          </div>
          <div className="container  d-flex justify-content-center mt-20">
                                {this.props.errorMessage ?
                                <small className="ml-1" style={{color:"#e22a28"}}>{this.props.errorMessage}</small> 
                                :
                                <small className="ml-1" style={{color:"green"}}>{this.props.successMessage}</small>}
          
                          </div>
           </>               
          }
       
        <div className="contact-button mt-60 mb-50">
        <a href={`tel:+91${this.props.restaurantContactNumber}`} target="blank"><button onClick={() => {
                        ReactGA.event({
                        category: "otp page",
                        action: "Clicked on Contact Restaurant",
                        label: `Restaurant number ${this.props.restaurantContactNumber}`,
                        
                      });
                    }}>Contact Restaurant</button></a>
        {/*<button classname="col-lg-6 col-sm-6">Send feedback</button>*/}
        
        </div>
        
        </div>
      );
    }
  }
  export default OTPpage