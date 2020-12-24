import React from "react";
import "./OTPpage.css"
import OTPBox from "../PaymentPage/OTPBox"
import Alert from "react-bootstrap/Alert";

const refArray = [];
let value = "";
const elementsArray = [1, 2, 3, 4];

class OTPpage extends React.Component {
    constructor(props){
        super(props);
    }
    /*
    navigateBasedonArrowKeyPressed(e, i){
      if (e.key >= 0 && e.key <= 9) refArray[i].value = e.key;
      if (e.target.value && i < 3) refArray[i + 1].focus();
      switch (e.key) {
      case "ArrowRight":
          if (i < 3) refArray[i + 1].focus();
          break;
      case "ArrowLeft":
          if (i > 0) refArray[i - 1].focus();
          break;
      case "Backspace":
          if (i > 0 && !e.target.value) refArray[i - 1].focus();
          break;
      default:
          break;
      }
      value = `${refArray[0].value}${refArray[1].value}${refArray[2].value}${refArray[3].value}`;
      this.props.setOTPValue(value)
      if(value.length == 4 ){
          this.props.OTPverfication(value,this.props.customerContactNumber)
      }
  }
  */
    render() {
      return (
          <div className="otpPage-container conainer">
          <img src={this.props.logo} width="75" height="75" alt="logo" className="logo rounded-circle mt-50"></img>
          <h3>{this.props.restuarantName}</h3>
          {/*<a href="#">Login</a>/<a href="#">Sign up</a> */} 
          {!this.props.wrongOrder && 
        <p className="text-center mt-50">We have sent OTP to your given mobile number {this.props.customerContactNumber} please enter the OTP below</p>
          }
          {this.props.wrongOrder &&  
                 
                  <p className="text-center mt-50" style={{color:"#e22a28"}}> {this.props.wrongOrder}</p>
                  
                }
        {/*
        < React.Fragment className="otp-box col-lg-10 "style={{width:"50px"}}>
        {elementsArray.map((k, i) => (
                                        <input className="otp-box col-lg-mx-10"
                                        type="number"
                                        
                                        key={i}
                                        ref={(ref) => (refArray[i] = ref)} 
                                        onKeyUp={(e) => this.navigateBasedonArrowKeyPressed(e, i)}
                                        maxLength={1}
                                        />
                                    ))}
                                  <React.Fragment>{ this.props.minutes }:{ this.props.seconds < 10 ? `0${this.props.seconds }` : this.props.seconds }<strong style={{color:"#000466",fontSize:"15px"}}><i className="lni lni-timer"></i></strong> </React.Fragment> 
        </ React.Fragment>
        */}
        {!this.props.wrongOrder && <>
           < React.Fragment className="otp-box col-lg-10 "style={{width:"50px"}}>
             <OTPBox 
             setOTPValue={this.props.setOTPValue}
             OTPverfication={this.props.OTPverfication}
             />
             
           </React.Fragment>
           { this.props.minutes }:{ this.props.seconds < 10 ? `0${this.props.seconds }` : this.props.seconds }<strong style={{color:"#000466",fontSize:"15px"}}><i className="lni lni-timer"></i></strong>

        <div className="contact-button mt-20">
          {this.props.minutes===0 && this.props.seconds===0 && <button onClick={ this.props.resendOTP }>Resend otp</button>
          }
          </div>
          <div className="container mt-20">
                                {this.props.errorMessage ?
                                <small className="ml-1" style={{color:"#e22a28"}}>{this.props.errorMessage}</small> 
                                :
                                <small className="ml-1" style={{color:"green"}}>{this.props.successMessage}</small>}
          
                          </div>
           </>               
          }
        {/*
        <div>
        
        
        <button className="login-button">Login</button> 
        </div>
        */}
        <div className="contact-button mt-60 mb-150">
        <a href={`tel:+91${this.props.restaurantContactNumber}`} target="blank"><button>Contact restuarant</button></a>
        {/*<button classname="col-lg-6 col-sm-6">Send feedback</button>*/}
        {/*<a href={`tel:+91${this.props.restaurantContactNumber}`} target="blank">Contact restuarant</a>*/}
        </div>
        
        </div>
      );
    }
  }
  export default OTPpage