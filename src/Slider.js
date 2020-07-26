import React,{ Component } from "react"


class Slider extends Component {
    render(){
    return (
        <section id="home" class="slider-area pt-100">
        <div class="container-fluid position-relative">
            <div class="slider-active">
                <div class="single-slider">
                    <div class="slider-bg">
                        <div class="row no-gutters align-items-center ">
                            <div class="col-md-7">
                                <div class="slider-product-content mt-200">
                                    <h1 class="slider-title" data-animation="fadeInUp" data-delay="0.3s">
                                        Chinese Grill Kitchen</h1>
                                </div> 
                            </div>
                            <div class="col-lg-12 col-md-5">
                                <div class="slider-product-image d-none d-md-block">
                                    <img src="assets/images/building1.jpg" alt="Slider"/>
                                </div> 
                            </div>
                        </div> 
                    </div> 
                </div> 

                <div class="single-slider">
                    <div class="slider-bg">
                        <div class="row no-gutters align-items-center">
                            <div class="col-md-7">
                                <div class="slider-product-content mt-200">
                                    <h1 class="slider-title p-3" data-animation="fadeInUp" data-delay="0.3s">
                                        Winter Sale! is Here</h1>
                                </div> 
                            </div>
                            <div class="col-lg-12 col-md-5">
                                <div class="slider-product-image d-none d-md-block">
                                    <img src="assets/images/building2.jpg" alt="Slider"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div> 
            <div class="slider-social">
                <div class="row justify-content-end">
                    <div class="col-lg-7 col-md-6">
                        <ul class="social text-right">
                            <li><a href="#"><i class="lni-facebook-filled"></i></a></li>
                            <li><a href="#"><i class="lni-twitter-original"></i></a></li>
                            <li><a href="#"><i class="lni-instagram"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div> 
    </section>   
    )
}
}

export default Slider