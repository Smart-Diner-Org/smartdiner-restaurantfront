import React from "react"

class GetOTP extends React.Component{
    render(){
        return(
            <div className="mobile-verification ">
                <input  type="text" class="form-control" name="mobile" placeholder="Enter Mobile Number" onChange={this.handleChange}/>
                <div className="row mt-30">
                    <ul className="form-goup col-8 OTP-verification">
                        <li><input type="text"/> </li>
                        <li><input type="text"/> </li>
                        <li><input type="text"/> </li>
                        <li><input type="text"/> </li>
                        
                    </ul>
                    <a href="#" className="col-4" style={{marginTop:"20px"}}>Resend OTP</a>
                </div>
            </div>
        )  
    }
}

export default GetOTP;