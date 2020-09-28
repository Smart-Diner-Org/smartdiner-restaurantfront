import React, { Component } from "react";

class Menu extends Component {
  constructor(props) {
    super(props);

    this.ele = [];
    this.onDropdownSelected = this.onDropdownSelected.bind(this)
  }

  componentDidMount() {
    //TODO : find which category has minimum 1 item and assing that value to cataegoryToBeShown variable
    this.props.setType(this.ele[0].value)
  }

  onDropdownSelected(event){
      this.props.setType(event.target.value);
  }


  render() {
    return (
      <div class="col-lg-3 col-md-4">
        <div class="collection-menu text-center mt-20">
          <div
            class="nav flex-column nav-pills"
            id="v-pills-tab"
            role="tablist"
            aria-orientation="vertical"
          >
          <div className="desktop">
            {
               this.props.categoryArray.map((category,index)=>{
                                     
                 return(
                 <a ref={a => this.ele[index] = a} className={index===0?"active":""}  id={`${category.name}`} data-toggle="pill"  onClick={()=>{this.props.setType(category.id)}}
                                aria-selected="true" >{category.name}</a>
                                          
                         )
                         })
             }  
             </div>  
            <select className="menu-dropdown " onChange={(e)=>this.onDropdownSelected(e)} >
              {this.props.categoryArray.map((category, index) => {
                return (
                  <option
                    
                    ref={(a) => (this.ele[index] = a)}
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
