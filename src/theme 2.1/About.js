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
                                        <p>{this.props.about}</p>
                                </div>

                                <div class="timing text-center mt-100">
                                    <div class="about-content mt-20">
                                        <h5 class="title mb-10">{this.state.timings[0]}-{this.state.timings[2]}</h5>
                                        <h5 class="title mb-10">{this.state.timings[3]}-{this.state.timings[5]}</h5>
                            
                                    </div>
                                </div> 
                            </div>
                            <div class="col-md-6 col-sm-8" >
                                <div class="single-about text-center">
                                    <img src={Food1} alt=""/>
                                </div> 

                                <div class="single-about text-center mt-30">
                                    <img src={Food2} alt=""/>
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
    