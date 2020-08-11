import React, { Component } from 'react';
import HeadComponent from './HeadComponent'
import Slider from './Slider'
import About from './About'
import Contact from './Contact'
import FootComponent from './FootComponent'
import Product from './Product';
import ScrollToTop from './ScrollToTop'
import Bag from './Bag'
import axios from 'axios';
import MapLocation from './MapLocation'
import Geocode from "react-geocode";
import GetLocation from './GetLocation'
import { getDistance } from 'geolib';
import {
    geocodeByAddress,
    getLatLng,
  } from 'react-places-autocomplete';




class NewHome extends Component {
  constructor(props){
    super(props);
    this.state = {
        selectedType: "",
        items:[{}],
        restaurant_info:[{}],
        restaurantBranch: [{}],
        isLoaded: false,
        total : 0,
        address:"",
        boundary: false,
        postalcode : "",
        lat : '',
        long : '',
        showpopup: true,
        refpostcode : [641012 , 641402, 641401, 641044],
        refregion : ['gandhipuram', 'sulur','kanagaiyampalayam', 'sidhapudur']

    };
    this.changequantity = this.changequantity.bind(this)
    this.setType = this.setType.bind(this)
    this.togglePopup = this.togglePopup.bind(this)
    this.getItems = this.getItems.bind(this)
    this.getCategories = this.getCategories.bind(this)
    this.addDiscountQuantity = this.addDiscountQuantity.bind(this)
    this.categoryArray = []
    this.checkDistance =  this.checkDistance.bind(this)
    this.PAhandleChange = this.PAhandleChange.bind(this)
    this.handleSelect = this.handleSelect.bind(this)
    this.close = this.close.bind(this)

}

async componentDidMount() {  //API call to get data from backend
    try{
        await axios.get(`./dbapi.json`)
      .then(res => {
        const data = res.data;
        this.getItems(data.restaurant.restaurant_branches)
        this.setState({
             restaurant_info:data.restaurant,
             isLoaded: true,
            });     
           
      })
    }catch(error){
        console.log(error)
        alert('Not able to fetch data')
    }
  }

  getItems(data){  //Storing API data into our state
    let restaurantDetails = [];
    let items = [];
    data.map((item) =>{
        restaurantDetails.push(item)
    })
    this.setState({restaurantBranch:restaurantDetails});

    this.state.restaurantBranch.map((item)=>{
        items.push(...item.restaurant_branch_menu)
    })

    this.setState({items:items})

    this.getCategories(this.state.items);
    this.addDiscountQuantity(this.state.items);
  }
 



changequantity(index, value) {   //this is for adding/increasing items to cart
    
    this.setState( prevState => {
        let noOfSelectedItems = this.state.total
        let newItemsStateArray =  prevState.items;

        if(newItemsStateArray[index].quantity == 0 && value==-1){
            return
        }

        if (newItemsStateArray[index].quantity === 0 ){
            if(value==1){
                noOfSelectedItems++}
            newItemsStateArray[index].quantity = newItemsStateArray[index].quantity + 1;
            return {
                quantity: newItemsStateArray,
                total:noOfSelectedItems
            }

        }
        if (newItemsStateArray[index].quantity >= 1 ){
            newItemsStateArray[index].quantity = newItemsStateArray[index].quantity + value;
            if(value==-1 && (newItemsStateArray[index].quantity==0)){
                noOfSelectedItems--
            }

        }
        return {
            items: newItemsStateArray,
            total:noOfSelectedItems

        }
    })
}

addDiscountQuantity(itemsArray){  //discountPrice and quantity elements to Items Array 
    this.setState( prevState => {
        let newItemsStateArray =  [];
        itemsArray.map((item,index)=>{
         newItemsStateArray.push({...item,quantity:0,discountPrice:(item.price-(item.price*(item.discount/100)))})   
        })
        return {
            items: newItemsStateArray
        }
})
}

setType(type) {  //to display respective items for menu items selected
    this.setState(prevState =>{
        return {
            selectedType:type
        }
    })
}
  
togglePopup() {  //to open and close the cart(bag) component
        this.setState({
            showPopup: !this.state.showPopup
          });
    }

getCategories(items){  //fetching categories from itemsarray
    let categoryArray = []
    let indexes = [];
    items.map((item)=>{
        if(item.category){
            if(indexes.indexOf(item.category.name)=== -1){
                indexes.push(item.category.name);
                categoryArray.push(item.category);
            }
        }
        
    })
    
    this.setState({categoryArray:categoryArray});
    
}


checkDistance(){
    let distance;
    navigator.geolocation.getCurrentPosition(
        (position) => {

                distance = ( getDistance({
                    latitude: position.coords.latitude,
                longitude:position.coords.longitude},
                 {
                    latitude: 12.988061,
                    longitude: 77.576988
                },1)
            );
            let address;
            Geocode.fromLatLng(position.coords.latitude, position.coords.longitude).then(
                response => {
                    address = response.results[0];
                    console.log(address);
                    this.setState({ postalcode : address.address_components[(address.address_components).length - 1].long_name})
                    this.setState({ address:address.formatted_address });
                    localStorage.setItem('address',this.state.address)
                    let flag;
            for (let i=0; i< (address.address_components).length ;i++){
              for (var ss = this.state.refregion.length - 1; ss >= 0; ss--) {
                if(address.formatted_address.includes(this.state.refregion[ss].toLowerCase())){
                    flag=true
                    console.log('im here')
                    break
                }
              }
                // if(address.formatted_address.includes(this.state.refregion)){
                //     flag=true
                //     console.log('im here')
                //     break
                // }
            }
                if(distance<=9999999999 && (this.state.refpostcode.includes(Number(this.state.postalcode)) || flag)){
                    alert("Welcome you sir... we are happy to serve you")
                    this.setState({boundary:true})
                }else{
                    alert("Sorry for our Incovenience.... You're out of our boundary")
    
                }
                        
               },
                error => {
                  console.error(error);
                }
              );
            },

        () => {
            alert('Position could not be determined.');
        }
    );
    
    
}


// particular for LocationSeacrhinput

PAhandleChange = address => {
    this.setState({ address });
  };

  handleSelect = address => {
    let distance ;
    geocodeByAddress(address)
      .then(results => {
          console.log(results[0])
        this.setState({ postalcode : results[0].address_components[(results[0].address_components).length - 1].long_name})
        
        getLatLng(results[0]).then(latLng => {
            distance = ( getDistance({
                latitude: latLng.lat ,
            longitude: latLng.lng},
             {
                latitude: 12.988061,
                longitude: 77.576988
            },1))
            let flag;
            console.log(address)
            localStorage.setItem('address',address)
            for (let i=0; i< (results[0].address_components).length ;i++){
                console.log(results[0].address_components[i].long_name)
                if( address.includes(results[0].address_components[i].long_name) || address.includes(results[0].address_components[i].short_name)){
                  for (var ss = this.state.refregion.length - 1; ss >= 0; ss--) {
                    if(address.toLowerCase().includes(this.state.refregion[ss].toLowerCase() )){

                        flag=true
                        console.log('im here')
                        break
                    }
                  }

            }
        }
            console.log(flag)
            if(distance<=999999 && (this.state.refpostcode.includes(Number(this.state.postalcode)) || flag)){
                alert("Welcome you sir... we are happy to serve you")
                this.setState({boundary:true})
            }else{
                alert("Sorry for our Incovenience.... You're out of our boundary")

            }

        })})
      .catch(error => console.error('Error', error));
  };

  close(){

    if(this.state.boundary === true){
        this.setState({showpopup:false})
  }
  else{
    

    this.setState(prevState=>{
        let newArray = prevState.items
        newArray.map(a=>a.quantity=0)
        return {items:newArray }

    })
    this.setState({total:0})
  }
    

  }




// ends here



  render() {
    const { isLoaded } = this.state;
    if (!isLoaded) {
      return (
        <div>  
            <div className="preloader">
                <div className="spin">
                    <div className="cube1"></div>
                    <div className="cube2"></div>
                </div>
            </div>
        </div>);
    } else {
    return (
        <div >

        { this.state.total !== 0 && this.state.showpopup  &&
        <GetLocation 
        address = {this.state.address}
        getCoords={this.getCoords} 
        handleChange={this.handleChange} 
        checkDistance={this.checkDistance}
        PAhandleChange = {this.PAhandleChange}
        handleSelect = {this.handleSelect}
        close = {this.close}
        />}
        
        {/* <div style={(this.state.total == 1) && this.state.showpopup && this.state.boundary===false?{filter: 'blur(10px)'}:{}}> */}
        <div>
             { this.state.showPopup && 
         <Bag 
         closePopup={this.togglePopup }  
         changequantity={this.changequantity}
         items={this.state.items}
         total={this.state.total}
         quantity={this.state.quantity}
         />}

        
        
         <HeadComponent
         togglePopup={this.togglePopup}
         total={this.state.total}
         logo={this.state.restaurant_info.logo}
         restaurantName={this.state.restaurant_info.name}
         />


         <div style={this.state.showPopup?{pointerEvents: 'none',filter: 'blur(10px)',position:"fixed"}:{}}>
         <Slider />
         <Product 
         setType={this.setType}
         changequantity={this.changequantity}
         items={this.state.items}
         selectedType={this.state.selectedType}
         categoryArray={this.state.categoryArray}
         />
         <About timings={this.state.restaurantBranch[0].timings} />
         <MapLocation mapUrl={this.state.restaurantBranch[0].g_location} />
         <Contact  />
         <ScrollToTop />
         <FootComponent links={this.state.restaurant_info.restaurant_detail} restaurantName={this.state.restaurant_info.name} address={this.state.restaurantBranch[0].address}/>
         </div>
         </div>
        </div>
    );
  }
}
}

export default NewHome;