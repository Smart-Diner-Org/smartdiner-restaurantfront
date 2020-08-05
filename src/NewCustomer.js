import React , {Component} from "react"


class NewCustomer extends Component{
    constructor(props){
        super();
    
}

render(){
    return(
        <div className="new-customer mt-30">
           
                <div >
                        <input className="mb-10" type="text" name="name" placeholder="Enter your Name"/>
                        <input className=" mb-10" type="text" name="email" placeholder="Enter your mailID"/>
                        <input className=" mb-10" type="text" name="addressLine1" placeholder="Adress Line 1"/>
                        <input className=" mb-10" type="text" name="addressLine2" placeholder="Adress Line 2"/>
                        {/* <div className="row-12" style={{display:"flex",flexDirection:"row"}}>
                            <input className="col-5 mb-10" type="text" name="country" placeholder="country"/>
                            <a className="col-5 mb-10" href="#">Get Location</a>
                        </div> */}
                        <div className="row-12 mb-30" style={{display:"flex",flexDirection:"row"}} >
                            <input className="col-5 mr-5" type="text" name="city" placeholder="City"/>
                            <input className="col-5 " type="text" name="state" placeholder="State"/>
                        </div>
                        <div className="mt-30" >
                            <a href="#" style={{marginRight:"35%"}}>Get Location</a>
                            <button className="new-address">Add address</button>
                        </div>   
                        <div className="mt-30">
                            <a href="#">*Give Location access for delivery</a>
                        </div>
                    
                </div>
                
                
           
        </div>
    )
}
}

export default NewCustomer;