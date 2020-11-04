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
          <Carousel>
            {!this.state.slider && (
              <Carousel.Item>
                <div className="single-slider single-slider-1">
                  <div
                    className="slider-bg"
                    style={{ backgroundImage: `url(${defaultSliderImage})` }}
                  >
                    <div className="row  no-gutters align-items-center d-flex justify-content-center">
                      <div className="col-lg-12 ">
                        <div className="slider-product-content pt-50  mt-200">
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
                    <div
                      className="single-slider single-slider-1"
                      onClick={() => {
                        if (item.slider_link_type === "menu_category") {
                          document
                            .getElementById(item.slider_link_value)
                            .click();
                        }
                      }}
                      style={
                        item.slider_link_type === "menu_category"
                          ? { cursor: "pointer" }
                          : {}
                      }
                    >
                      <div
                        className="slider-bg"
                        style={{ backgroundImage: `url(${item.url})` }}
                      >
                        <div className="row  no-gutters align-items-center d-flex justify-content-center">
                          <div className="col-lg-12 ">
                            <div className="slider-product-content pt-50  mt-200">
                              <h1
                                className="slider-title "
                                data-animation="fadeInUp"
                                data-delay="0.3s"
                              >
                                {item.content ? item.content : " "}
                              </h1>
                              {item.buttons && (
                                <div className="row">
                                  {item.buttons[0].button_link_type ===
                                    "menu" && (
                                    <a href="#product">
                                      {item.buttons[0].content}
                                    </a>
                                  )}
                                  {item.buttons[1].button_link_type ===
                                    "contact_info" && (
                                    <a href="#footer">
                                      {item.buttons[1].content}
                                    </a>
                                  )}
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Carousel.Item>
                );
              })}
          </Carousel>
        </div>
      </section>
    );
  }
}

export default Slider;
