import React,{ Component } from "react"
import ChefImage from './assets/images/chef.jpg';
import Food1 from './assets/images/food1.jpg'
import Food2 from './assets/images/food2.jpg'
import MapImage from './assets/images/map.png'

class About extends React.Component {
    render(){
        return(
            <section id="about" class="about-area pt-125 pb-130">
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <div class="section-title pb-30">
                        <h5 class="mb-15">Our Story</h5>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-6">
                    <div class="about-left mt-45">
                        <div class="about">
                            <img src={ChefImage} alt=""/>
                        </div>
                    </div> 
                </div>
                <div class="col-lg-6">

                    <div class="about-right mt-45">
                        <div class="row justify-content-center">
                            <div class="col-md-6 col-sm-8">
                                <div class="about-content mt-20">
                                    <h5 class="title mb-10">About Us</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm od
                                        tempor.</p>
                                </div>

                                <div class="timing text-center mt-80">
                                    <div class="about-content mt-20">
                                        <h5 class="title mb-10">Mon - Sat</h5>
                                        <p>9am - 7pm</p>
                                    </div>
                                </div> 
                            </div>
                            <div class="col-md-6 col-sm-8" id="location">
                                <div class="single-about text-center">
                                    <img src={Food1} alt=""/>
                                </div> 

                                <div class="single-about text-center mt-30">
                                    <img src={Food2} alt=""/>
                                </div> 

                                <div class="single-about text-center mt-30">
                                    <a href="#" class="location">
                                        Location
                                    </a>
                                    <img src={MapImage} alt=""/>
                                </div> 
                            </div>
                        </div> 
                    </div> 
                </div>
            </div> 
        </div> 
    </section>

        )
    }
}

 export default About
    