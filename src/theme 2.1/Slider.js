import React,{ Component } from "react"
import Carousel from 'react-bootstrap/Carousel' 
import Image from './assets/images/building1.jpg'
import Image1 from './assets/images/building2.jpg'

class Slider extends Component {
    render(){
    return (
        <section id="home" className="slider-area pt-130 ">
            <div className="container-fluid position-relative carousel-design ">
            <Carousel  >
            <Carousel.Item > 
            <div className="single-slider ">
                    <div className="slider-bg ">
                        <div className="row  no-gutters align-items-center d-flex justify-content-center">
                            <div className="col-lg-12 ">
                                <div className="slider-product-content  mt-200" style={{ zIndex : "5"}}>
                                    <h1 className="slider-title" data-animation="fadeInUp" data-delay="0.3s">
                                    {this.props.restaurantName}</h1>
                                    <div className="row">
                                        <a href="#product">Place order</a>
                                        <a href="#footer">Call us</a>
                                    </div>
                                    
                                </div> 
                            </div>
                            <div className="col-lg-12 col-md-5">
                                <div className="slider-product-image d-none d-md-block">
                                    <img src={Image} alt="Slider"/>
                                </div> 
                            </div>
                        </div> 
                        </div>
                        </div>
                        
                        </Carousel.Item>
                        <Carousel.Item>
                        <div className="single-slider">
                    <div className="slider-bg">
                        <div className="row no-gutters align-items-center d-flex justify-content-center">
                            <div className="col-lg-12">
                                <div className="slider-product-content mt-200" style={{ zIndex : "5"}}>
                                <h1 className="slider-title p-3" data-animation="fadeInUp" data-delay="0.3s">
                                        Winter Sale! is Here</h1>
                                        <div className="row">
                                        <a href="#product">Place order</a>
                                        <a href="#footer">Call us</a>
                                    </div>
                                </div> 
                            </div>
                            <div className="col-lg-12 col-md-5">
                                <div className="slider-product-image d-none d-md-block">
                                    <img src={Image1} alt="Slider"/>
                                </div> 
                            </div>
                        </div> 
                        </div>
                        </div>
                      
                        </Carousel.Item>

  </Carousel>


        </div>
    </section>   
    )
}
}

export default Slider