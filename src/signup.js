import React , {Component} from "react"
import './App.css'
import NewCustomer from "./NewCustomer"
import Payment from "./Payment";
import GetAddress from "./GetAddress"
import GetOTP from "./GetOTP"
import axios from "axios"

class SignUp extends Component{
    constructor(props){
        super();
        this.state = {
            mobile : "",
            OTP : "",
            requestedOTP : false,
            user_info : [{}]
        }
        this.handleChange = this.handleChange.bind(this)
        this.requestOTP = this.requestOTP.bind(this)
        this.OTPverfication = this.OTPverfication.bind(this)
        this.resendOTP = this.resendOTP.bind(this)
    }
    handleChange(event) {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    requestOTP(event){
        event.preventDefault()
        
        this.setState({requestedOTP:true})
        const data = {
            mobile : this.state.mobile,
            roleId : 4,
        }
        axios.post('https://3fe9a515eb9a.ngrok.io/auth/check_for_account',data)
            .then(res => {
                console.log(res.data.message)
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    OTPverfication(event){
        event.preventDefault()

        const data ={
            mobile : this.state.mobile,
            otp : this.state.OTP
        }
        axios.post('https://3fe9a515eb9a.ngrok.io/auth/verify_otp',data)
            .then(res => {
                this.setState ({user_info:res.data})
                console.log(this.state.user_info)
            })
            .catch(function (error) {
                console.log(error);
            })
        
    }

    resendOTP(event){
        const data ={
            mobile : this.state.mobile
        }
        axios.post('https://3fe9a515eb9a.ngrok.io/auth/resend_otp',data)
            .then(res => {
                this.setState ({user_info:res.data})
                console.log(this.state.user_info)
            })
            .catch(function (error) {
                console.log(error);
            })

    }
    
    render(){
        return(
            <div className="signup ">
                <div className="container">
                    <div className="header row mb-30">
                        <h2>Customer Details</h2>
                        <label>Rs. 339</label>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-sm-12">
                            <div className="customer-details-form">
                                    <GetOTP  
                                    requestedOTP = {this.state.requestedOTP}
                                    handleChange={this.handleChange}
                                    requestOTP={this.requestOTP}
                                    OTPverfication={this.OTPverfication}
                                    resendOTP={this.resendOTP}
                                    />
                                    <NewCustomer />
                                    <GetAddress />
                            </div>
                        </div>
                        <div className="col-lg-5 col-sm-12 ">
                            <Payment />
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default SignUp