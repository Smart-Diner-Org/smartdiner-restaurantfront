import React from "react"
import BHIM from './assets/images/bhim.svg' 
import Gpay from './assets/images/google-pay.svg'
import paytm from './assets/images/paytm.svg'
import phonepe from './assets/images/phonepe.svg'
import master from './assets/images/025-mastercard.svg'
import visa from './assets/images/visa.svg'
import rupay from './assets/images/rupay.svg'
import jio from './assets/images/jiomoney.svg'
import ola from './assets/images/olamoney.svg'
import freeRe from  './assets/images/freecharge.svg'
import mobwik from  './assets/images/mobiwiki.svg'





class Payment extends React.Component{
    render(){
        return(
            <div className="payment-method ">
                <div className="row">
                    <ul style={{width:"100%"}}>
                        <li><button className="d-flex align-item-center">UPI Wallets
                                <div className="d-flex justify-content-end"  style={{width:"75%"}}>
                                <img src={BHIM} alt=""></img>
                                <img src={Gpay} alt=""></img>
                                <img src={paytm} alt=""></img>
                                <img src={phonepe} alt=""></img>
                                </div>
                            </button>
                        </li>
                        <li><button className="d-flex align-item-center">Credit Card
                                
                                </button></li>
                        <li><button className="d-flex align-item-center">Debit card
                        <div className="d-flex justify-content-end"  style={{width:"75%"}}>
                        <img src={master} alt=""></img>
                                <img src={visa} alt=""></img>
                                <img src={rupay} alt=""></img></div>
                                </button></li>
                        <li><button className="d-flex align-item-center">Net Banking</button></li>
                        <li><button className="d-flex align-item-center">Other Wallets
                        <div className="d-flex justify-content-end"  style={{width:"75%"}}>
                                <img src={jio} alt=""></img>
                                <img src={ola} alt=""></img>
                                <img src={mobwik} alt=""></img>
                                <img src={freeRe} alt=""></img>
                            
                            </div>
                            </button></li>
                    </ul>
                    <div className="mt-30 d-flex justify-content-end" style={{width:"100%"}}>
                        {sessionStorage.getItem("total") && <button className="proceed" onClick={this.props.check &&  this.props.goPayment} >Proceed</button>}
                    </div>
                    <div className="container mt-20 ">
                                        {this.props.errorMessage ?
                                        <small className="row message ml-1" style={{color:"#e22a28"}}>{this.props.errorMessage}</small> 
                                        :
                                        <small className="row message ml-1" style={{color:"green"}}>{this.props.successMessage}</small>}
                                    </div>
                </div>
                
            </div>
        )
    }
}

export default Payment;