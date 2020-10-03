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
import Description from './Description'
import MapLocation from './MapLocation'
import Geocode from "react-geocode";
import GetLocation from './GetLocation'
import { getDistance } from 'geolib';
import {
    geocodeByAddress,
    getLatLng,
  } from 'react-places-autocomplete';
import ReactGA from 'react-ga';


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
        showPopup: true,
        togglePopup : false,
        refpostcode : "",
        refregion : null,
        selectedItem: "",
        bagItems: new Array(),

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
    this.gotocart = this.gotocart.bind(this)
    this.contshpng = this.contshpng.bind(this)
    this.editlocation = this.editlocation.bind(this)
    this.decTotal = this.decTotal.bind(this)
    this.setSelectedItem  = this.setSelectedItem.bind(this)
    this.populateQuantity = this.populateQuantity.bind(this)

}

decTotal(){
    let oldTotal = this.state.total;
    let newTotal = oldTotal-1;
    sessionStorage.setItem("total",newTotal)
    this.setState({total:newTotal})
    
}

async componentDidMount() {  //API call to get data from backend
    try{

        await axios.get(`${process.env.REACT_APP_BASE_URL}/before_login/restaurant/get_full_details`)
      .then(res => {
        const data = res.data;
        // console.log(data)
        this.getItems(data)
        this.setState({
                restaurant_info:data.restaurant,
                refpostcode : (this.state.restaurantBranch[0].delivery_postal_codes ? (this.state.restaurantBranch[0].delivery_postal_codes).split(",") : null),
                refregion : (this.state.restaurantBranch[0].delivery_locations ? (this.state.restaurantBranch[0].delivery_locations).split(",") : null),
                isLoaded: true,
            });     
            
            if(sessionStorage.getItem("items") && sessionStorage.getItem("boundary")){
                this.setState({
                    items : JSON.parse(sessionStorage.getItem("items")),
                    boundary : Boolean(sessionStorage.getItem("boundary")),
                    total : sessionStorage.getItem('total'),
                    showPopup : false
                })
            }
            if(data.restaurant.restaurant_website_detail.ga_tracking_id){
                ReactGA.initialize(`${data.restaurant.restaurant_website_detail.ga_tracking_id}`);
                sessionStorage.setItem("GA",data.restaurant.restaurant_website_detail.ga_tracking_id)
                ReactGA.pageview('/homepage');
            }

            const favicon = document.getElementById("favicon");
            favicon.href = this.state.restaurant_info.logo;
            document.title = this.state.restaurant_info.name;
            const description = document.getElementById("description");
            description.content = this.state.restaurant_info.restaurant_website_detail.page_description ? this.state.restaurant_info.restaurant_website_detail.page_description : this.state.restaurant_info.name;
            sessionStorage.setItem("logo",this.state.restaurant_info.logo)
            sessionStorage.setItem("title",this.state.restaurant_info.name)
            // console.log(this.state.items)
      })
    }catch(error){
        console.log(error)
        alert('Not able to fetch data')
    }
  }

  getItems(data){  //Storing API data into our state   
    let restaurantDetails = [];
    (data.restaurant.restaurant_branches).map((item) =>{
        restaurantDetails.push(item)
    })
     this.setState({restaurantBranch:restaurantDetails})
    let items = [];
    
    (data.menus).map((item)=>{
        items.push(item)})
    this.setState({items:items})

    this.getCategories(this.state.items);
    this.addDiscountQuantity(this.state.items);
  }
 
  setSelectedItem(selectedMenuPriceList){
        this.setState({selectedItem:selectedMenuPriceList})
  }


populateQuantity(item){
    var tempObj = new Object();
    var originalPrice = document.getElementById('original_price_'+item.id).value;
    var discountPrice = null;
    if(document.getElementById('discounted_price_'+item.id)){
        discountPrice = document.getElementById('discounted_price_'+item.id).value;
    }
    item['originalPrice'] = originalPrice;
    item['discountPrice'] = discountPrice;
    if(!tempObj[item['customKey']])
        tempObj[item['customKey']] = item;
    tempObj[item['customKey']]['quantity'] = 1;
    return tempObj;
}

changequantity(sourceItem, value) {   //this is for adding/increasing items to cart
    var self = this;
    function handleNewItem(argument) {
        switch(value){
            case 1:
                sourceItem.quantity = 1;
                oldArrayItems.push(self.populateQuantity(item));
                break;
            case -1:
                break;
        }
        
    }
    var item = {};
    item = Object.assign({}, sourceItem);
    if(document.getElementById("price_list_" + item.id)){
        var dropDownEle = document.getElementById("price_list_" + item.id);
        var selectedMenuQuantityMeasurePriceId = dropDownEle.options[dropDownEle.selectedIndex].id;
    }
    else{
        alert("something Wrong. Price list is not populating");
        return;
    }
    item['selectedMenuQuantityMeasurePriceId'] = selectedMenuQuantityMeasurePriceId;
    var customKey = item.id + '_' + item.selectedMenuQuantityMeasurePriceId;
    item['customKey'] = customKey;

    let oldArrayItems = this.state.bagItems;
    if(oldArrayItems.length == 0)
        handleNewItem();
    else{
        var found = false;
        for (var i=0; i < oldArrayItems.length; i++){
            var tempObj_2 = oldArrayItems[i];
            if(tempObj_2[item['customKey']]){
                if(!tempObj_2[item['customKey']]['quantity'])
                    tempObj_2[item['customKey']]['quantity'] = 0;
                
                switch(value){
                    case 1:
                        tempObj_2[item['customKey']]['quantity'] += 1;
                        break;
                    case -1:
                        if(tempObj_2[item['customKey']]['quantity'] > 0)
                            tempObj_2[item['customKey']]['quantity'] -= 1;
                        if(tempObj_2[item['customKey']]['quantity'] <= 0)
                            oldArrayItems.splice(i, 1);
                        break;
                }
                sourceItem.quantity = tempObj_2[item['customKey']]['quantity'];
                found = true;
            }
        }
        if(!found)
            handleNewItem();
    }

    this.setState({bagItems:oldArrayItems})
    console.log("bag items ......");
    console.log(this.state.bagItems)
    


    // this.setState( prevState => {
    //     let noOfSelectedItems = this.state.total
    //     let newItemsStateArray =  prevState.items;
        
    //     if(newItemsStateArray[index].quantity == 0 && value==-1){
    //         return
    //     }

    //     if (newItemsStateArray[index].quantity === 0 ){
    //         if(value==1){
    //             noOfSelectedItems++}
    //         newItemsStateArray[index].quantity = newItemsStateArray[index].quantity + 1;
    //         sessionStorage.setItem('items',JSON.stringify( newItemsStateArray))
    //         sessionStorage.setItem('total',noOfSelectedItems)
        
    //         return {
    //             quantity: newItemsStateArray,
    //             total:noOfSelectedItems
    //         }

    //     }
    //     if (newItemsStateArray[index].quantity >= 1 ){
    //         newItemsStateArray[index].quantity = newItemsStateArray[index].quantity + value;
    //         if(value==-1 && (newItemsStateArray[index].quantity==0)){
    //             noOfSelectedItems--
    //         }

    //     }
    //     sessionStorage.setItem('items',JSON.stringify( newItemsStateArray))
    //     sessionStorage.setItem('total',noOfSelectedItems)
    //     return {
    //         items: newItemsStateArray,
    //         total:noOfSelectedItems

    //     }
    // })
}

addDiscountQuantity(itemsArray){  //discountPrice and quantity elements to Items Array 
    
    this.setState( prevState => {
        let newItemsStateArray =  [];
        itemsArray.map((item,index)=>{
            newItemsStateArray.push({...item,quantity:0})   
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
            togglePopup: !this.state.togglePopup
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
                    latitude: Number(this.state.restaurantBranch[0].lat),
                    longitude: Number(this.state.restaurantBranch[0].long)
                },1)
            );
            let address;
            Geocode.fromLatLng(position.coords.latitude, position.coords.longitude).then(
                response => {
                    address = response.results[0];
                    this.setState({ postalcode : address.address_components[(address.address_components).length - 1].long_name})
                    this.setState({ address:address.formatted_address });

                    sessionStorage.setItem('lat',position.coords.latitude)
                    sessionStorage.setItem('long',position.coords.longitude)
                    sessionStorage.setItem('address',this.state.address)

                    const distanceLimit = Number(this.state.restaurantBranch[0].delivery_distance)
                    distance = Math.abs(distance/1000 );
                    let withInDistance = false;
                    if(distance<=distanceLimit){
                        withInDistance = true;
                    }else{
                        alert("Sorry for our Incovenience.... You're out of our boundary")
                        this.setState({boundary:false})
                    }
                    
                    if(withInDistance && this.state.refregion){
                        let flag;
                        const addr = this.state.refregion.map(item => item.toLowerCase())
                        for (let i=0; i< (address.address_components).length ;i++){
                            if( addr.includes(address.address_components[i].long_name.toLowerCase()) || addr.includes(address.address_components[i].short_name.toLowerCase())){
                                    flag=true
                                    break
                            }
                        }
                        if(withInDistance<=distanceLimit && (this.state.refpostcode.includes(Number(this.state.postalcode)) || flag)){
                            alert("Welcome you sir... we are happy to serve you")
                            this.setState({boundary:true})
                            sessionStorage.setItem("boundary",true)
                        }
                    }else if(withInDistance){
                        alert("Welcome you sir... we are happy to serve you")
                        this.setState({boundary:true})
                        sessionStorage.setItem("boundary",true)
                    }
               },
                error => {
                  console.error(error);
                }
              );
            },

        () => {
            alert('Please allow location access to determine your location');
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
        this.setState({ postalcode : results[0].address_components[(results[0].address_components).length - 1].long_name})
        
        getLatLng(results[0]).then(latLng => {
            distance = ( getDistance({
                latitude: latLng.lat ,
            longitude: latLng.lng},
             {
                latitude: Number(this.state.restaurantBranch[0].lat),
                longitude: Number(this.state.restaurantBranch[0].long)
            },1))
            
            sessionStorage.setItem('lat',latLng.lat)
            sessionStorage.setItem('long',latLng.lng)
            sessionStorage.setItem('address',address)
            
            const distanceLimit = Number(this.state.restaurantBranch[0].delivery_distance)
            distance = Math.abs(distance/1000 );
            let withInDistance = false;
            if(distance<=distanceLimit){
                withInDistance = true;
            }else{
                alert("Sorry for our Incovenience.... You're out of our boundary")
                this.setState({boundary:false})
            }
            
            if(withInDistance && this.state.refregion){
                let flag;
                for (let i=0; i< (results[0].address_components).length ;i++){
                    if( address.includes(results[0].address_components[i].long_name) || address.includes(results[0].address_components[i].short_name)){
                        for (var ss = this.state.refregion.length - 1; ss >= 0; ss--) {
                            if(address.toLowerCase().includes(this.state.refregion[ss].toLowerCase() )){
                                flag=true
                                break
                            }
                        }
                    }
                }
                if((this.state.refpostcode.includes(Number(this.state.postalcode)) || flag)){
                    alert("Welcome you sir... we are happy to serve you")
                    this.setState({boundary:true})
                    sessionStorage.setItem("boundary",true)
                }else{
                    alert("Sorry for our Incovenience.... You're out of our boundary")
                    this.setState({boundary:false})
                }

                }else if(withInDistance){
                    alert("Welcome you sir... we are happy to serve you")
                    this.setState({boundary:true})
                    sessionStorage.setItem("boundary",true)
                }
            

        })})
      .catch(error => console.error('Error', error));
    //   address = null
  };

  close(){

    if(this.state.boundary === true){
        this.setState({showPopup:false})
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


  gotocart(event){
        this.setState({showPopup:false})
        this.togglePopup()
  }

  contshpng(event){
        this.setState({showPopup:false})
     
  }
  
  editlocation(event){
    this.togglePopup()
    this.setState({showPopup:true})
    sessionStorage.removeItem("boundary")
    this.setState({boundary:false})
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

        { this.state.total !== 0 && this.state.showPopup  &&   !sessionStorage.getItem('boundary') &&
        <GetLocation 
        address = {this.state.address}
        getCoords={this.getCoords} 
        handleChange={this.handleChange} 
        checkDistance={this.checkDistance}
        PAhandleChange = {this.PAhandleChange}
        handleSelect = {this.handleSelect}
        close = {this.close}
        pickMyLocation = {this.state.restaurant_info.restaurant_website_detail.is_pick_my_location_enabled}
        boundary = {this.state.boundary}
        gotocart = {this.gotocart}
        contshpng = {this.contshpng}
        />}
        
        {/* <div style={(this.state.total == 1) && this.state.showpopup && this.state.boundary===false?{filter: 'blur(10px)'}:{}}> */}
        <div>
             { this.state.togglePopup && !this.state.showPopup && this.state.total !== 0 && sessionStorage.getItem("boundary") &&
         <Bag 
         closePopup={this.togglePopup }  
         changequantity={this.changequantity}
         items={this.state.items}
         total={this.state.total}
         quantity={this.state.quantity}
         editlocation = {this.editlocation}
         decTotal={this.decTotal}
         restaurant_website_detail = {this.state.restaurant_info.restaurant_website_detail}
         />}

        
        
         <HeadComponent
         togglePopup={this.togglePopup}
         total={this.state.total}
         logo={this.state.restaurant_info.logo}
         restaurantName={this.state.restaurant_info.name}
         />


         <div style={this.state.togglePopup && !this.state.showPopup && this.state.total && sessionStorage.getItem("boundary") !== 0?{pointerEvents: 'none',filter: 'blur(10px)',position:"fixed"}:{}}>

         <Slider slider_images={this.state.restaurant_info.restaurant_website_detail.slider_images}/>
   <Description delivery_locations={this.state.restaurantBranch[0].delivery_locations} preOrder={this.state.restaurant_info.restaurant_website_detail.is_pre_booking_enabled}/> 


         <Product 
         setType={this.setType}
         changequantity={this.changequantity}
         items={this.state.items}
         setSelectedItem = {this.setSelectedItem}
         selectedType={this.state.selectedType}
         categoryArray={this.state.categoryArray}
         />
       <About
         about = {this.state.restaurant_info.about}
          timings={this.state.restaurantBranch[0].timings} 
         aboutImage={this.state.restaurant_info.restaurant_website_detail.about_image}/> 
         
 <MapLocation  restaurantName={this.state.restaurant_info.name} address={this.state.restaurantBranch[0].address}/> 
         <Contact  />
         <ScrollToTop />
        <FootComponent 
         links={this.state.restaurant_info.restaurant_detail} 
         restaurantName={this.state.restaurant_info.name} 
         address={this.state.restaurantBranch[0].address} 
         email={this.state.restaurantBranch[0].email}
         contact_number ={this.state.restaurantBranch[0].contact_number}
         /> 
         </div>
         </div>
        </div>
    );
  }
}
}

export default NewHome;