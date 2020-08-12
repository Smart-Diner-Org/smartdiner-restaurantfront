import React,{Component} from "react"
import {Link} from 'react-router-dom'



class Delivery extends Component {
    
    render(){
        return(
            <div>
                <hr/>
                <div className="delivery-type">
                {sessionStorage.setItem("total_price",this.props.values[2].toFixed(2))}
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