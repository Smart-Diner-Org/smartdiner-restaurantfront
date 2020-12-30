import React, { Component } from "react";
import Whatsup from "./assets/images/whatsup.png";

export default class ScrollToTop extends Component {
  render() {
    return (
      <div className={this.props.total > 0 && "whatsup-icon-mobile"}>
        <a
          href={`https://api.whatsapp.com/send?phone=91${this.props.contact_number}`}
          target="blank"
          className="whatsup-icon"
        >Chat with us
          <img loading="lazy" src={Whatsup} alt="whatsapp" />
        </a>
      </div>
    );
  }
}
