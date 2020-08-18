import React from "react"
import LogoImg from "./SmartDiner_logo.png"
import './footer.css'



function Footer(props){

    return(

        <div className="smart-diner-footer mt-50" >
            <div className="container">
            <img src={LogoImg} style={{height:"30px"}} alt="Smart Diner"></img>
            <label >We digitalize your dining experince</label>
        </div>
        </div>
    )

}


export default Footer