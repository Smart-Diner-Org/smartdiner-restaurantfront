import React from "react";
import "./index.css";
import axios from "axios";
import { Link } from "react-router-dom";
import Alert from "react-bootstrap/Alert";
import { defaultAboutImage } from "../theme 2.1/constant";

const orderNotFound = "Order not found";
const invalidOrder = "Invalid Order";
const wrongOrderMessage =
  "It does not seem to be the right order. Please check";

class StatusPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      flag1: false,
      flag2: false,
      flag3: false,
      flag4: false,
      progress: "",
      date: "",
      orderCancelled: false,
      cancellationDate: "",
      cancellationTime: "",
      wrongOrder: null,
    };
  }

  async componentDidMount() {
    try {
      let id = this.props.match.params;
      id = id.id;
      await axios
        .get(
          `${process.env.REACT_APP_BASE_URL}/before_login/order/${id}/status`
        )
        .then((res) => {
          const data = res.data;
          console.log(data);
          this.setState({ data: data });
          if (data.message === orderNotFound || data.message === invalidOrder) {
            this.setState({ wrongOrder: wrongOrderMessage });
          }
        });
    } catch (error) {
      alert("Failed to fetch information from server");
    }

    const favicon = document.getElementById("favicon");
    favicon.href = this.state.data.logo;
    document.title = this.state.data.restuarantName;

    if (this.state.data.stage_id == 1 || this.state.data.stage_id == 2) {
      this.setState({
        flag1: true,
        progress: "25%",
      });
    } else if (this.state.data.stage_id == 3 || this.state.data.stage_id == 4) {
      this.setState({
        flag1: true,
        flag2: true,
        progress: "50%",
      });
    } else if (this.state.data.stage_id == 5 || this.state.data.stage_id == 6) {
      this.setState({
        flag1: true,
        flag2: true,
        flag3: true,
        progress: "75%",
      });
    } else if (this.state.data.stage_id == 7 || this.state.data.stage_id == 8) {
      this.setState({
        flag1: true,
        flag2: true,
        flag3: true,
        flag4: true,
        progress: "100%",
      });
    }
    if (this.state.data.stage_id == 9) {
      this.setState({
        orderCancelled: true,
      });
    } else {
      this.setState({
        orderCancelled: false,
      });
    }
    let date = new Date(this.state.data.createdDate);
    console.log(date);
    let newdate = date.toDateString().split(" ");
    let dt = `${newdate[0]}, ${newdate[2]} ${newdate[1]}`;
    this.setState({
      date: dt,
    });

    let canDate = new Date(this.state.data.cancellationDateTime);
    let cannewdate = canDate.toDateString().split(" ");
    let candt = `${cannewdate[0]}, ${cannewdate[2]} ${cannewdate[1]}, ${cannewdate[3]}`;
    this.setState({
      cancellationDate: candt,
    });

    let canTime = canDate.toLocaleTimeString();
    this.setState({
      cancellationTime: canTime,
    });
  }

  render() {
    return (
      <div>
        <div className="container customerStatusContainer">
          <div className="header">
            <div className="row">
              <div className="col">
                <h1>Track order</h1>
              </div>
            </div>
            <div className="row ">
              <div className="col-6">
                <p className="date mt-10">
                  {!this.state.wrongOrder && this.state.date}
                </p>
                <p className="orderId mt-10">
                  Order id: {this.props.match.params.id}{" "}
                </p>
                {/* <p className="date mt-10">{this.state.wrongOrder && this.state.wrongOrder}</p> */}
                {this.state.wrongOrder && (
                  <Alert className="mt-10" variant="danger">
                    {this.state.wrongOrder}
                  </Alert>
                )}
              </div>
              {!this.state.wrongOrder && (
                <div className="col-6 d-flex justify-content-end">
                  <div className="priceBg">
                    <h1 className="price">Rs. {this.state.data.totalAmount}</h1>
                  </div>
                </div>
              )}
            </div>
            {/* <div className="row">
                        <div className="col-12 mt-10">
                            <h4 className="etaTime mb-4">ETA : 10min <i className="lni lni-alarm-clock"></i></h4>
                        </div>
                    </div> */}
          </div>

          <div className="deliveryProgressContainer">
            <div className="row mt-2">
              {this.state.orderCancelled && (
                <div className="col-lg-6 col-11">
                  <p className="cancelledOrder">
                    Your order has been cancelled
                  </p>
                  {this.state.data.cancellationReason != null && (
                    <p className="cancelledOrder">
                      Reason : {this.state.data.cancellationReason}
                    </p>
                  )}
                  {this.state.data.cancellationDateTime != null && (
                    <p className="cancelledOrder">
                      Cancelled on {this.state.cancellationDate} at{" "}
                      {this.state.cancellationTime}
                    </p>
                  )}
                </div>
              )}

              {!this.state.orderCancelled && (
                <div className="col-lg-1 col-1 deliveryProgress">
                  <div className="progress progress-bar-vertical">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow="30"
                      aria-valuemin="100"
                      aria-valuemax="0"
                      style={{ height: `${this.state.progress}` }}
                    >
                      <span className="sr-only"></span>
                    </div>
                  </div>
                </div>
              )}
              {!this.state.orderCancelled && (
                <div className="col-lg-5 col-11 d-flex flex-column justify-content-around">
                  <div
                    className={
                      this.state.flag1
                        ? "progressDetails "
                        : "progressDetails inactive"
                    }
                  >
                    <div className="row">
                      <div className="orderIcon">
                        <img
                          className="icon shopping-bag"
                          aria-hidden="true"
                          alt=""
                        />
                      </div>
                      <div className="orderDetails ml-2">
                        <h4 className="orderTitle">Order placed</h4>
                        {/* <p className="description">3x parathas</p> */}
                      </div>
                    </div>
                  </div>
                  <div
                    className={
                      this.state.flag2
                        ? "progressDetails"
                        : "progressDetails inactive"
                    }
                  >
                    <div className="row">
                      <div className="orderIcon">
                        <img
                          className="icon restaurant-icon"
                          aria-hidden="true"
                          alt=""
                        />
                      </div>
                      <div className="orderDetails ml-2">
                        <h4 className="orderTitle">Food is being prepared</h4>
                        <p className="description">
                          {this.state.data.restuarantName} is preparing your
                          food till then.
                        </p>
                        {/* <p className="description">Till then <a href="https://google.com"
                                            target="blank">https://google.com</a></p> */}
                      </div>
                    </div>
                  </div>

                  <div
                    className={
                      this.state.flag3
                        ? "progressDetails"
                        : "progressDetails inactive"
                    }
                  >
                    <div className="row">
                      <div className="orderIcon">
                        <img
                          className="icon delivery-icon"
                          aria-hidden="true"
                          alt=""
                        />
                      </div>
                      <div className="orderDetails ml-2">
                        <h4 className="orderTitle">Out for delivery</h4>
                        <div className="deliveryGuy container">
                          <div className="row">
                            <img src="" alt="" />
                            <div className="deliveryGuyDetails">
                              <p>
                                Delivery guy <i className="lni lni-phone"></i>
                              </p>
                              <p>{this.state.data.resturantContactNumber}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className={
                      this.state.flag4
                        ? "progressDetails"
                        : "progressDetails inactive"
                    }
                  >
                    <div className="row">
                      <div className="orderIcon">
                        <img
                          className="icon shopping-bag"
                          aria-hidden="true"
                          alt=""
                        />
                      </div>
                      <div className="orderDetails ml-2">
                        <h4 className="orderTitle">Lets start eating</h4>
                        {/* <p className="description">Dont forget to rate</p>
                                    <i className="fa fa-star checked" aria-hidden="true"></i>
                                    <i className="fa fa-star checked" aria-hidden="true"></i>
                                    <i className="fa fa-star checked" aria-hidden="true"></i>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star" aria-hidden="true"></i> */}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div className="col-lg-6 col-sm-0 restaurantDetails">
                <Link to="/">
                  <h1 className="mb-5">{this.state.data.restuarantName}</h1>
                </Link>
                <div className="restaurantImages">
                  <div className="row">
                    <div className="col-3 d-flex flex-column justify-content-between">
                      <img
                        src={defaultAboutImage} 
                        className="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}"
                        alt=""
                      />
                      <img
                        src={defaultAboutImage}
                        className="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}"
                        alt=""
                      />
                      <img
                        src={defaultAboutImage}
                        className="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}"
                        alt=""
                      />
                    </div>
                    <div className="col-9">
                      <img
                        src={defaultAboutImage}
                        className="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="container">
              <div className="address row mt-5 ">
                <div className="col-6 d-flex flex-column justify-content-around">
                  <h6>Delivery address:</h6>
                  <p>{this.state.data.name}</p>
                  <p>{this.state.data.deliveryAddressOne}</p>
                  <p>{this.state.data.deliveryAddressTwo}</p>
                  {/* <p>Pincode</p> */}
                </div>
                <div className="location col-6 pt-10 d-flex flex-column justify-content-around">
                  <h6>Restaurant Contact details</h6>
                  <p>{this.state.data.restaurantContactNumber}</p>
                  <br />
                  <p>{this.state.data.restuarantEmailId}</p>
                  <br />
                  <p>{this.state.data.restuarantAddress}</p>
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="status-footer">
          <p>
            Powered by{" "}
            <a href="https://smartdiner.co" target="_lank">
              Smart Diner
            </a>
          </p>
        </div>
      </div>
    );
  }
}

export default StatusPage;
