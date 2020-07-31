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
                            <div class="col-9" >
                                
                                    <label >Coupon Code</label>
                                    <input type="textbox" />
                                    <button >Find</button>
                                    
                                </div>
                          
                            <div class="col-3" style={{textAlign:"right",width:"100%" ,display:"flex"}}>
                                <label style={{textAlign:"left"}} >To  Pay  </label>
                                <label  ><strong style={{fontSize:"1.5em",fontFamily:"Museo moderno"}} >{`Rs${this.props.values[2].toFixed(2)}`}</strong></label>
                            </div>
                            
                        
                    </div>
                </div>
            </div>

        )
    }
}
 export default Bill