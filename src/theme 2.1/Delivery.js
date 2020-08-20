import React,{Component} from "react"
import {Link} from 'react-router-dom'



class Delivery extends Component {
    
    render(){
        return(
            <div>
                <hr/>
                <div className="delivery-type">
                <Link 
                    to={{
                        pathname: '/signup',
                        totalPrice: 
                            this.props.values[2].toFixed(2)
                        }} >
                    <button >Checkout</button>
                </Link>
                
                
            </div>
            <hr/>
            </div>
            

        )
    }
}
 export default Delivery