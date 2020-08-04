import React, {Component} from "react"
import { geolocated } from "react-geolocated";
import { getDistance } from 'geolib';
import Geocode from "react-geocode";

Geocode.setApiKey("AIzaSyC9XlbF_g7dah3jXgGg2qrSln43Eu2tQ0M");
Geocode.enableDebug();

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
        this.handleChange = this.handleChange.bind(this);
    }
  
    checkDistance(){
        let distance = null;
        navigator.geolocation.getCurrentPosition(
            (position) => {
                    distance = ( getDistance({
                        latitude: position.coords.latitude,
                    longitude:position.coords.longitude},
                     {
                        latitude: 13.093410,
                        longitude: 77.399053
                    },1)
                );
                if(distance>=5000){
                    alert("Sorry for our Incovenience.... You're out of our boundary")
                }
                else{
                    alert("Welcome you sir... we are happy to serve you")
                }
            },

            () => {
                alert('Position could not be determined.');
            }
        );
    }

    handleChange(event) {
        this.setState({address: event.target.value});
      }

    getCoords(event){
        console.log(`${this.state.address}`)
        Geocode.fromAddress(`${this.state.address}`).then(
            response => {
              const { lat, lng } = response.results[0].geometry.location;
              console.log(`${lat} and ${lng}`);
            },
            error => {
              console.error(error);
            }
          );
        event.preventDefault()
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
                <form onSubmit={this.getCoords}>
                <input type="text" placeholder="Enter your Location" onChange={this.handleChange}/>
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
    apiKey: 'AIzaSyC9XlbF_g7dah3jXgGg2qrSln43Eu2tQ0M',
})(GetLocation)