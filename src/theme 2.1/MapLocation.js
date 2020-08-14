import React, {Component} from "react";
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
// import axios from "axios";

class MapLocation extends Component{
    // async getLocation(){
    //     try{
    //         await axios.get(`${this.props.mapUrl}`)
    //         .then(res =>{
    //             console.log(res.url)
    //         })

    //     }
    //     catch(error){
    //         console.log(error)
    //     }
    // }

    render()
    { 
        // this.getLocation()
        return(
            <section id="location" class="pt-125 pb-130">
            <div className="container" >
                <div className="google-map ">
                    <Map google={this.props.google} zoom={8} initialCenter={{ lat: 13.093410, lng: 77.399053}}>
                        <Marker position={{ lat: 13.093410, lng: 77.399053}} />
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