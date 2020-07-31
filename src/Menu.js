import React,{ Component } from "react";

class Menu extends Component{
    async autoClick() {
        // await this.menuElement.click ;
        await console.log("i'm inside here")
      }
    
    render(){
        return(
                <div class="col-lg-3 col-md-4">
                    <div class="collection-menu text-center mt-30">
                        <h4 class="collection-tilte">Menu</h4>
                        <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist"
                            aria-orientation="vertical">
                                {
                                    this.props.categoryArray.map((category,index)=>{
                                     
                                        return(

                                           

<a ref={a => this.menuElement = a} className={index===0?"active":""} onload={index===0? this.autoClick() : ""} id={`${category.name}`} data-toggle="pill"  onClick={()=>this.props.setType(category.id)}
                                aria-selected="true" >{category.name}</a>
                                          
                                           
                                            
                                        )
                                    })
                                }                           
                        </div> 
                    </div> 
                </div>

        );
    };

   
};
export default Menu;
