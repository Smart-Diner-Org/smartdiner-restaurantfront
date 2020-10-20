import React, { Component } from "react";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.ele = [];
    this.dropDown = [];
    this.state = {
    is_visible: false
  };
    
    this.onDropdownSelected = this.onDropdownSelected.bind(this)
    this.toggleVisibility = this.toggleVisibility.bind(this);
  }
  componentDidMount() {
    this.dropDown.value && this.props.setType(this.dropDown[0].value)
    this.ele[0].click();
    var scrollComponent = this;
    document.addEventListener("scroll", function(e) {
      scrollComponent.toggleVisibility();
    });
  }

  toggleVisibility() {
    if (window.pageYOffset > 1200 && window.pageYOffset < (document.getElementById('product').offsetTop + document.getElementById('product').offsetHeight - 250 )) {
        this.setState({
          is_visible: true
        });
      } else {
        this.setState({
          is_visible: false
        });
      }
  }



  onDropdownSelected(event){
      this.props.setType(event.target.value);
      window.scrollTo({
        top: 1200,
        behavior: "smooth"
      });
  }


  render() {
    const { is_visible } = this.state;
    return (
      <div class="col-lg-3 col-md-4">
        <div class="collection-menu text-center mt-20">
          <div
            class="nav flex-column nav-pills desktop"
            id="v-pills-tab"
            role="tablist"
            aria-orientation="vertical"
          >
      
            {
               this.props.categoryArray.map((category,index)=>{
                                     
                 return(
                 <a href="/" ref={a => this.ele[index] = a} id={`${category.name}`} data-toggle="pill"  onClick={()=>{this.props.setType(category.id);return false}}
                                 >{category.name}</a>
                                          
                         )
                         })
             }  
         </div>
         <div id="menu-drop-down" className={is_visible?"mobile sticky":"mobile"}>
            <select className="menu-dropdown" onChange={(e)=>this.onDropdownSelected(e)} >
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
