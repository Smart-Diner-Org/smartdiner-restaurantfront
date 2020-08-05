import React from "react"

class GetOTP extends React.Component{
    render(){
        return(
            <div className="mobile-verification">
                <input className="row " type="text" class="row form-control" name="mobile" placeholder="Enter Mobile Number" onChange={this.handleChange}/>
                <div className="row mt-30">
                    <ul className="form-goup col-9 OTP-verification">
                        <li><input type="text"/> </li>
                        <li><input type="text"/> </li>
                        <li><input type="text"/> </li>
                        <li><input type="text"/> </li>
                        <li><input type="text"/> </li>
                        <li><input type="text"/> </li>
                    </ul>
                    <a href="#" className="col-3">Resend OTP</a>
                </div>
            </div>
        )
    }
}

export default GetOTP;