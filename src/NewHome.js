import React, { Component } from 'react';
import HeadComponent from './HeadComponent'
import Slider from './Slider'
import Discount from './Discount'
import About from './About'
import Contact from './Contact'
import FootComponent from './FootComponent'
import Product from './Product';
import ScrollToTop from './ScrollToTop'

class NewHome extends Component {
  

  render() {
    return (
        <div>
          {/* <div class="preloader">
        <div class="spin">
            <div class="cube1"></div>
            <div class="cube2"></div>
        </div>
    </div> */}
         <HeadComponent />
         
         <Slider />
         <Discount />
         <About />
         <Product />
         <Contact />
         <ScrollToTop />
         <FootComponent />
          
        </div>
    );
  }
}

export default NewHome;