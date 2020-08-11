import React , {Component} from "react"


class NewCustomer extends Component{
    constructor(props){
        super();
        this.state = {
            address : localStorage.getItem('address')

        }

    }

render(){
    return(
        <div className="new-customer mt-30">
            <form >
                <input autoFocus className="mt-10" type="text" name="name" placeholder="Enter your Name"/>
    <small className="error-message" style={{color:"#e22a28"}}>error</small>
                <input className=" mt-10" type="text" name="email" placeholder="Enter your mailID"/>
                <input className=" mt-10" type="text" name="addressLine1" placeholder="Adress Line 1"/>
                <label style={{fontSize:"18px"}} className="mt-10">{this.state.address}</label>
                {/* <input className=" mt-10" type="text" name="addressLine2" placeholder="Adress Line 2"/>
                <div className="row-12 mt-30" style={{display:"flex",flexDirection:"row"}} >
                    <input className="col-5 mr-5" type="text" name="city" placeholder="City"/>
                    <input className="col-5 " type="text" name="state" placeholder="State"/>
                </div> */}
                <div className="mt-30" >
                    <a href="#" style={{marginRight:"35%"}}>Get Location</a>
                    <button type="" className="new-address">Add address</button>
                </div> 
            </form>      
            <div className="mt-30">
                <label>*Give Location access for delivery</label>
            </div>  
        </div>
    )
}
}

export default NewCustomer;