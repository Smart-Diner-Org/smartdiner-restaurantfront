import React from "react"

const refArray = [];
let value = "";
const elementsArray = [1, 2, 3, 4];


class GetOTP extends React.Component{
    constructor(props){
        super();
        this.state = {
            minutes: 0,
            seconds: 20
        }
    this.navigateBasedonArrowKeyPressed = this.navigateBasedonArrowKeyPressed.bind(this)
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
    console.log(value)
    }

    componentDidMount() {
        this.myInterval = setInterval(() => {
            const { seconds, minutes } = this.state

            if (seconds > 0) {
                this.setState(({ seconds }) => ({
                    seconds: seconds - 1
                }))
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(this.myInterval)
                } else {
                    this.setState(({ minutes }) => ({
                        minutes: minutes - 1,
                        seconds: 59
                    }))
                }
            } 
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.myInterval)
    }
  

    render(){
        return( 
            <div className="mobile-verification ">
                <form onSubmit={this.props.requestOTP}>
                    <input  type="tel" class="form-control" autoFocus name="mobile" minLength="10" maxLength="10" placeholder="Enter Mobile Number" onChange={this.props.handleChange}/>
                    { !this.props.requestedOTP && <button type="submit">Get OTP</button>}
                </form>

                    <div className="row mt-30">
                        { this.props.requestedOTP && 
                            <>
                            <form onSubmit={this.props.OTPverfication}>
                                <div className="col-12 OTP-verification" name="OTP">
                                    {elementsArray.map((k, i) => (
                                        <input 
                                        ref={(ref) => (refArray[i] = ref)}
                                        onKeyUp={(e) => this.navigateBasedonArrowKeyPressed(e, i)}
                                        maxLength={1}
                                        />
                                    ))}
                                    {this.state.minutes == 0 && this.state.seconds==0 ?
                                    <a href="#" className="ml-30 mt-10"  onClick={ this.props.resendOTP }>Resend OTP</a>
                                    :
                                    <>
                                    <button type="submit" >Verify OTP</button>
                                    <h6>{ this.state.minutes }:{ this.state.seconds < 10 ? `0${this.state.seconds }` : this.state.seconds }</h6>
                                    </>
                                }
                                    
                                </div> 
                            </form>
                                    

                                

                            
                            <small className="error-message col-12" style={{color:"#e22a28"}}>Wrong Name</small>
                            </>
                        }
                        
                    </div>
                
            </div>
        )  
    }
}

export default GetOTP;