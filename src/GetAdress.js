import React from "react"

class GetAdress extends React.Component{
    render(){
        return(
            <div className="adress mb-20 mt-20">
                <div className="container">
                    <div className="row">
                        <div className="row">
                            <button className="cancel">X</button>
                        </div>
                        <div className="row ">
                            <h4 className="col-12">Name</h4>
                            <label className="col-12">Adress line 1</label>
                            <label className="col-12">Adress line 2</label>
                            <label className="col-12">Street,city</label>
                            <label className="col-12">city-pincode</label>
                        </div>
                        <div className="row">
                            <button className="edit">Edit</button>
                        </div>
                   </div> 
                </div>
            </div>
        )
    }
}

export default GetAdress;