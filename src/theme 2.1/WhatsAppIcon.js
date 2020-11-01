import React, { Component } from "react";
import Whatsup from "./assets/images/whatsup.png"

export default class ScrollToTop extends Component {
  constructor(props) {
      super(props);
      this.state = {
      is_visible: false
    };
    this.toggleVisibility = this.toggleVisibility.bind(this);

  }

  componentDidMount() {
    var scrollComponent = this;
    document.addEventListener("scroll", function(e) {
      scrollComponent.toggleVisibility();
    });
  }

  toggleVisibility() {
    if (window.pageYOffset > 300) {
        this.setState({
          is_visible: true
        });
      } else {
        this.setState({
          is_visible: false
        });
      }

  }

  render() {
    const { is_visible } = this.state;
    return (
        <div className={this.props.total>0 && "whatsup-icon-mobile"}>
           { is_visible &&
            <a href={`https://api.whatsapp.com/send?phone=91${this.props.contact_number}`} target="blank" className="whatsup-icon">
            <img  loading="lazy" src={Whatsup} alt="whatsapp"/>
            </a>
            }

      </div>
    );
  }
}