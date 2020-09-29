import React, { Component } from "react";

export default class ScrollToTop extends Component {
  constructor(props) {
      super(props);
      this.state = {
      is_visible: false
    };
    this.toggleVisibility = this.toggleVisibility.bind(this);
    this.scrollToTop = this.scrollToTop.bind(this)

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

  scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
  }

  render() {
    const { is_visible } = this.state;
    return (
        <div className="scroll-to-top">
        {is_visible && (<div onClick={() => this.scrollToTop()}>

           
        <a href="/" onClick={()=>{return false}} className="scroll-to-top"><i class="lni-chevron-up"></i></a>
           
          </div>)}
      </div>
    );
  }
}