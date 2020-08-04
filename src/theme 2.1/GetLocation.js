import React, {Component} from "react"
import { geolocated } from "react-geolocated";
import { getDistance } from 'geolib';
import GoogleMapReact from 'google-map-react';

const google = window.google;
let geocoder = new google.maps.Geocoder();

class GetLocation extends Component{
    constructor(props){
        super(props);
        this.state={
            address:null,
            lat:null,
            long:null,
        }
        this.checkDistance =  this.checkDistance.bind(this)
        this.getCoords = this.getCoords.bind(this)
    }
  
    checkDistance(){
        let distance = null;
        navigator.geolocation.getCurrentPosition(
            (position) => {
                    distance = ( getDistance({
                        latitude: position.coords.latitude,
                    longitude:position.coords.longitude},
                     {
                        latitude: 12.972442,
                        longitude: 77.580643 
                    },1)
                );
            },

            () => {
                alert('Position could not be determined.');
            }
        );
    }

    getCoords(event){
        let location = null;
        this.setState({address: event.target.value})
        geocoder.geocode({'address': this.state.address}, function(results, status) {
            if (status == 'OK') {
              location = results.geometry.location
              console.log(location)
              }
             else {
              alert('Geocode was not successfull because ' + status)
            }
        })
    }

    // lat: 13.093410, lng: 77.399053


    

    render(){
        this.checkDistance()
        return !this.props.isGeolocationAvailable ? (
            <div>Your browser does not support Geolocation</div>
        ) : !this.props.isGeolocationEnabled ? (
            <div>Geolocation is not enabled</div>
        ) : this.props.coords ?(
            <div>
                <form onSubmit={this.getCoords()}>
                <input type="text" placeholder="Enter your Location"/>
                <input type="submit" />
                </form>
                
            </div>
        ):(
            <div>
                {/* { console.log("getting location")} */}
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