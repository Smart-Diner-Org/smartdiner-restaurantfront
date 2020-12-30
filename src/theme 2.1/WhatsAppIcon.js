import React, { Component } from "react";
import Whatsup from "./assets/images/whatsup.png";
import ReactGA from "react-ga"

export default class ScrollToTop extends Component {
  render() {
    return (
      <div className={this.props.total > 0 && "whatsup-icon-mobile"}>
        <a onClick={()=> ReactGA.event({
            category: "Home Page",
            action: `Clicked fixed WhatsApp icon`,
            label: `Opens WhatsApp to chat`,
            transport:"beacon"
          })}
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
