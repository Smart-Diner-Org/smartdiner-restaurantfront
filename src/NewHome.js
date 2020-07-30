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
        selectedType: breakfast,
        items:[{}],
    data : [],
    loading: false,
    total : 0,
    };
    this.changequantity = this.changequantity.bind(this)
    this.setType = this.setType.bind(this)
    this.togglePopup = this.togglePopup.bind(this)
    this.getCategories = this.getCategories.bind(this)
    this.categoryArray = []
}



componentDidMount() {
    axios.get(`./dbapi.json`)
      .then(res => {
        const data = res.data;
        this.setState({ items : data.menus });
        this.getCategories(data.menus);
      })
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

getCategories(items){
    let categoryArray = []
    items.map((item)=>{
        if(item.category){

            categoryArray.push(item.category)
        
        }
    })
    this.setState({categoryArray});
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
             { this.state.showPopup && 
         <Bag 
         closePopup={this.togglePopup.bind(this) }  
         changequantity={this.changequantity}
         items={this.state.items}
         
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

export default NewHome;