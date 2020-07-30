import React, { Component } from 'react';
import HeadComponent from './HeadComponent'
import Slider from './Slider'
import Discount from './Discount'
import About from './About'
import Contact from './Contact'
import FootComponent from './FootComponent'
import Product from './Product';
import ScrollToTop from './ScrollToTop'
import Food1 from './assets/images/food1.jpg'
import Food2 from './assets/images/food2.jpg'
import Bag from './Bag'
import axios from 'axios';



const breakfast = 'breakfast';
const dinner = 'dinner';
const lunch = 'lunch';
const burger = 'burger';
const pizza = 'pizza';

class NewHome extends Component {
  constructor(props){
    super(props);
    this.state = {
        selectedType: "",
        items:[{}],
        isLoaded: false,
        total : 0,
    };
    this.changequantity = this.changequantity.bind(this)
    this.setType = this.setType.bind(this)
    this.togglePopup = this.togglePopup.bind(this)
    this.getCategories = this.getCategories.bind(this)
    this.addDiscountQuantity = this.addDiscountQuantity.bind(this)
    this.categoryArray = []
}

async componentDidMount() {
    try{
        await axios.get(`./dbapi.json`)
      .then(res => {
        const data = res.data;
        this.getCategories(data.menus);
        this.setState({
             items : data.menus ,
             isLoaded: true,
            });     
           
      })
    }catch(error){
        console.log(error)
        alert('Not able to fetch data')
    }
  }

  

changequantity(index, value) {
    this.setState( prevState => {
        let newItemsStateArray =  prevState.items;
        if (newItemsStateArray[index].quantity === 0 ){
            newItemsStateArray[index].quantity = newItemsStateArray[index].quantity + 1;
            return {
                quantity: newItemsStateArray
            }

        }
        if (newItemsStateArray[index].quantity >= 1 ){
            newItemsStateArray[index].quantity = newItemsStateArray[index].quantity + value;

        }
        return {
            items: newItemsStateArray
        }
    })
}

addDiscountQuantity(items,index){
    this.setState( prevState => {
        let newItemsStateArray =  prevState.items;
        newItemsStateArray[index].quantity = 0;
        newItemsStateArray[index].discountPrice = (newItemsStateArray[index].price-(newItemsStateArray[index].price*newItemsStateArray[index].discount/100));
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
   
    items.map((item)=>{
        if(item.category){
            // if(categoryArray.some(item.category => item.category_id != categoryArray.id)){
                // if(!item.category_id in categoryArray){
                    console.log(categoryArray)
                    if(categoryArray.indexOf(item.category)=== -1){
                        categoryArray.push(item.category);
                    }
                   
             
                
        }
    })
    this.setState({categoryArray});
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
         closePopup={this.togglePopup.bind(this) }  
         changequantity={this.changequantity}
         items={this.state.items}
         quantity={this.state.quantity}
         />}

        

         <HeadComponent
         togglePopup={this.togglePopup}
         total={this.state.total}
         />


         
         <Slider />
         <Discount />
         <About />
         <Product 
         setType={this.setType}
         changequantity={this.changequantity}
         items={this.state.items}
         selectedType={this.state.selectedType}
         categoryArray={this.state.categoryArray}
         />
         <Contact />
         <ScrollToTop />
         <FootComponent />
         
        </div>
    );
  }
}
}

export default NewHome;