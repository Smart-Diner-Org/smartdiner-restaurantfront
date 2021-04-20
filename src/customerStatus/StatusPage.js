import React from "react";
import "./index.css";
import axios from "axios";
import { Link } from "react-router-dom";
import Alert from "antd/lib/alert";
import { defaultAboutImage } from "../theme 2.1/constant";
import OTPpage from "./OTPpage";
import ReactGA from "react-ga";
import BillItem from "../theme 2.1/components/BillItem";

const orderNotFound = "Order not found";
const invalidOrder = "Invalid Order";
const wrongOrderMessage =
  "It does not seem to be the right order. Please check";
let myInterval;

class StatusPage extends React.Component {
  constructor(props) {
    super(props);
    //this.apiLink = `${process.env.REACT_APP_BASE_URL}/`;
    this.state = {
      isLoaded: false,
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

      OTP: "",
      minutes: 0,
      seconds: 60,
      mobile: "",
      successMessage: "",
      errorMessage: "",
      mobileVerification: false,
      isVerified: false,
      statuspage: true,
      isEcommerce: false,
    };
    this.OTPverfication = this.OTPverfication.bind(this);
    this.resendOTP = this.resendOTP.bind(this);
  }
  setOTPValue = (value) => {
    this.setState({ OTP: value });
  };

  async OTPverfication(otp) {
    const data = {
      mobile: this.state.data.customerContactNumber,
      //mobile:mobile,
      otp: otp,
    };
    await axios
      .post(`${process.env.REACT_APP_BASE_URL}/verify_otp`, data)
      .then((res) => {
        console.log(res.data);
        this.setState({ user_info: res.data });
        this.setState({ token: res.data.accessToken });
        sessionStorage.setItem("token", res.data.accessToken);
        this.setState({ successMessage: res.data.message });
        this.setState({ isVerified: true });
        this.setState({ mobileVerification: true });
        console.log(res.data.message);
        clearInterval(myInterval);
        ReactGA.event({
          category: "OTP",
          action: "Verified OTP",
          label: data.mobile,
        });
      })
      .catch((error) => {
        if (error && error.response && error.response.data) {
          let er = error.response.data.message;
          console.log(er);
          this.setState({ errorMessage: er });
        }
      });
  }

  async resendOTP(event) {
    event.preventDefault();
    this.setState({ errorMessage: "" });
    const data = {
      mobile: this.state.data.customerContactNumber,
    };
    sessionStorage.removeItem("token");
    await axios
      .post(`${process.env.REACT_APP_BASE_URL}/auth/resend_otp`, data)
      .then((res) => {
        this.setState({ successMessage: res.data.message });
        ReactGA.event({
          category: "OTP",
          action: "Request for re-send OTP",
          label: data.mobile,
        });
      })
      .catch((error) => {
        if (error && error.response && error.response.data) {
          let er = error.response.data.message;
          console.log(er);
          this.setState({ errorMessage: er });
        }
      });
    this.setState({ seconds: 60 });
    this.setState({ isVerified: false });
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
          this.setState({ isLoaded: true });
          this.setState({ mobileVerification: data.mobileVerification });
          this.setState({ isEcommerce: data.isEcommerce });
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

    if (this.state.isEcommerce) {
      if (this.state.data.stage_id == 1) {
        this.setState({
          flag1: true,
          progress: "25%",
        });
      } else if (
        this.state.data.stage_id == 2 ||
        this.state.data.stage_id == 3 ||
        this.state.data.stage_id == 4 ||
        this.state.data.stage_id == 5
      ) {
        this.setState({
          flag1: true,
          flag2: true,
          progress: "50%",
        });
      } else if (this.state.data.stage_id == 6) {
        this.setState({
          flag1: true,
          flag2: true,
          flag3: true,
          progress: "75%",
        });
      } else if (
        this.state.data.stage_id == 7 ||
        this.state.data.stage_id == 8
      ) {
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
    } else {
      if (this.state.data.stage_id == 1 || this.state.data.stage_id == 2) {
        this.setState({
          flag1: true,
          progress: "25%",
        });
      } else if (
        this.state.data.stage_id == 3 ||
        this.state.data.stage_id == 4
      ) {
        this.setState({
          flag1: true,
          flag2: true,
          progress: "50%",
        });
      } else if (
        this.state.data.stage_id == 5 ||
        this.state.data.stage_id == 6
      ) {
        this.setState({
          flag1: true,
          flag2: true,
          flag3: true,
          progress: "75%",
        });
      } else if (
        this.state.data.stage_id == 7 ||
        this.state.data.stage_id == 8
      ) {
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

    //-----
    clearInterval(myInterval);
    myInterval = setInterval(() => {
      const { seconds, minutes } = this.state;

      if (seconds > 0) {
        this.setState(({ seconds }) => ({
          seconds: seconds - 1,
        }));
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(this.myInterval);
        } else {
          this.setState(({ minutes }) => ({
            minutes: minutes - 1,
            seconds: 59,
          }));
        }
      }
    }, 1000);
  }

  render() {
    const { isLoaded } = this.state;
    if (!isLoaded) {
      return (
        <div>
          <div className="preloader">
            <div className="spin">
              <div className="cube1"></div>
              <div className="cube2"></div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          {this.state.mobileVerification && (
            <div className="container customerStatusContainer m_h">
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
                      <Alert
                        className="mt-10"
                        message={this.state.wrongOrder}
                        type="error"
                        showIcon
                      />
                    )}
                  </div>
                  {!this.state.wrongOrder && (
                    <div className="col-6 d-flex justify-content-end">
                      <div className="priceBg">
                        <h1 className="price">
                          Rs. {this.state.data.totalAmount}
                        </h1>
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
                            <h4 className="orderTitle">
                              {this.state.isEcommerce
                                ? "Order has been accepted by"
                                : "Food is being prepared"}
                            </h4>
                            <p className="description">
                              {this.state.isEcommerce
                                ? `${this.state.data.restuarantName}`
                                : `${this.state.data.restuarantName} is preparing
                                your food till then.`}
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
                              <div className="row d-flex align-items-center">
                                <img
                                  src="https://graphicriver.img.customer.envatousercontent.com/files/292679805/preview.jpg?auto=compress%2Cformat&q=80&fit=crop&crop=top&max-h=8000&max-w=590&s=2da54bb3b99ae71f23e0493c61bf2152"
                                  alt=""
                                />
                                <div className="deliveryGuyDetails">
                                  <p>
                                    John Wick <br />
                                    {/* {this.state.data.resturantContactNumber} */}
                                    +91-808893984
                                    <a
                                      href={`tel:+91${this.state.data.restaurantContactNumber}`}
                                      target="blank"
                                    >
                                      <i className="lni-phone-handset"></i>
                                    </a>
                                  </p>
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
                            <h4 className="orderTitle">
                              {this.state.isEcommerce
                                ? "Delivered"
                                : "Lets start eating"}{" "}
                            </h4>
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
                    <h3 className="mb-5">
                      Your Order - {this.state.data.restuarantName}
                    </h3>
                    <div
                      className={`${
                        this.state.data.orderDetailMenus.length > 2 && "scroll"
                      }`}
                    >
                      {this.state.data.orderDetailMenus.map((item, index) => (
                        <BillItem
                          key={index}
                          itemName={item.menu_quantity_measure_price.menu.name}
                          price={item.order_detail.original_price}
                          image={item.menu_quantity_measure_price.menu.image}
                          quantity={item.order_detail.quantity}
                          menuQuantity={item.menu_quantity_measure_price}
                          statuspage={this.state.statuspage}
                          discount={
                            ((item.order_detail.original_price -
                              item.order_detail.price) /
                              item.order_detail.original_price) *
                            100
                          }
                          discountPrice={item.order_detail.price}
                          description={
                            item.menu_quantity_measure_price.menu
                              .short_description
                          }
                        />
                      ))}
                    </div>

                    {this.state.data.paymentTypeId == 2 &&
                      this.state.data.paymentStatusId == 2 && (
                        <a
                          href={this.state.data.paymentLink}
                          className="paybutton"
                          target="blank"
                        >
                          Pay now
                        </a>
                      )}

                    {this.state.data.paymentTypeId == 2 &&
                      this.state.data.paymentStatusId == 1 && (
                        <button className="paybutton green">
                          Successfully paid
                        </button>
                      )}
                    {this.state.data.paymentTypeId == 1 &&
                      this.state.data.paymentStatusId == 2 && (
                        <button className="paybutton">Cash on delivery</button>
                      )}

                    <div className="row links mt-50">
                      <div className="col-6">
                        <button>
                          <a
                            href={`tel:+91${this.state.data.restaurantContactNumber}`}
                            target="blank"
                          >
                            {this.state.isEcommerce
                              ? "Contact Store"
                              : "Contact restuarant"}
                          </a>
                        </button>
                      </div>
                      <div className="col-6">
                        <button>
                          <a href="/" target="blank">
                            {" "}
                            Visit {this.state.data.restuarantName}
                          </a>
                        </button>
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
                      <h6>
                        {this.state.isEcommerce
                          ? "Store Contact details"
                          : "Restaurant Contact details"}{" "}
                      </h6>
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
          )}

          {!this.state.mobileVerification && (
            <div className="d-flex justify-content-center min_ht">
              <OTPpage
                logo={this.state.data.logo}
                restuarantName={this.state.data.restuarantName}
                customerContactNumber={this.state.data.customerContactNumber}
                setOTPValue={this.setOTPValue}
                OTPverfication={this.OTPverfication}
                minutes={this.state.minutes}
                seconds={this.state.seconds}
                restaurantContactNumber={
                  this.state.data.restaurantContactNumber
                }
                successMessage={this.state.successMessage}
                errorMessage={this.state.errorMessage}
                resendOTP={this.resendOTP}
                wrongOrder={this.state.wrongOrder}
              />
            </div>
          )}

          <div
            className={`${
              this.state.mobileVerification
                ? "status-footer"
                : "status-footer pos"
            }`}
          >
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
}

export default StatusPage;
