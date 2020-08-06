import React,{Component} from "react"
import { Redirect } from "react-router"



class Delivery extends Component {
    handleClick(event){
        return(
            <Redirect to='/signup'/>
        )
    }
    render(){
        return(
            <div>
                <hr/>
                <div className="delivery-type">
                
                <button onClick={this.handleClick}>Checkout</button><br/>
                
            </div>
            <hr/>
            </div>
            

        )
    }
}
 export default Delivery