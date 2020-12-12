import React from "react"
import LogoImg from "./assets/images/SmartDiner_logo.png"
import './footer.css'



function Footer(props){

    return(

        <div className="smart-diner-footer" >
            <div className="container">
            <a href="https://smartdiner.co/" target="blank"><img src={LogoImg} style={{height:"30px"}} alt="Smart Diner"></img>
            <label >We digitalize your dining experince</label></a>
        </div>
        </div>
    )

}


export default Footer