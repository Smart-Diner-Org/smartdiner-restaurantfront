import React , {Component} from 'react'
import BagItemList from './BagItemList';
import GetLocation from './GetLocation'
import { getDistance } from 'geolib';
import Geocode from "react-geocode";


import Logo from './assets/images/bag.png'

class Bag extends Component{  
    constructor(props){
        super(props);
        this.state={
            address:null,
            lat:null,
            long:null,
            boundary:false,
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
            this.setState({boundary:true})
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
                this.setState({boundary:true})
            }
            },
            error => {
              console.error(error);
            }
          );
        event.preventDefault()
    }









    
render(){
        return(
            // <Modal backdrop="static">
            <div className="bag-component">
                <header className="bag-header">
                    <div className="row">
                        <div className="col-auto mr-auto">
                        <button className="bag-close" onClick={this.props.closePopup}>X</button>
                        </div>
                        <div className="col-auto" >
                        <label >Your PaperBag</label>
                        <img src={Logo} alt={Logo}/>
                        </div>
                    </div>
                </header>

                {!this.state.boundary ?
                <GetLocation getCoords={this.getCoords} handleChange={this.handleChange} checkDistance={this.checkDistance}/>
                :
                <>
                <BagItemList 
                            items={this.props.items}
                            changequantity={this.props.changequantity}
                            
                        />

                <footer>
                    <div className='foot-content'>
                        <span className="span-left">Powered by <a href="">Smart Diner</a></span>
                        <span className="span-right"><a href='#'>Terms and Conditions</a>
                        <a href='#'>Contact Us</a></span>
                    </div>
                </footer>
                </>

                }
            </div>
            
        );
    }
}

export default Bag;