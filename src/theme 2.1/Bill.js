import React,{Component} from "react"


class Bill extends Component {
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
                        <a className="col-auto mr-auto" href="#"  >Tax Charges</a>
                        <label className="col-auto" style={{marginBottom:"5rem"}}>{`Rs ${this.props.values[1].toFixed(2)}`}</label>
                    </div>
                    
                    <div className="final-bill row">
                            <div class="col-8" >
                                
                                    {/* <label >Coupon Code</label> */}
                                    <input type="textbox" placeholder="Coupon Code"/>
                                    <button >Find</button>
                                    
                                </div>
                          
                            <div class="col-4 total-amount">
                                <label >To  Pay : <span >{`Rs${this.props.values[2].toFixed(2)}`}</span></label>
                            
                            </div>
                            
                        
                    </div>
                </div>
            </div>

        )
    }
}
 export default Bill