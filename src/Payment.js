import React from "react"


class Payment extends React.Component{
    render(){
        return(
            <div className="payment-method mt-30">
                <div className="row">
                    <ul>
                        <li><button>Gpay</button></li>
                        <li><button>PhonePe</button></li>
                        <li><button>BHIM</button></li>
                        <li><button>PayTM</button></li>
                        <li><button>Cash</button></li>
                    </ul>
                </div>
                <div className="row mt-30">
                    <button className="proceed" style={{marginLeft:"80%"}}>Proceed</button>
                </div>
            </div>
        )
    }
}

export default Payment;