import React from "react"

class GetAddress extends React.Component{
    render(){
        return(
            <div>
            <div className="address mb-20 mt-30">                   
                        <div className="row"style={{marginLeft:"90%"}}>
                            <button className="cancel">X</button>
                        </div>
                        <div className="row ">
                            <div className="col-12">
                                {/* <h4 >Name</h4><br/> */}
                                <label >{this.props.customer_detail.address_one}</label><br/>
                                <label >{this.props.customer_detail.address_two}</label><br/>
                                <label >{this.props.customer_detail.city.name}</label><br/>
                                <label >{this.props.customer_detail.state.name}</label>
                            </div>
                            
                        </div>
                        <div className="row" style={{marginLeft:"70%"}}>
                            <div className="col" >
                            <button className="edit">Edit</button>
                            </div>
                            
                        </div>
                </div>
                 <div className="address mb-20 mt-30" >                   
                 <div className="row"style={{marginLeft:"90%"}}>
                     <button className="cancel">X</button>
                 </div>
                 <div className="row ">
                     <div className="col-12">
                         <h4 >Name</h4><br/>
                         <label >Address line 1</label><br/>
                         <label >Address line 2</label><br/>
                         <label >Street,city</label><br/>
                         <label >city-pincode</label>
                     </div>
                     
                 </div>
                 <div className="row" style={{marginLeft:"70%"}}>
                     <div className="col" >
                     <button className="edit">Edit</button>
                     </div>
                     
                 </div>
         </div>
         <div className="address mb-20 mt-30">                   
                        <div className="row"style={{marginLeft:"90%"}}>
                            <button className="cancel">X</button>
                        </div>
                        <div className="row ">
                            <div className="col-12">
                                <h4 >Name</h4><br/>
                                <label >Address line 1</label><br/>
                                <label >Address line 2</label><br/>
                                <label >Street,city</label><br/>
                                <label >city-pincode</label>
                            </div>
                            
                        </div>
                        <div className="row" style={{marginLeft:"70%"}}>
                            <div className="col" >
                            <button className="edit">Edit</button>
                            </div>
                            
                        </div>
                </div>
                </div>
        )
    }
}

export default GetAddress;