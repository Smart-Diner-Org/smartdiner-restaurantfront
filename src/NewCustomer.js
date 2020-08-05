import React , {Component} from "react"


class NewCustomer extends Component{
    constructor(props){
        super();
    
}

render(){
    return(
        <div className="new-customer">
            <form>
                <div className="container mt-30">
                    <div className="row">
                        <input className="row-12 mb-10" type="text" name="name" placeholder="Enter your Name"/>
                        <input className="row-12 mb-10" type="text" name="email" placeholder="Enter your mailID"/>
                        <input className="row-12 mb-10" type="text" name="addressLine1" placeholder="Adress Line 1"/>
                        <input className="row-12 mb-10" type="text" name="addressLine2" placeholder="Adress Line 2"/>
                        <div className="row-12">
                            <input className="col-6 mb-10" type="text" name="country" placeholder="country"/>
                            <a className="col-6 mb-10" href="#">Get Location</a>
                        </div>
                        <div className="row-12 mb-10">
                            <input className="col-5 mr-5" type="text" name="city" placeholder="City"/>
                            <input className="col-5 " type="text" name="state" placeholder="State"/>
                        </div>
                        
                    </div>
                </div>
                
                
            </form>
        </div>
    )
}
}

export default NewCustomer;