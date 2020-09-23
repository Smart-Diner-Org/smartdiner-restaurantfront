import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import Image1 from "./assets/images/IMG_20200606_142600.jpg";
import Image2 from "./assets/images/IMG_20200606_143123.jpg";

class Slider extends Component {

   
  render() {
    return (
      <section id="home" className="slider-area pt-130 ">
        <div className="container-fluid position-relative carousel-design ">
          <Carousel>
            <Carousel.Item>
              <div className="single-slider single-slider-1">
                <div className="slider-bg ">
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
                          Delicious Quality Chicken Biriyani
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
            <Carousel.Item>
              <div className="single-slider single-slider-2">
                <div className="slider-bg ">
                  <div className="row no-gutters align-items-center d-flex justify-content-center">
                    <div className="col-lg-12 ">
                      <div
                        className="slider-product-content pt-50 mt-200"
                      >
                        <h1
                          className="slider-title"
                          data-animation="fadeInUp"
                          data-delay="0.3s"
                        >
                          Protein Rich Biriyani
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
          </Carousel>
        </div>
      </section>
    );
  }
}

export default Slider;
