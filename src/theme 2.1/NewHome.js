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
    };
    this.changequantity = this.changequantity.bind(this)
    this.setType = this.setType.bind(this)
    this.togglePopup = this.togglePopup.bind(this)
    this.getItems = this.getItems.bind(this)
    this.getCategories = this.getCategories.bind(this)
    this.addDiscountQuantity = this.addDiscountQuantity.bind(this)
    this.categoryArray = []
}

async componentDidMount() {
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

  getItems(data){
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
 



changequantity(index, value) {
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

addDiscountQuantity(itemsArray){
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


setType(type) {
    this.setState(prevState =>{
        return {
            selectedType:type
        }
    })
}
  
togglePopup() {
        this.setState({
            showPopup: !this.state.showPopup
          });
    }

getCategories(items){
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

  render() {
    const { isLoaded } = this.state;
    if (!isLoaded) {
      return (
        <div>
            <div class="preloader">
                <div class="spin">
                    <div class="cube1"></div>
                    <div class="cube2"></div>
                </div>
            </div>
        </div>);
    } else {
    return (
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
         <About />
         <MapLocation mapUrl={this.state.restaurantBranch[0].g_location} />
         <Contact />
         <ScrollToTop />
         <FootComponent links={this.state.restaurant_info.restaurant_detail}/>
         </div>
        </div>
    );
  }
}
}

export default NewHome;