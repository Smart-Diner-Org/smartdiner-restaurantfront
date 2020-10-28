import React, { Component } from "react";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.ele = [];
    this.dropDown = [];
    this.state = {
      is_visible: false,
      sticky_sideMenu: false,
    };

    this.onDropdownSelected = this.onDropdownSelected.bind(this);
    this.toggleVisibility = this.toggleVisibility.bind(this);
  }
  componentDidMount() {
    this.dropDown.value && this.props.setType(this.dropDown[0].value);
    this.ele[0].click();
    var scrollComponent = this;
    document.addEventListener("scroll", function (e) {
      scrollComponent.toggleVisibility();
    });
  }

  toggleVisibility() {
    if (
      window.pageYOffset > document.getElementById("product").offsetTop &&
      window.pageYOffset <
        document.getElementById("product").offsetTop +
          document.getElementById("product").offsetHeight -
          250
    ) {
      this.setState({
        is_visible: true,
      });
    } else {
      this.setState({
        is_visible: false,
      });
    }

    if (
      window.pageYOffset > (document.getElementById("product").offsetTop + 20) &&
      window.pageYOffset <
        document.getElementById("product").offsetTop +
          document.getElementById("product").offsetHeight -
          300
    ) {
      this.setState({
        sticky_sideMenu: true,
      });
    } else {
      this.setState({
        sticky_sideMenu: false,
      });
    }
  }

  onDropdownSelected(id) {
    this.props.setType(id);
    window.scrollTo({
      top: document.getElementById("product").offsetTop + 1,
      behavior: "smooth",
    });
  }

  render() {
    const { is_visible, sticky_sideMenu } = this.state;
    return (
      <div class="col-lg-3 col-md-4">
        <div class="collection-menu text-center mt-20">
          <div
            class={
              sticky_sideMenu
                ? "nav flex-column nav-pills desktop desktop-sticky"
                : " nav flex-column nav-pills desktop"
            }
            id="v-pills-tab"
            role="tablist"
            aria-orientation="vertical"
          >
            {this.props.categoryArray.map((category, index) => {
              return (
                <a
                  href="/"
                  ref={(a) => (this.ele[index] = a)}
                  id={`${category.name}`}
                  data-toggle="pill"
                  onClick={() => {
                    this.onDropdownSelected(category.id);
                    return false;
                  }}
                >
                  {category.name}
                </a>
              );
            })}
          </div>
          <div
            id="menu-drop-down"
            className={is_visible ? "mobile sticky" : "mobile"}
          >
            <select
              className="menu-dropdown"
              onChange={(e) => this.onDropdownSelected(e.target.value)}
            >
              {this.props.categoryArray.map((category, index) => {
                return (
                  <option
                    ref={(option) => (this.dropDown[index] = option)}
                    className={index === 0 ? "active" : ""}
                    value={`${category.id}`}
                    data-toggle="pill"
                  >
                    {category.name}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
      </div>
    );
  }
}
export default Menu;
