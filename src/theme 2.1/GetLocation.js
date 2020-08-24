import React, {Component} from "react"
import { geolocated } from "react-geolocated";
import Geocode from "react-geocode";
import LocationSearchInput from "./LocationSearchInput"
import './map.css'

Geocode.setApiKey("AIzaSyDORUh0mGaVxDgP2ZojKCqVmpXnVOZfAS8");
// Geocode.enableDebug();


class GetLocation extends Component{
    
    // lat: 13.093410, lng: 77.399053


    render(){
        
        return (
            
            <div className="ask-location">
                <div className="row mb-10">
                <p className="col-11">Give Location for Delivery Purposes</p>
                <button className="col-1 p-0" style={{backgroundColor:"transparent",color:"#e22a28" }} onClick={this.props.close}>X</button>

                </div>
                <button className="crtlocbtn hide" onClick={this.props.checkDistance}><i class="lni lni-map-marker mr-20"></i>Pick My Location</button>
                {/* <button  onClick={this.props.gotocart}>Go to Cart</button>  */}
                <LocationSearchInput
                address = {this.props.address}
                PAhandleChange = {this.props.PAhandleChange}
                handleSelect = {this.props.handleSelect}/>
                {/* <button onClick={this.props.contshpng}>Continue Shopping</button> */}
                {this.props.boundary &&
                <div className="d-flex align-items-center continue-labels mt-20">
                    <label className="pr-20 d-flex align-items-center" onClick={this.props.contshpng}>Continue Shopping <i class="lni lni-arrow-right ml-1"></i></label> 
                    <label className="pl-20 d-flex align-items-center" onClick={this.props.gotocart}>Go to Cart <i class="lni lni-arrow-right ml-1"></i></label>
                </div>}
                </div>   
            
        );
    
    }
}
export default geolocated({
    positionOptions: {
        enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
})(GetLocation)