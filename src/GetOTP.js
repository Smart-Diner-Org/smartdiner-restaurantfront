import React from "react"


class GetOTP extends React.Component{

    render(){
        return( 
            <div className="mobile-verification ">
                <form onSubmit={this.props.requestOTP}>
                    <input  type="tel" class="form-control" name="mobile" minLength="10" maxLength="10" placeholder="Enter Mobile Number" onChange={this.props.handleChange}/>
                </form>
                    <div className="row mt-30">
                        { !this.props.requestedOTP && 
                            <>
                            <form onSubmit={this.props.OTPverfication}>
                            <ul className="col-12 OTP-verification" name="OTP">
                            <li><input type="text" id="otpbox1" maxLength="1" minLength="1"/> </li>
                            <li><input type="text" id="otpbox2" maxLength="1" minLength="1"/> </li>
                            <li><input type="text" id="otpbox3" maxLength="1" minLength="1"/> </li>
                            <li><input type="text" id="otpbox4" maxLength="1" minLength="1"/> </li>
                            </ul>
                            {/* <input type="text" maxLength="4" name="OTP" onChange={this.props.handleChange}/> */}
                            </form>
                            
                            <a href="#" className="col-4" style={{marginTop:"20px"}} onClick={ this.props.resendOTP }>Resend OTP</a>
                            <small className="error-message col-12" style={{color:"#e22a28"}}>Wrong Name</small>
                            </>
                        }
                        
                    </div>
                
            </div>
        )  
    }
}

export default GetOTP;