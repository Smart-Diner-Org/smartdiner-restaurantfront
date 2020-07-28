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

const breakfast = 'breakfast';
const dinner = 'dinner';
const lunch = 'lunch';
const burger = 'burger';
const pizza = 'pizza';

class NewHome extends Component {
  constructor(props){
    super(props);
    this.state = {
        selectedType: breakfast,
        items:[{
            imgLink: Food1,
            itemName: 'Item1',
            quantity: 0,
            regularPrice: 150,
            discountPrice: 120,
            discount: '20%',
            type: lunch
        },
        {
            imgLink: Food1,
            itemName: 'Item2',
            quantity: 0,
            regularPrice: 150,
            discountPrice: 120,
            discount: '20%',
            type: lunch
        },
        {
            imgLink: Food1,
            itemName: 'Item3',
            quantity: 0,
            regularPrice: 150,
            discountPrice: 120,
            discount: '20%',
            type: burger
        },
        {
            imgLink: Food1,
            itemName: 'Item4',
            quantity: 0,
            regularPrice: 150,
            discountPrice: 120,
            discount: '20%',
            type: pizza
        },
        {
            imgLink: Food2,
            itemName: 'Item5',
            quantity: 0,
            regularPrice: 150,
            discountPrice: 120,
            discount: '20%',
            type: lunch
        },
        {
            imgLink: Food2,
            itemName: 'Item6',
            quantity: 0,
            regularPrice: 150,
            discountPrice: 120,
            discount: '20%',
            type: dinner
        },
        {
            imgLink: Food1,
            itemName: 'Item7',
            quantity: 0,
            regularPrice: 150,
            discountPrice: 120,
            discount: '20%',
            type: breakfast
        },
        {
            imgLink: Food2,
            itemName: 'Item8',
            quantity: 0,
            regularPrice: 150,
            discountPrice: 120,
            discount: '20%',
            type: breakfast
        },
        {
            imgLink: Food2,
            itemName: 'Item9',
            quantity: 0,
            regularPrice: 150,
            discountPrice: 120,
            discount: '20%',
            type: breakfast
        },
        {
            imgLink: Food2,
            itemName: 'Item10',
            quantity: 0,
            regularPrice: 150,
            discountPrice: 120,
            discount: '20%',
            type: breakfast
        },
        {
            imgLink: Food1,
            itemName: 'Item11',
            quantity: 0,
            regularPrice: 150,
            discountPrice: 120,
            discount: '20%',
            type: breakfast
        },
        {
            imgLink: Food1,
            itemName: 'Item12',
            quantity: 0,
            regularPrice: 150,
            discountPrice: 120,
            discount: '20%',
            type: breakfast
        },
    ]
    };
    this.changequantity = this.changequantity.bind(this)
    this.setType = this.setType.bind(this)
    this.togglePopup = this.togglePopup.bind(this)
}
changequantity(index, value) {
    this.setState(prevState => {
        let newItemsStateArray = prevState.items;
        if (newItemsStateArray[index].quantity === 0 ){
            newItemsStateArray[index].quantity = newItemsStateArray[index].quantity + 1;
            return {
                items: newItemsStateArray
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

setType(type){
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

  render() {
    return (
        <div>
          {/* <div class="preloader">
        <div class="spin">
            <div class="cube1"></div>
            <div class="cube2"></div>
        </div>
    </div> */}
         <HeadComponent
         togglePopup={this.togglePopup}
         />

         { this.state.showPopup && <Bag 
         closePopup={this.togglePopup.bind(this) }  
         changequantity={this.changequantity}
         items={this.state.items}
         />}
         
         <Slider />
         <Discount />
         <About />
         <Product 
         setType={this.setType}
         changequantity={this.changequantity}
         items={this.state.items}
         selectedType={this.state.selectedType}
         />
         <Contact />
         <ScrollToTop />
         <FootComponent />
          
        </div>
    );
  }
}

export default NewHome;