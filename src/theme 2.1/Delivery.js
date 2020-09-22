import React,{Component} from "react"
import {Link} from 'react-router-dom'



class Delivery extends Component {
    constructor(props) {
        super(props);
        this.state={
            pre_order : false,
            date : null,
        }
        this.handleChange = this.handleChange.bind(this)

    }

    handleChange(event) {
        const {name, value} = event.target
        this.setState({
            [name]: value,
        })
        sessionStorage.setItem("deliveryDate",value)
    }


    
    render(){
        console.log(this.props.restaurant_website_detail)
        return(
            <div>
                <hr/>
                <div className="delivery-type">
                    { 
                        !this.state.pre_order &&
                        <>
                        <Link to= '/signup' >
                            <button >Order for Now</button>
                        </Link>
                        </>
                    }

                    { 
                    this.props.restaurant_website_detail.is_pre_booking_enabled &&
                    <>
                    <button onClick={()=>{this.setState({pre_order:true})}} className="mt-10">Order for Later</button>
                    <p>Select delivery date</p>
                    <div className="delivery-type-inputs">
                        <input className="row " name="date" required="true" type='date' onChange={this.handleChange} />
                        {this.props.restaurant_website_detail.is_pre_booking_enabled && <input className="row mt-10" name="date" required="true" type='time' onChange={this.handleChange} /> }
                    </div>
                    
                    <Link to={this.state.date?"/signup":""}>
                        <button className="mt-10" >Confirm</button>
                    </Link>
                    </>
                    }
                    
                </div>
                <hr/>
            </div>
            
        )
    }
}
 export default Delivery