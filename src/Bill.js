import React,{Component} from "react"


class Bill extends React.Component {
    render(){
        console.log(this.props)
        return(
            <div class="bill-container">
                <hr/>
                <div className="container">
                    <div className="row">
                            <label>Total</label><br/>
                            <label>{`Rs ${this.props.values[0].toFixed(2)}`}</label> <br/>
                        </div>
                    <div className="row">
                        <label style={{textDecoration:'underline',textDecorationColor:'yellow',textDecorationThickness:'3px'}} >Tax Charges</label>
                        <label>{`Rs ${this.props.values[1].toFixed(2)}`}</label>
                    </div>
                    <div className="row">
                        <div className="col">
                            <label>Coupon Code</label>
                            <input type="textbox" />
                            <button>Find</button>
                        </div>
                        <div className="col">
                            <label>To Pay</label>
                            <label><strong>{`$${this.props.values[2].toFixed(2)}`}</strong></label>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
 export default Bill