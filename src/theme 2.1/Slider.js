import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";

;
class Slider extends Component {
    constructor(props){
        super(props);
        this.state = {
            slider: JSON.parse(this.props.slider_images),
        }
    }

  render() {
    console.log(this.state.slider)
    return (
      <section id="home" className="slider-area pt-130 ">
        <div className="container-fluid position-relative carousel-design ">
          <Carousel>
            {!this.state.slider &&            
             <Carousel.Item>
              <div className="single-slider single-slider-1">
                <div className="slider-bg" style={{backgroundImage:`url(https://smart-diner-client-images.s3.ap-south-1.amazonaws.com/default_images/default_slider.webp)`}}>
                  <div className="row  no-gutters align-items-center d-flex justify-content-center">
                    <div className="col-lg-12 ">
                        
                      <div
                        className="slider-product-content pt-50  mt-200"
                      >
                        <h1
                          className="slider-title "
                          data-animation="fadeInUp"
                          data-delay="0.3s"
                        >
                          We providing online delivery
                        </h1>
                        <div className="row">
                          <a href="#product">Place order</a>
                          <a href="#footer">Call us</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Carousel.Item>}
            {
             this.state.slider && this.state.slider.map((item)=>{
                return  <Carousel.Item>
                <div className="single-slider single-slider-1">
                  <div className="slider-bg" style={{backgroundImage:`url(${item.url})`}}>
                    <div className="row  no-gutters align-items-center d-flex justify-content-center">
                      <div className="col-lg-12 ">
                          
                        <div
                          className="slider-product-content pt-50  mt-200"
                        >
                          <h1
                            className="slider-title "
                            data-animation="fadeInUp"
                            data-delay="0.3s"
                          >
                            {item.content}
                          </h1>
                          <div className="row">
                            <a href="#product">Place order</a>
                            <a href="#footer">Call us</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Carousel.Item>
              })
            }
          </Carousel>
        </div>
      </section>
    );
  }
}

export default Slider;
