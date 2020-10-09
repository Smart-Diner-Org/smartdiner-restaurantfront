import React, { Component } from "react";
import Whatsup from "./assets/images/whatsup.png"
import ReactGA from 'react-ga';

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

  // scrollToTop() {
  //   window.scrollTo({
  //       top: 0,
  //       behavior: "smooth"
  //     });
  // }

  render() {
    const { is_visible } = this.state;
    return (
        <div className="scroll-to-top">
          {/*
        {is_visible && (<div onClick={() => this.scrollToTop()}>

        <a className="scroll-to-top"><i class="lni-chevron-up"></i></a>
           
          </div>)} */}
           { is_visible &&
            <a href={`https://api.whatsapp.com/send?phone=91${this.props.contact_number}`}
             onClick={()=>{
               ReactGA.event({
              category: "WhatsApp",
              action: "icon clicked",
              value: 1,
            });}} 
            target="blank" className="whatsup-icon">
            <img  loading="lazy" src={Whatsup} alt="whatsapp"/>
            </a>
            }
      </div>
    );
  }
}