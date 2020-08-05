import React , {Component} from "react"
import './App.css'
import NewCustomer from "./NewCustomer"
import Payment from "./Payment";
import GetAdress from "./GetAdress"
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
            <div className="signup">
                <div className="container">
                    <div className="row mb-50">
                        <h2>Customer Details</h2>
                    </div>
                    <form>
                        <div class="form-group">
                            <div className="row">
                              <div className="col-5">
                                    <GetOTP />
                                    <NewCustomer />
                                    <GetAdress />
                                    <div className="row">
                                        <label>Get Location</label>
                                        <button>Add new adress</button>
                                    </div>   
                                    <div className="row">
                                        <a href="#">*Give Location access for delivery</a>
                                    </div>
                                
                                </div>
                                <div className="col-5">
                                    <Payment />
                                </div>
                            </div>
                    </div>
                    </form>
                </div>
            </div>
        )
    }

}

export default SignUp