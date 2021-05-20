import React, { Component } from "react";
import Carousel from "antd/lib/carousel";
import ReactGA from "react-ga";

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slider: JSON.parse(this.props.slider_images),
    };
  }

  render() {
    return (
      <section id="home" className="slider-area">
        <div className="container-fluid position-relative carousel-design ">
          {/* <Carousel autoplay>
            {this.state.slider.map((item, index) => {
              return (
                <div
                  key={index}
                  className="single-slider single-slider-1 "
                  onClick={() => {
                    if (item.slider_link_type) {
                      ReactGA.event({
                        category: "Slider Banner",
                        action: "Clicked image ",
                        label: `Jumped to ${item.slider_link_type} to ${item.slider_link_value}`,
                      });
                    }
                    if (item.slider_link_type === "menu_category") {
                      ReactGA.event({
                        category: "Slider Banner",
                        action: "Clicked image ",
                        label: `Jumped to menuCategory_${item.slider_link_value}`,
                      });
                      document
                        .getElementById(
                          `menuCategory_${item.slider_link_value}`
                        )
                        .click();
                      document.getElementById(`menu-dropdown`) &&
                        (document.getElementById(`menu-dropdown`).value =
                          item.slider_link_value);
                    }
                  }}
                  style={
                    item.slider_link_type === "menu_category"
                      ? { cursor: "pointer" }
                      : {}
                  }
                >
                  <div className="slider-bg row">
                    <>
                      <img src={item.url} alt="slider" />
                      <div className="slider-product-content">
                        <h1
                          className="slider-title "
                          data-animation="fadeInUp"
                          data-delay="0.3s"
                        >
                          {item.content ? item.content : " "}
                        </h1>
                        {item.buttons && (
                          <div className="row call-to-action-button">
                            {item.buttons[0].button_link_type === "menu" && (
                              <a
                                href="#product"
                                onClick={() =>
                                  ReactGA.event({
                                    category: "Slider Banner",
                                    action: `Clicked ${item.buttons[0].content} button`,
                                    label: `Jumped to Menu section of the page`,
                                  })
                                }
                              >
                                {item.buttons[0].content}
                              </a>
                            )}
                            {item.buttons[1].button_link_type ===
                              "contact_info" && (
                              <a
                                href={`tel:+91${this.props.contact_number}`}
                                target="blank"
                                onClick={() =>
                                  ReactGA.event({
                                    category: "Slider Banner",
                                    action: `Clicked ${item.buttons[1].content} button`,
                                    label: `Opened contact App to make call`,
                                  })
                                }
                              >
                                {item.buttons[1].content}
                              </a>
                            )}
                          </div>
                        )}
                      </div>
                    </>
                  </div>
                </div>
              );
            })}
          </Carousel> */}
          <div
            className="row d-flex justify-content-center call-to-action-button"
            style={{ position: "absolute", bottom: "20px" }}
          >
            <a href="#product">Place order</a>
            <a href="#footer">Call us</a>
          </div>
        </div>
      </section>
    );
  }
}

export default Slider;
