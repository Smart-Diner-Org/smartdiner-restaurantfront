import React, {Component} from "react";
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
// import axios from "axios";

class MapLocation extends Component{
    
    render()
    { 
        // this.getLocation()
        return(
            <section id="location" class="pt-50 pb-10">
            <div className="container" >
                <div className="google-map ">
                    <Map google={this.props.google} zoom={15} initialCenter={{ lat: this.props.lat, lng: this.props.long}}>
                        <Marker position={{ lat: this.props.lat , lng: this.props.long} }/>
                    </Map>
                </div>
            </div>
            </section>
        )
    }

}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyDORUh0mGaVxDgP2ZojKCqVmpXnVOZfAS8'
  })(MapLocation);