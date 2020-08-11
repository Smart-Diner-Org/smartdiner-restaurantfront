import React, {Component} from "react"
import { geolocated } from "react-geolocated";
import Geocode from "react-geocode";
import LocationSearchInput from "./LocationSearchInput"
import './map.css'

Geocode.setApiKey("AIzaSyDORUh0mGaVxDgP2ZojKCqVmpXnVOZfAS8");
Geocode.enableDebug();


class GetLocation extends Component{
    
    // lat: 13.093410, lng: 77.399053


    render(){
        
        return (
            <div className="ask-location">
                <button onClick={this.props.close}>X</button>
                <button onClick={this.props.checkDistance}><i class="lni lni-map-marker mr-20"></i>Current Location</button>
                <label>{localStorage.getItem('address')}</label>
                <button>Continue Shopping</button>
                <button>Go to Cart</button>
                <LocationSearchInput
                address = {this.props.address}
                PAhandleChange = {this.props.PAhandleChange}
                handleSelect = {this.props.handleSelect}/>
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