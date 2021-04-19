import React from "react";
import OTPBox from "./OTPBox";

class GetOTP extends React.Component {
  render() {
    return (
      <div className="mobile-verification ">
        <form>
          <input
            type="tel"
            class="form-control"
            autoFocus
            name="mobile"
            minLength="10"
            maxLength="10"
            placeholder="Enter Mobile Number"
            data-error="Mobile is required."
            required="required"
            value={this.props.mobile}
            onChange={this.props.MhandleChange}
          />

          <div className="row mt-20 d-flex align-items-center" name="OTP">
            {!this.props.isVerified &&
              this.props.requestedOTP &&
              !(this.props.minutes == 0 && this.props.seconds == 0) && (
                <div className="row pl-10 d-inline-flex">
                  <div className="col-10 d-flex">
                    {/*
                    {elementsArray.map((k, i) => (
                      <input
                        className="otp-box "
                        type="number"
                        key={i}
                        ref={(ref) => (refArray[i] = ref)}
                        onKeyUp={(e) =>
                          this.navigateBasedonArrowKeyPressed(e, i)
                        }
                        maxLength="1"
                        minLength="1"
                      />
                      ))} */}
                    <OTPBox
                      setOTPValue={this.props.setOTPValue}
                      OTPverfication={this.props.OTPverfication}
                    />
                    <h6
                      className="col-2 d-flex align-items-center mr-20"
                      style={{ color: "#000466" }}
                    >
                      {this.props.minutes}:
                      {this.props.seconds < 10
                        ? `0${this.props.seconds}`
                        : this.props.seconds}
                      <strong style={{ marginLeft: "5px", fontSize: "18px" }}>
                        <i class="lni lni-timer"></i>
                      </strong>
                    </h6>
                  </div>
                </div>
              )}
            <div className="col-lg-12 col-md-12 col-sm-12 mt-10 d-flex align-item-center">
              {!this.props.requestedOTP && !this.props.isVerified && (
                <button type="submit" onClick={this.props.requestOTP}>
                  Get OTP
                </button>
              )}
              {this.props.requestedOTP && (
                <>
                  {this.props.minutes == 0 && this.props.seconds == 0 ? (
                    <button onClick={this.props.resendOTP}>Resend OTP</button>
                  ) : (
                    ""
                  )}
                </>
              )}
            </div>

            {!this.props.isVerified && (
              <div className="container mt-20 mb-10 ">
                {this.props.errorMessage ? (
                  <small
                    className="row message ml-1"
                    style={{ color: "#e22a28" }}
                  >
                    {this.props.errorMessage}
                  </small>
                ) : (
                  <small
                    className="row message ml-1"
                    style={{ color: "green" }}
                  >
                    {this.props.successMessage}
                  </small>
                )}
              </div>
            )}
          </div>
        </form>
      </div>
    );
  }
}

export default GetOTP;
