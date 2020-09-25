import React,{Component} from "react"
import {Link} from 'react-router-dom'



class Delivery extends Component {
    constructor(props) {
        super(props);
        this.state={
            pre_order : false,
            deliveryDate : null,
            deliveryTime : null,
            confirm : false,
        }
        this.handleChange = this.handleChange.bind(this)

    }

    handleChange(event) {
        const {name, value} = event.target
        this.setState({
            [name]: value,
        })
        sessionStorage.setItem([name],value)
        if(this.props.restaurant_website_detail.is_pre_booking_enabled){
            if(this.props.restaurant_website_detail.is_pre_booking_time_required){
                this.setState({confirm:true})
            }else{
                this.setState({confirm:true})
            }
        }
    }


    
    render(){
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
                    { !this.state.pre_order && <button onClick={()=>{this.setState({pre_order:true})}} className="mt-10">Order for Later</button>}
                    {
                        this.state.pre_order &&
                        <>
                            <p>When do you want us to deliver?</p>
                            <div className="delivery-type-inputs mt-10">
                                <input className="row " name="deliveryDate" required="true" type="text" placeholder="Delivery Date" onFocus={(e) => e.target.type = 'date'} onChange={this.handleChange} />
                                {this.props.restaurant_website_detail.is_pre_booking_time_required && <input className="row mt-10" name="deliveryTime" required="true" type='text' placeholder="Delivery Time" onFocus={(e) => e.target.type = 'time'}  onChange={this.handleChange} /> }
                            </div>
                            
                            <Link to={this.state.confirm? "/signup": ""}>
                                <button className="mt-10" >Confirm</button>
                            </Link>
                        </>
                    }

                    </>
                    }
                    
                </div>
                <hr/>
            </div>
            
        )
    }
}
 export default Delivery