import React from "react"

const refArray = [];
let value = "";
const elementsArray = [1, 2, 3, 4];

class GetOTP extends React.Component{
    constructor(props){
        super();
        this.state = {
            minutes: 0,
            seconds: 60
        }
}
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
}
   

    // componentDidMount() {
    //     this.myInterval = setInterval(() => {
    //         const { seconds, minutes } = this.state

    //         if (seconds > 0) {
    //             this.setState(({ seconds }) => ({
    //                 seconds: seconds - 1
    //             }))
    //         }
    //         if (seconds === 0) {
    //             if (minutes === 0) {
    //                 clearInterval(this.myInterval)
    //             } else {
    //                 this.setState(({ minutes }) => ({
    //                     minutes: minutes - 1,
    //                     seconds: 59
    //                 }))
    //             }
    //         } 
    //     }, 1000)
    // }

    // componentWillUnmount() {
    //     clearInterval(this.myInterval)
    // }
  

    render(){
        return( 
            <div className="mobile-verification ">
                <form onSubmit={!this.props.requestedOTP? this.props.requestOTP : this.props.OTPverfication }>
                    <input  type="tel" class="form-control" 
                    autoFocus name="mobile" minLength="10" maxLength="10" 
                    placeholder="Enter Mobile Number" data-error="Mobile is required." required="required"
                    onChange={this.props.MhandleChange}/>
                        {!this.props.isVerified &&
                                <div className="row mt-20 d-flex align-item-center" name="OTP">
                                    <div className="col-7 d-inline-flex">
                                        {elementsArray.map((k, i) => (
                                            <input className="otp-box"
                                            ref={(ref) => (refArray[i] = ref)} 
                                            onKeyUp={(e) => this.navigateBasedonArrowKeyPressed(e, i)}
                                            maxLength={1}
                                            />
                                        ))}

                               
                                    </div>
                                    
                                   <div className="col-5 d-flex align-item-center">
                                   {!this.props.requestedOTP && <button type="submit">Get OTP</button>}
                                    {this.props.requestedOTP && 
                                    <>
                                    {this.props.minutes == 0 && this.props.seconds==0 ?
                                    <button  onClick={ this.props.resendOTP }>Resend OTP</button>
                                    :
                                    <>
                                    <button type="submit" >Verify { this.props.minutes }:{ this.props.seconds < 10 ? `0${this.props.seconds }` : this.props.seconds }</button>
                                    
                                    </>}
                                    </>}

                                   </div>
                                    </div> }
                                
                                
                </form>
                <div className="container mt-20 ">
                                <small className="row message ml-5" style={{color:"#e22a28"}}>{this.props.errorMessage}</small> 
                             <small className="row message ml-1" style={{color:"green"}}>{this.props.successMessage}</small>
                                </div>
                        
                        
                    </div>
                
         
        )  
    }
}

export default GetOTP;