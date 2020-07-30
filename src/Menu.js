import React,{ Component } from "react";

class Menu extends Component{
    
    
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
                                            <a class="active" id={`${category.name}`} data-toggle="pill" href="#breakfast" role="tab"
                                aria-controls="breakfast" 
                                onClick={()=>this.props.setType(category.id)}
                                aria-selected="true" >{category.name}</a>
                                        )
                                    })
                                }
                            

                            {/* <a id="lunch-tab" data-toggle="pill" href="#lunch" role="tab" aria-controls="lunch"
                                aria-selected="false" >Lunch</a>

                            <a id="dinner-tab" data-toggle="pill" href="#dinner" role="tab" aria-controls="dinner"
                                aria-selected="false" onClick={()=>this.props.setType(dinner)}>Dinner</a>

                            <a id="v-pills-outdoor-tab" data-toggle="pill" href="#v-pills-outdoor" role="tab"
                                aria-controls="v-pills-outdoor" aria-selected="false"onClick={()=>this.props.setType(burger)}>Burgers</a>

                            <a id="v-pills-storage-tab" data-toggle="pill" href="#v-pills-storage" role="tab"
                                aria-controls="v-pills-storage" aria-selected="false" onClick={()=>this.props.setType(pizza)}>Pizza</a> */}
                        </div> 
                    </div> 
                </div>

        );
    };
};
export default Menu;
