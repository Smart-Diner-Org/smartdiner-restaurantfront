import React,{Component} from "react"


class Bill extends React.Component {
    render(){
        
        return(
            <div class="bill-container">
                <hr/>
                <div className="container">
                    <div className="row">
                            <label className="col-auto mr-auto">Total</label><br/>
                            <label className="col-auto" >{`Rs ${this.props.values[0].toFixed(2)}`}</label> <br/>
                        </div>
                    <div className="row">
                        <label className="col-auto mr-auto" style={{textDecoration:'underline',textDecorationColor:'yellow',textDecorationThickness:'3px'}} >Tax Charges</label>
                        <label className="col-auto" style={{marginBottom:"5rem"}}>{`Rs ${this.props.values[1].toFixed(2)}`}</label>
                    </div>
                    <div className="row">
                    <div className="final-bill">
                            <div class="col-9" >
                                
                                    <label >Coupon Code</label>
                                    <input type="textbox" />
                                    <button >Find</button>
                                    
                                </div>
                          
                            <div class="col-3S">
                                <label className="col" >To Pay</label>
                                <label className="col"><strong>{`Rs${this.props.values[2].toFixed(2)}`}</strong></label>
                            </div>
                            
                            </div>
                    </div>
                </div>
            </div>

        )
    }
}
 export default Bill