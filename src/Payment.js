import React from "react"


class Payment extends React.Component{
    render(){
        return(
            <div className="payment-method mt-30">
                <div className="row">
                    <ul style={{width:"100%"}}>
                        <li><button>Gpay</button></li>
                        <li><button>PhonePe</button></li>
                        <li><button>BHIM</button></li>
                        <li><button>PayTM</button></li>
                        <li><button>Cash</button></li>
                    </ul>
                    <div className="mt-30 d-flex justify-content-end" style={{width:"100%"}}>
                    <button className="proceed" onClick={this.props.check && this.props.goPayment} >Proceed</button>
                </div>
                </div>
                
            </div>
        )
    }
}

export default Payment;