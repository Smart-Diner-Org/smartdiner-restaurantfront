import React, {Component} from "react";
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

class MapLocation extends Component{
    render(){
        return(
            <div className="google-map">
                <div className="container ">
                    <Map google={this.props.google} zoom={8} initialCenter={{ lat: 13.093410, lng: 77.399053}}>
                        <Marker position={{ lat: 13.093410, lng: 77.399053}} />
                    </Map>
                </div>
            </div>
        )
    }

}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyC9XlbF_g7dah3jXgGg2qrSln43Eu2tQ0M'
  })(MapLocation);