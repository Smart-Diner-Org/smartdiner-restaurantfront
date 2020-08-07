import React, {Component} from "react"
import { geolocated } from "react-geolocated";
import { getDistance } from 'geolib';
import Geocode from "react-geocode";

Geocode.setApiKey("AIzaSyDORUh0mGaVxDgP2ZojKCqVmpXnVOZfAS8");
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
                },

            () => {
                alert('Position could not be determined.');
            }
        );
        if(distance>=10000){
            alert("Sorry for our Incovenience.... You're out of our boundary")
        }else{
            alert("Welcome you sir... we are happy to serve you")
        }
        
    }

    handleChange(event) {
        this.setState({address: event.target.value});
      }

    getCoords(event){
        console.log(`${this.state.address}`)
        Geocode.fromAddress(`${this.state.address}`,null,null,'bangalore').then(
            response => {
            const { lat, lng } = response.results[0].geometry.location;
            
            let distance = ( getDistance({
                latitude:lat,
                longitude: lng},
             {
                latitude: 12.988061,
                longitude: 77.576988
            },1))

            console.log(distance)

            if(distance>=10000){
                alert("Sorry for our Incovenience.... You're out of our boundary")
            }else{
                alert("Welcome you sir... we are happy to serve you")
            }


            },
            error => {
              console.error(error);
            }
          );
        event.preventDefault()
    }

    // lat: 13.093410, lng: 77.399053


    

    render(){
        
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
                <button onClick={this.checkDistance}>getCurrentPosition</button>
            </div>
        ):(
            <div>
                { console.log("getting location")}
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