import React , {Component} from "react"
import './App.css'
import NewCustomer from "./NewCustomer"
import Payment from "./Payment";
import GetAddress from "./GetAddress"
import GetOTP from "./GetOTP"
import axios from "axios"


let myInterval;

class SignUp extends Component{
    constructor(props){
        super();
        this.apiLink = 'https://80b047bae3e5.ngrok.io/'
        this.state = {
            minutes: 0,
            seconds: 40,
            mobile : "",
            OTP : "",
            requestedOTP : false,
            isVerified : false,
            name : "",
            email : "",    //user_info.user.customer_detail.
            user_info : {accessToken: null,
                user:{
                createdAt: null,
                customer_detail: {
                    id: null,
                    customer_id: null,
                    address_one: null,
                    address_two: null,
                    city_id: null,
                    state_id: null,
                    primary: null,
                    address_type: null,
                    lat: null,
                    long: null,
                    createdAt: null,
                    updatedAt: null,
                    },
                email: null,
                id: null,
                mobile: null,
                mobile_verification: null,
                name: null,
                otp_secret: null,
                password: null,
                remember_token: null,
                role_id: null,
                updatedAt: null,
                uuid: null,}},
            successMessage: "",
            errorMessage: '',
            addressTwo : sessionStorage.getItem('address'),
            addressOne: "",
        }
        this.handleChange = this.handleChange.bind(this)
        this.MhandleChange = this.MhandleChange.bind(this)
        this.requestOTP = this.requestOTP.bind(this)
        this.OTPverfication = this.OTPverfication.bind(this)
        this.resendOTP = this.resendOTP.bind(this)
        this.setOTPValue = this.setOTPValue.bind(this);
        this.addCustomer = this.addCustomer.bind(this);
        this.goPayment = this.goPayment.bind(this)
        this.editbtn = this.editbtn.bind(this)

    }
    handleChange(event) {
        const {name, value} = event.target
        this.setState({
            [name]: value,
            // user_info:{...this.state.user_info.user,user:{customer_detail:{[name]: value}}}
            
        })
    }

    MhandleChange(event){
        const value = event.target.value
        this.setState({
            user_info : {accessToken: null,
                user:{
                createdAt: null,
                customer_detail: null,
                email: null,
                id: null,
                mobile: null,
                mobile_verification: null,
                name: null,
                otp_secret: null,
                password: null,
                remember_token: null,
                role_id: null,
                updatedAt: null,
                uuid: null,}},
                mobile:value,
                requestedOTP : false,
                isVerified : false,

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
        myInterval =  setInterval(() => {
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
        axios.post(`${this.apiLink}auth/check_for_account`,data)
            .then(res => {
                console.log(res.data.message)
                this.setState({successMessage:res.data.message})
                
            })
            .catch(function (error) {
                console.log(error)
                // this.setState({message:error.response.data.message})
                // this.setState({errorMessage:error.response.data.message})
            })
    }

    async OTPverfication(event){
        event.preventDefault()
        const data ={
            mobile : this.state.mobile,
            otp : this.state.OTP
        }
        await axios.post(`${this.apiLink}auth/verify_otp`,data)
            .then(res => {
                this.setState ({user_info:res.data})
                sessionStorage.setItem('token',res.data.accessToken)
                this.setState({successMessage:res.data.message})
                this.setState({isVerified:true})
                clearInterval(myInterval)
            })
            .catch(function (error) {
                // this.setState({errorMessage:error.response.data.message})
    
        
            })
        
    }

    async resendOTP(event){
        alert("im here")
        const data ={
            mobile : this.state.mobile
        }
        await axios.post(`${this.apiLink}auth/resend_otp`,data)
            .then(res => {
                this.setState ({user_info:res.data})
                sessionStorage.setItem('token',res.data.accessToken)
                this.setState({successMessage:res.data.message})
            })
            .catch(function (error) {
                // this.setState({errorMessage:error.response.data.message})
                // this.setState({message:error.response.data.message})
            })
         this.setState({seconds:40}) 
         this.requestOTP(event)  
    }

    async addCustomer(event){
        event.preventDefault()
        const data = {
            name : this.state.name,
            email : this.state.email,
            addressOne :this.state.addressOne,
            addressTwo : this.state.addressTwo,
            cityId : 1,  //coiambatore
            stateId : 1, //tamilnadu
            latitude : sessionStorage.getItem('lat'),
            longitude : sessionStorage.getItem('long')
        }
        console.log(data)
        await axios.post(`${this.apiLink}after_login/customer/update_details`,data ,{
            headers: {
              'x-access-token': `${sessionStorage.getItem('token')}` 
            }})
            .then(res =>{
                // this.setState({message:res.data.message})
                console.log(res.data.message)
                this.setState({successMessage:res.data.message})

            })
            .catch(function (error) {
                // this.setState({errorMessage:error.response.data.message})
                // this.setState({message:error.response.data.message})
            })



    }
    
    async goPayment(event){
        event.preventDefault()
        let newArray =  (JSON.parse(sessionStorage.getItem('items')))
        let selectedArray = []
        // console.log(newArray)
        newArray.map((item)=>{
            if(item.quantity>0){
                let menu = {id: item.id, quantity: item.quantity, price:item.discountPrice ,originalPrice: Number(item.price)}
                console.log(menu)
                selectedArray.push(menu)
            }
        })
        const data ={
            restuarantBranchId : Number(newArray[0].restuarant_branch_id),
            total_price : Number(sessionStorage.getItem("total_price")),
            latitude : Number(sessionStorage.getItem("lat")),
            longitude : Number(sessionStorage.getItem("long")),
            menus : selectedArray,
        }
        await axios.post(`${this.apiLink}after_login/order/place_order`,data ,{
            headers: {
              'x-access-token': `${sessionStorage.getItem('token')}` 
            }})
            .then(res =>{
                console.log(res.data)
                window.open(res.data.paymentUrl)
                this.setState({successMessage:res.data.message})

            })
            .catch(function (error) {
                // this.setState({errorMessage:error.response.data.message})
                // this.setState({message:error.response.data.message})
            })
    }
    
 editbtn(event){

    this.setState({user_info : {accessToken: sessionStorage.getItem("token"),
        user:{
        createdAt: this.state.user_info.createdAt,
        customer_detail: {
            id: null,
            customer_id: null,
            address_one: null,
            address_two: null,
            city_id: null,
            state_id: null,
            primary: null,
            address_type: null,
            lat: null,
            long: null,
            createdAt: null,
            updatedAt: null,
            },
        email: null,
        id: this.state.user_info.id,
        mobile: this.state.user_info.mobile,
        mobile_verification: this.state.user_info.mobile_verification,
        name: null,
        otp_secret: null,
        password: null,
        remember_token: null,
        role_id: null,
        updatedAt: this.state.user_info.updatedAt,
        uuid: null,}}})
 }

    render(){
        return(
            <div className="signup ">
                 <div className="container">
                    <div className="header mt-30">
                        <h2>Customer Details</h2>
                        <h4>Rs. {sessionStorage.getItem("total_price")}</h4>
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
                                    successMessage={this.state.successMessage}
                                    errorMessage = {this.state.errorMessage}
                                    minutes = {this.state.minutes}
                                    seconds = {this.state.seconds}
                                    isVerified = {this.state.isVerified}
                                    />
                                    {this.state.user_info.accessToken && (this.state.user_info.user.customer_detail ? 
                                    <GetAddress
                                    name = {this.state.user_info.user.name}
                                    customer_detail = {this.state.user_info.user.customer_detail}
                                    successMessage={this.state.successMessage}
                                    errorMessage = {this.state.errorMessage}
                                    editbtn = {this.editbtn}
                                    />
                                    :
                                    <NewCustomer
                                    addressTwo = {this.state.addressTwo}
                                    addCustomer = {this.addCustomer}
                                    handleChange = {this.handleChange}
                                    successMessage={this.state.successMessage}
                                    errorMessage = {this.state.errorMessage}
                                    />
                                    )}
                                    
                            </div>
                        </div>
                        <div className="col-lg-6 col-sm-12 mt-40">
                        {/* {this.state.user_info.accessToken && <Payment />} */}
                        <Payment
                        goPayment = {this.goPayment}
                        successMessage={this.state.successMessage}
                        errorMessage = {this.state.errorMessage}
                        />
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default SignUp