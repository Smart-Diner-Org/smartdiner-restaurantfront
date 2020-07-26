import React, { Component } from 'react';
import HeadComponent from './HeadComponent'
import Slider from './Slider'
import Discount from './Discount'
import About from './About'
import Contact from './Contact'
import FootComponent from './FootComponent'
import Product from './Product';

class NewHome extends Component {
  

  render() {
    return (
        <div>
         <HeadComponent />
         <Slider />
         <Discount />
         <About />
         <Product />
         <Contact />
         <FootComponent />
          
        </div>
    );
  }
}

export default NewHome;