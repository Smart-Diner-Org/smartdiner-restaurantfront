import React,{ Component } from "react"
import ChefImage from './assets/images/chef.jpg';
import Food1 from './assets/images/food1.jpg'
import Food2 from './assets/images/food2.jpg'


class About extends Component {
    constructor(props){
        super(props)
        this.state= {
            timings : this.props.timings.split(" ")
        }
    }
    render(){
        return(
            <section id="about" class="about-area pt-100 pb-60">
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

                    
                        

                            <div class="col-md-12 col-sm-8">
                            <div class="about-right mt-45">
                            <div class="row justify-content-center">
                                <div class="about-content mt-20">
                                    <h5 class="title mb-10">About Us</h5>
                                        <p>{this.props.about}</p>
                                </div>
                                </div> 
                                </div>
                            </div>

                            <div class="col-md-12 col-sm-8">
                            <div class="about-right mt-45">
                            <div class="row justify-content-center">
                                <div class="timing text-center mt-50 mb-10">
                                    <div class="about-content mt-20">
                                        <h5 class="title mb-10">{this.state.timings[0]}-{this.state.timings[2]}</h5>
                                        <h5 class="title mb-10">{this.state.timings[3]}-{this.state.timings[5]}</h5>
                                    </div>
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
    