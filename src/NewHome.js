import React, { Component } from 'react';
import HeadComponent from './HeadComponent'
import Slider from './Slider'
import Discount from './Discount'
import About from './About'
import Contact from './Contact'
import FootComponent from './FootComponent'
import Product from './Product';
import ScrollToTop from './ScrollToTop'
import Bag from './Bag'
import axios from 'axios';





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
        console.log(data.menus)
        this.getCategories(data.menus);
        this.addDiscountQuantity(data.menus)
       
        this.setState({
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
    items.map((item) => {
        if(item.category){
                  
                if(indexes.indexOf(item.category.name)=== -1){
                                        indexes.push(item.category.name);
                                        categoryArray.push(item.category);
                                    }
             
                
        }
    })
    this.setState({categoryArray});
}




  render() {
    const { isLoaded } = this.state;
console.log(this.state.items)
console.log(this.state.total)
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


         <div style={this.state.showPopup?{pointerEvents: 'none',filter: 'blur(10px)',position:"fixed"}:{}}>
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
        </div>
    );
  }
}
}

export default NewHome;