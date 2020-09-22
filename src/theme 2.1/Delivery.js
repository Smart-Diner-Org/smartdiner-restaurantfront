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
        return(
            <div>
                <hr/>
                <div className="delivery-type">
                { !this.state.pre_order &&
                <>
                <Link 
                    to={{
                        pathname: '/signup',
                        }} >
                    <button >Order for Now</button>
                </Link>
                <button onClick={()=>{this.setState({pre_order:true})}} className="mt-10">Order for Later</button>
                </>
                }

                { this.state.pre_order &&
                <>
                <p>Select delivery date</p>
                <input className="mt-10" name="date" required="true" type='date' onChange={this.handleChange} />
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