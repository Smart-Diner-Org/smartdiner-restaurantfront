import React from "react";

class Description extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: this.props.delivery_locations
        ? this.props.delivery_locations.split(",")
        : null,
    };
  }

  render() {
    return (
      <section id="description" class="about-area description-content pt-50 ">
        <div class="container">
          {this.props.delivery_locations && (
            <div class="row">
              <div class="col-lg-3">
                <div class="section-title">
                  <h5 class="mb-15">Our Delivey Locations</h5>
                </div>
              </div>
              <div class="col-lg-9">
                <ul className="row d-flex justify-content-around ">
                  {this.state.location
                    ? this.state.location.map((item) => {
                        return (
                          <ol class="font-weight-bold col-lg-3 col-md-12 col-sm-12">
                            <i class="lni lni-map-marker mr-10 "></i>
                            {item}
                          </ol>
                        );
                      })
                    : " "}
                </ul>
              </div>
            </div>
          )}

          {this.props.preOrder && !this.props.preOrderImage && (
            <div
              class="d-flex mt-20 justify-content-center align-items-center"
              style={{ width: "100%", backgroundColor: "black" }}
            >
              <h5 class="mt-10 mb-10 " style={{ color: "white" }}>
                We also provide Pre-Order service
              </h5>
            </div>
          )}
          

          {/* {this.props.preOrder && this.props.preOrderImage && (
            <div className="mt-20" style={{ width: "100%" }}>
              <img
                loading="lazy"
                src={this.props.preOrderImage}
                alt="preOrderImage"
              />
            </div>
          )} */}

          {this.props.has_customisation_info && (
            <div className="call-for-order mt-70">
              <div class="section-title">
                <h5 class="mb-15">Our Customized Cakes</h5>
              </div>
              <div className="row">
                <div className="col-lg-8 col-sm-12">
                  <div className="align-items-center custom-images">
                    {this.props.customisation_info_content[0].images.map(
                      (imgSrc) => (
                        <img src={imgSrc} alt="call for order"></img>
                      )
                    )}
                  </div>
                </div>
                <div className="col-lg-4 col-sm-12 mt-10 text-justify ">
                  {this.props.customisation_info_content[0].content}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    );
  }
}

export default Description;
