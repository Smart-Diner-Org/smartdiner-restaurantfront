import React , {Component} from "react"
import './App.css'
import NewCustomer from "./NewCustomer"
import Payment from "./Payment";
import GetAddress from "./GetAddress"
import GetOTP from "./GetOTP"

class SignUp extends Component{
    constructor(props){
        super();
        this.state={
            mobile : "",

        }
        this.handleChange = this.handleChange.bind(this)

    }
    handleChange(event) {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    render(){
        return(
            <div className="signup  mt-50">
                <div className="container">
                    <div className="row mb-50">
                        <h2>Customer Details</h2>
                    </div>
                 
                    <div className="row">
                              <div className="col-lg-6 col-sm-12">
                              <form className="customer-details-form">
                        <div className="form-group">
                            
                                    <GetOTP />
                                    <NewCustomer />

                                    <GetAddress />
                                </div>
                                
                                </form>
                            </div>


                            <div className="col-lg-5 col-sm-12 ">
                                    <Payment />
                                </div>
                    </div>
                    
                </div>
            </div>
        )
    }

}

export default SignUp