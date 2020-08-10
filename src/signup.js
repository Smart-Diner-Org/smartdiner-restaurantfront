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
        this.apiLink = 'http://localhost:9000/'
        this.state = {
            mobile : "",
            OTP : "",
            requestedOTP : false,
            user_info : {accessToken: undefined,
            user:{
            createdAt: undefined,
            customer_detail: undefined,
            email: undefined,
            id: undefined,
            mobile: undefined,
            mobile_verification: undefined,
            name: undefined,
            otp_secret: undefined,
            password: undefined,
            remember_token: undefined,
            role_id: undefined,
            updatedAt: undefined,
            uuid: undefined,}},
            message: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.MhandleChange = this.MhandleChange.bind(this)
        this.requestOTP = this.requestOTP.bind(this)
        this.OTPverfication = this.OTPverfication.bind(this)
        this.resendOTP = this.resendOTP.bind(this)
        this.setOTPValue = this.setOTPValue.bind(this);

    }
    handleChange(event) {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    MhandleChange(event){
        const value = event.target.value
        this.setState({
            user_info : {accessToken: undefined,
                user:{
                createdAt: undefined,
                customer_detail: undefined,
                email: undefined,
                id: undefined,
                mobile: undefined,
                mobile_verification: undefined,
                name: undefined,
                otp_secret: undefined,
                password: undefined,
                remember_token: undefined,
                role_id: undefined,
                updatedAt: undefined,
                uuid: undefined,}},
                mobile:value
        })
    }



setOTPValue = (value)=>{
this.setState({OTP:value})
}


    requestOTP(event){
        event.preventDefault()
        
        this.setState({requestedOTP:true})
        const data = {
            mobile : this.state.mobile,
            roleId : 4,
        }
        axios.post(`${this.apiLink}auth/check_for_account`,data)
            .then(res => {
                console.log(res.data.message)
                this.setState({message:res.data.message})
            })
            .catch(function (error) {
                // this.setState({message:error.response.data.message})
            })
    }

    async OTPverfication(event){
        event.preventDefault()
        let ermessage;
        const data ={
            mobile : this.state.mobile,
            otp : this.state.OTP
        }
        await axios.post(`${this.apiLink}auth/verify_otp`,data)
            .then(res => {
                this.setState ({user_info:res.data})
                this.setState({message:res.data.message})
            })
            .catch(function (error) {
                ermessage = (error.response.data.message)
    
        
            })
            this.setState({message:ermessage})
    }

    resendOTP(event){
        const data ={
            mobile : this.state.mobile
        }
        axios.post(`${this.apiLink}auth/resend_otp`,data)
            .then(res => {
                this.setState ({user_info:res.data})
                this.setState({message:res.data.message})
            })
            .catch(function (error) {
                console.log(error.response.data.message)
                // this.setState({message:error.response.data.message})
            })

    }
    
    render(){
        console.log(this.state.OTP)
        return(
         
            <div className="signup ">
                 <div className="container">
                    <div className="header mt-30">
                        <h2>Customer Details</h2>
                        {this.props.location.totalPrice}
                    </div>
                   
                    <div className="row">
                        <div className="col-lg-6 col-sm-12">
                            <div className="customer-details-form">
                                    <GetOTP  
                                    requestedOTP = {this.state.requestedOTP}
                                    MhandleChange={this.MhandleChange}
                                    requestOTP={this.requestOTP}
                                    OTPverfication={this.OTPverfication}
                                    resendOTP={this.resendOTP}
                                    setOTPValue={this.setOTPValue}
                                    message={this.state.message}
                                    />
                                    {/* {this.state.user_info.accessToken && (this.state.user_info.user.customer_detail ? <GetAddress /> : <NewCustomer />) } */}
                                    <NewCustomer/>
                                    
                            </div>
                        </div>
                        <div className="col-lg-5 col-sm-12 ">
                        {this.state.user_info.accessToken && <Payment />}
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default SignUp