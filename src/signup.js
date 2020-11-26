import React, { Component } from "react";
import "./App.css";
import NewCustomer from "./NewCustomer";
import Payment from "./Payment";
import GetAddress from "./GetAddress";
import GetOTP from "./GetOTP";
import axios from "axios";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import ReactGA from "react-ga";

let myInterval;
sessionStorage.removeItem("token");
class SignUp extends Component {
  constructor(props) {
    super();
    this.apiLink = `${process.env.REACT_APP_BASE_URL}/`;
    this.state = {
      minutes: 0,
      seconds: 60,
      mobile: "",
      OTP: "",
      requestedOTP: false,
      isVerified: false,
      name: "",
      email: "",
      token: "",
      user_info: {
        accessToken: null,
        customer: {
          createdAt: null,
          customer_detail: {
            id: null,
            customer_id: null,
            address_one: null,
            address_two: null,
            city_id: null,
            state_id: null,
            primary: null,
            address_type: null,
            lat: null,
            long: null,
            createdAt: null,
            updatedAt: null,
          },
          email: null,
          id: null,
          mobile: null,
          mobile_verification: null,
          name: null,
          otp_secret: null,
          password: null,
          remember_token: null,
          role_id: null,
          updatedAt: null,
          uuid: null,
        },
      },
      successMessage: "",
      errorMessage: "",
      paymentSuccessMessage: "",
      paymentErrorMessage: "",
      addressTwo: sessionStorage.getItem("address"),
      addressOne: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.MhandleChange = this.MhandleChange.bind(this);
    this.requestOTP = this.requestOTP.bind(this);
    this.OTPverfication = this.OTPverfication.bind(this);
    this.resendOTP = this.resendOTP.bind(this);
    this.setOTPValue = this.setOTPValue.bind(this);
    this.addCustomer = this.addCustomer.bind(this);
    this.goPayment = this.goPayment.bind(this);
    this.editbtn = this.editbtn.bind(this);
  }

  componentDidMount() {
    ReactGA.initialize(`${sessionStorage.getItem("GA")}`); //Move this to db and load dynamically
    ReactGA.pageview("/signupPage");
    const favicon = document.getElementById("favicon");
    favicon.href = sessionStorage.getItem("logo");
    document.title = sessionStorage.getItem("title");
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  MhandleChange(event) {
    const value = event.target.value;
    this.setState({
      user_info: {
        accessToken: null,
        customer: {
          createdAt: null,
          customer_detail: null,
          email: null,
          id: null,
          mobile: null,
          mobile_verification: null,
          name: null,
          otp_secret: null,
          password: null,
          remember_token: null,
          role_id: null,
          updatedAt: null,
          uuid: null,
        },
      },
      mobile: value,
      requestedOTP: false,
      isVerified: false,
      seconds: 60,
      successMessage: "",
      errorMessage: "",
      token: "",
    });
    sessionStorage.removeItem("token");
    clearInterval(myInterval);
  }

  setOTPValue = (value) => {
    this.setState({ OTP: value });
  };

  async requestOTP(event) {
    event.preventDefault();
    const mobileValidation = (field, alerttext) => {
      if (field.length < 10) {
        alert(alerttext);
        return false;
      }
      for (let i = 0; i < field.length; i++) {
        if (isNaN(parseInt(field[i]))) {
          alert(alerttext);
          return false;
        }
      }
      return true;
    };
    const check = mobileValidation(
      this.state.mobile,
      "Please provide valid mobile number"
    );
    if (check) {
      this.setState({ requestedOTP: true });
      const data = {
        mobile: this.state.mobile,
        roleId: 4,
      };
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
      await axios
        .post(`${this.apiLink}auth/check_for_account`, data)
        .then((res) => {
          this.setState({ successMessage: res.data.message });
          ReactGA.event({
            category: "OTP",
            action: "Received OTP",
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
  }

  async OTPverfication(otp) {
    const data = {
      mobile: this.state.mobile,
      otp: otp,
    };
    await axios
      .post(`${this.apiLink}auth/verify_otp`, data)
      .then((res) => {
        this.setState({ user_info: res.data });
        this.setState({ token: res.data.accessToken });
        sessionStorage.setItem("token", res.data.accessToken);
        this.setState({ successMessage: res.data.message });
        this.setState({ isVerified: true });
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
    const data = {
      mobile: this.state.mobile,
    };
    sessionStorage.removeItem("token");
    await axios
      .post(`${this.apiLink}auth/resend_otp`, data)
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

  async addCustomer(event) {
    event.preventDefault();
    const data = {
      name: this.state.name,
      email: this.state.email,
      addressOne: this.state.addressOne,
      addressTwo: this.state.addressTwo,
      cityId: 1, //coiambatore
      stateId: 1, //tamilnadu
      latitude: sessionStorage.getItem("lat"),
      longitude: sessionStorage.getItem("long"),
    };
    await axios
      .post(`${this.apiLink}after_login/customer/update_details`, data, {
        headers: {
          "x-access-token": `${sessionStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        this.setState({ user_info: res.data });
        this.setState({ successMessage: res.data.message });
        ReactGA.event({
          category: "Customer",
          action: "Added Customer Details",
          label: this.state.mobile,
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

  async goPayment(event) {
    event.preventDefault();
    let newArray = JSON.parse(sessionStorage.getItem("items"));
    let selectedArray = [];
    newArray.map((items) => {
      for (let item in items) {
        let menu = {
          id: items[item].id,
          quantity: items[item].quantity,
          price: items[item].discountPrice
            ? items[item].discountPrice
            : items[item].originalPrice,
          originalPrice: items[item].originalPrice,
          selectedMenuQuantityMeasurePriceId:
            items[item].selectedMenuQuantityMeasurePriceId,
        };
        selectedArray.push(menu);
      }
    });
    const data = {
      restuarantBranchId: sessionStorage.getItem("restBranchID"),
      total_price: sessionStorage.getItem("totalWithoutTax"),
      latitude: sessionStorage.getItem("lat"),
      longitude: sessionStorage.getItem("long"),
      menus: selectedArray,
      date_of_delivery: sessionStorage.getItem("deliveryDate"),
      time_of_delivery: sessionStorage.getItem("deliveryTime"),
    };
    await axios
      .post(`${this.apiLink}after_login/order/place_order`, data, {
        headers: {
          "x-access-token": `${sessionStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        sessionStorage.clear();
        ReactGA.event({
          category: "Customer",
          action: "Placed Order",
          label: this.state.mobile,
          transport: "beacon",
        });
        window.history.replaceState(null, "", "/");
        window.open(res.data.paymentUrl, "_self");

        this.setState({ paymentSuccessMessage: res.data.message });
      })
      .catch((error) => {
        if (error && error.response && error.response.data) {
          let er = error.response.data.message;
          console.log(er);
          this.setState({ paymentErrorMessage: er });
        } else {
          this.setState({ paymentErrorMessage: error.message });
        }
      });
  }

  editbtn(event) {
    this.setState({
      user_info: {
        accessToken: sessionStorage.getItem("token"),
        customer: {
          createdAt: this.state.user_info.createdAt,
          customer_detail: null,
          email: null,
          id: this.state.user_info.id,
          mobile: this.state.user_info.mobile,
          mobile_verification: this.state.user_info.mobile_verification,
          name: null,
          otp_secret: null,
          password: null,
          remember_token: null,
          role_id: null,
          updatedAt: this.state.user_info.updatedAt,
          uuid: null,
        },
      },
    });

    ReactGA.event({
      category: "Customer",
      action: "Clicked edit to Change his/her information",
      label: this.state.mobile,
    });
  }

  selectAddress = (e) => {
    this.setState({ addressTwo: e.target.value });
  };

  render() {
    return (
      <>
        {}
        <div className="signup ">
          <div className="container">
            <div className="header row mt-30">
              <div className="col-lg-9 col-sm-12">
                <Link to="/">
                  <label className="mb-20">
                    <i class="lni lni-arrow-left"></i> Back to{" "}
                    {sessionStorage.getItem("title")}{" "}
                  </label>
                </Link>
                <h2>Customer Details</h2>
              </div>
              <div className="mt-10 col-lg-3 col-sm-12 d-flex flex-column justify-content-end order-details">
                {sessionStorage.getItem("deliveryDate") && (
                  <h6>
                    Delivery Date:&nbsp;{" "}
                    <strong>{sessionStorage.getItem("deliveryDate")}</strong>{" "}
                  </h6>
                )}
                {sessionStorage.getItem("deliveryTime") && (
                  <h6>
                    Delivery Time:&nbsp;{" "}
                    <strong>{sessionStorage.getItem("deliveryTime")}</strong>{" "}
                  </h6>
                )}
                <h4>
                  Rs.{" "}
                  {Number(sessionStorage.getItem("totalWithoutTax")).toFixed(2)}
                </h4>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-6 col-md-12 col-sm-12">
                <div className="customer-details-form">
                  <GetOTP
                    requestedOTP={this.state.requestedOTP}
                    MhandleChange={this.MhandleChange}
                    requestOTP={this.requestOTP}
                    OTPverfication={this.OTPverfication}
                    resendOTP={this.resendOTP}
                    setOTPValue={this.setOTPValue}
                    successMessage={this.state.successMessage}
                    errorMessage={this.state.errorMessage}
                    minutes={this.state.minutes}
                    seconds={this.state.seconds}
                    isVerified={this.state.isVerified}
                  />

                  {this.state.token &&
                    (this.state.user_info.customer.customer_detail ? (
                      <GetAddress
                        name={this.state.user_info.customer.name}
                        customer_detail={
                          this.state.user_info.customer.customer_detail
                        }
                        successMessage={this.state.successMessage}
                        errorMessage={this.state.errorMessage}
                        editbtn={this.editbtn}
                      />
                    ) : (
                      <NewCustomer
                        addressTwo={this.state.addressTwo}
                        addCustomer={this.addCustomer}
                        handleChange={this.handleChange}
                        successMessage={this.state.successMessage}
                        errorMessage={this.state.errorMessage}
                        selectAddress={this.selectAddress}
                      />
                    ))}
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 mt-40">
                {/* {this.state.user_info.accessToken && <Payment />} */}
                <Payment
                  goPayment={this.goPayment}
                  successMessage={this.state.paymentSuccessMessage}
                  errorMessage={this.state.paymentErrorMessage}
                  check={this.state.user_info.customer.customer_detail}
                />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default SignUp;
