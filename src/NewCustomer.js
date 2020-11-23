import React , {Component} from "react"


class NewCustomer extends Component{
    constructor(props){
        super();
        

    }

render(){
    return(
        <div className="new-customer ">
            <form onSubmit={this.props.addCustomer}>
                <input autoFocus className="mt-10" type="text" name="name" placeholder="Enter your Name" onChange={this.props.handleChange} required="required"/>
                <input className=" mt-10" type="text" name="email" placeholder="Enter your mailID" onChange={this.props.handleChange} required="required"/>
                <input className=" mt-10" type="text" name="addressOne" placeholder="Adress Line 1" onChange={this.props.handleChange} required="required"/>
                {localStorage.getItem("LocationplaceID") === "1" && <label style={{fontSize:"18px"}} className="mt-10">{this.props.addressTwo}</label>}
                {localStorage.getItem("LocationplaceID") === "2" && (
                <select className="menu-dropdown">
                  {localStorage
                    .getItem("DeliveryLocations")
                    .split(",")
                    .map((location, index) => {
                      return <option>{location}</option>;
                    })}
                </select>
              )}
                {<small className="error-message" style={{color:"#e22a28"}}>{this.props.errorMessage}</small> || <small className="error-message" style={{color:"green"}}>{this.props.errorMessage}</small> }

                {/* <input className=" mt-10" type="text" name="addressLine2" placeholder="Adress Line 2"/>
                <div className="row-12 mt-30" style={{display:"flex",flexDirection:"row"}} >
                    <input className="col-5 mr-5" type="text" name="city" placeholder="City"/>
                    <input className="col-5 " type="text" name="state" placeholder="State"/>
                </div> */}
                <div className="mt-30" >
                    {/* <a href="#" style={{marginRight:"35%"}}>Get Location</a> */}
                    <button type="submit" className="new-address">Add address</button>
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