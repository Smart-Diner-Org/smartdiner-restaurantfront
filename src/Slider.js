import React,{ Component } from "react"
import Carousel from 'react-bootstrap/Carousel' 
import Image from './assets/images/building1.jpg'
import Image1 from './assets/images/building2.jpg'

class Slider extends Component {
    render(){
    return (
        <section id="home" className="slider-area pt-100">
            <div className="container-fluid position-relative">
            <Carousel >
            <Carousel.Item>
            <div className="single-slider">
                    <div className="slider-bg">
                        <div className="row no-gutters align-items-center ">
                            <div className="col-md-7">
                                <div className="slider-product-content mt-200">
                                    <h1 className="slider-title" data-animation="fadeInUp" data-delay="0.3s">
                                        Chinese Grill Kitchen</h1>
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
                        <div className="slider-social">
                <div className="row justify-content-end">
                    <div className="col-lg-7 col-md-6">
                        <ul className="social text-right">
                            <li><a href="#"><i className="lni-facebook-filled"></i></a></li>
                            <li><a href="#"><i className="lni-twitter-original"></i></a></li>
                            <li><a href="#"><i className="lni-instagram"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                        <div className="single-slider">
                    <div className="slider-bg">
                        <div className="row no-gutters align-items-center ">
                            <div className="col-md-7">
                                <div className="slider-product-content mt-200">
                                <h1 className="slider-title p-3" data-animation="fadeInUp" data-delay="0.3s">
                                        Winter Sale! is Here</h1>
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
                        <div className="slider-social">
                <div className="row justify-content-end">
                    <div className="col-lg-7 col-md-6">
                        <ul className="social text-right">
                            <li><a href="#"><i className="lni-facebook-filled"></i></a></li>
                            <li><a href="#"><i className="lni-twitter-original"></i></a></li>
                            <li><a href="#"><i className="lni-instagram"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
                        </Carousel.Item>

  </Carousel>






            {/* </div>
        <div className="container-fluid position-relative">
            <div className="slider-active">
                <div className="single-slider">
                    <div className="slider-bg">
                        <div className="row no-gutters align-items-center ">
                            <div className="col-md-7">
                                <div className="slider-product-content mt-200">
                                    <h1 className="slider-title" data-animation="fadeInUp" data-delay="0.3s">
                                        Chinese Grill Kitchen</h1>
                                </div> 
                            </div>
                            <div className="col-lg-12 col-md-5">
                                <div className="slider-product-image d-none d-md-block">
                                    <img src="assets/images/building1.jpg" alt="Slider"/>
                                </div> 
                            </div>
                        </div> 
                    </div> 
                </div> 

                <div className="single-slider">
                    <div className="slider-bg">
                        <div className="row no-gutters align-items-center">
                            <div className="col-md-7">
                                <div className="slider-product-content mt-200">
                                    <h1 className="slider-title p-3" data-animation="fadeInUp" data-delay="0.3s">
                                        Winter Sale! is Here</h1>
                                </div> 
                            </div>
                            <div className="col-lg-12 col-md-5">
                                <div className="slider-product-image d-none d-md-block">
                                    <img src="assets/images/building2.jpg" alt="Slider"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div> 
            <div className="slider-social">
                <div className="row justify-content-end">
                    <div className="col-lg-7 col-md-6">
                        <ul className="social text-right">
                            <li><a href="#"><i className="lni-facebook-filled"></i></a></li>
                            <li><a href="#"><i className="lni-twitter-original"></i></a></li>
                            <li><a href="#"><i className="lni-instagram"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>  */}
        </div>
    </section>   
    )
}
}

export default Slider