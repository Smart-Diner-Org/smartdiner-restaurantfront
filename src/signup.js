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
        this.apiLink = 'https://6e09100abf77.ngrok.io/'
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
            message: "",
            addressTwo : sessionStorage.getItem('address'),
            addressOne: "skd road",
        }
        this.handleChange = this.handleChange.bind(this)
        this.MhandleChange = this.MhandleChange.bind(this)
        this.requestOTP = this.requestOTP.bind(this)
        this.OTPverfication = this.OTPverfication.bind(this)
        this.resendOTP = this.resendOTP.bind(this)
        this.setOTPValue = this.setOTPValue.bind(this);
        this.addCustomer = this.addCustomer.bind(this);
        this.goPayment = this.goPayment.bind(this)

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
                console.log(error)
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
                sessionStorage.setItem('token',res.data.accessToken)
                this.setState({message:res.data.message})
            })
            .catch(function (error) {
                console.log(error)
    
        
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
                sessionStorage.setItem('token',res.data.accessToken)
                this.setState({message:res.data.message})
            })
            .catch(function (error) {
                console.log(error.response.data.message)
                // this.setState({message:error.response.data.message})
            })

    }

    addCustomer(event){
        const data = {
            addressOne :this.state.addressOne,
            addressTwo : this.state.addressTwo,
            cityId : 1,  //coiambatore
            stateId : 1, //tamilnadu
            latitude : sessionStorage.getItem('lat'),
            longitude : sessionStorage.getItem('long')
        }
        alert("i'm vinay")
        axios.post(`${this.apiLink}after_login/customer/update_details`,data ,{
            headers: {
              'x-access-token': `${sessionStorage.getItem('token')}` 
            }})
            .then(res =>{
                // this.setState({message:res.data.message})
                console.log(res.data.message)

            })
            .catch(function (error) {
                console.log(error.response.data.message)
                // this.setState({message:error.response.data.message})
            })

    }
    
    goPayment(){
        let newArray =  (JSON.parse(sessionStorage.getItem('items')))
        let selectedArray = []
        // console.log(newArray)
        newArray.map((item)=>{
            if(item.quantity>=1){
                let menu = [{id: item.id},{quantity: item.quantity}, {price:item.discountPrice},{originalPrice: item.price}]
                selectedArray.push(...menu)
            }
        })
        console.log(selectedArray)
        const data ={
            restuarantBranchId : newArray[0].restuarant_branch_id,
            total_price : sessionStorage.getItem("total_price"),
            latitude : sessionStorage.getItem("lat"),
            longitude : sessionStorage.getItem("long"),
            menus : selectedArray,
        }
        console.log(data)
        axios.post(`${this.apiLink}after_login/order/place_order`,data ,{
            headers: {
              'x-access-token': `${sessionStorage.getItem('token')}` 
            }})
            .then(res =>{
                console.log(res.data)
                    window.open(res.data, '_blank')
                this.setState({message:res.data.message})

            })
            .catch(function (error) {
                console.log(error.response.data.message)
                // this.setState({message:error.response.data.message})
            })
    }



    
    render(){
        return(
         
            <div className="signup ">
                 <div className="container">
                    <div className="header mt-30">
                        <h2>Customer Details</h2>
                        <h4>{sessionStorage.getItem("total_price")}</h4>
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
                                    {this.state.user_info.accessToken && (this.state.user_info.user.customer_detail ? 
                                    <GetAddress
                                    customer_detail = {this.user.customer_detail}
                                    />
                                    :
                                    <NewCustomer
                                    addressTwo = {this.state.addressTwo}
                                    addCustomer = {this.addCustomer}
                                    handleChange = {this.handleChange}
                                    />
                                    )}
                                    
                            </div>
                        </div>
                        <div className="col-lg-6 col-sm-12 mt-40">
                        {/* {this.state.user_info.accessToken && <Payment />} */}
                        <Payment
                        goPayment = {this.goPayment}
                        />
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default SignUp