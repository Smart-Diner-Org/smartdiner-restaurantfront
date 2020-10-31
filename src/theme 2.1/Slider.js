import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import { defaultSliderImage } from "./constant";

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slider: JSON.parse(this.props.slider_images),
    };
  }

  render() {
    return (
      <section id="home" className="slider-area pt-130 ">
        <div className="container-fluid position-relative carousel-design ">
          <Carousel interval={10000000}>
            {!this.state.slider && (
              <Carousel.Item>
                <div className="single-slider single-slider-1">
                  <div
                    className="slider-bg"
                    style={{ backgroundImage: `url(${defaultSliderImage})` }}
                  >
                    <div className="row  no-gutters align-items-center d-flex justify-content-center">
                      <div className="col-lg-12 ">
                        <div className="slider-product-content ">
                          <h1
                            className="slider-title "
                            data-animation="fadeInUp"
                            data-delay="0.3s"
                          >
                            We provide online delivery
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
            )}
            {this.state.slider &&
              this.state.slider.map((item) => {
                return (
                  <Carousel.Item>
                    <div className="single-slider single-slider-1">
                      <div
                        className="slider-bg"
                        style={{ backgroundImage: `url(${item.url})` }}
                      >
                        <div
                          style={{ height: `100%` }}
                          className="row  no-gutters align-items-center d-flex justify-content-center"
                        >
                          <div className="slider-product-content">
                            <h1
                              className="slider-title"
                            >
                              {item.content}{" "}
                            </h1>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Carousel.Item>
                );
              })}
          </Carousel>
          <div className="row d-flex justify-content-center call-to-action-button" style={{ position: "absolute", bottom: "20px" }}>
            <a href="#product">Place order</a>
            <a href="#footer">Call us</a>
          </div>
        </div>
      </section>
    );
  }
}

export default Slider;
