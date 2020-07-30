import React,{ Component } from 'react'
import Item from './components/Item'


const breakfast = 'breakfast';
const dinner = 'dinner';
const lunch = 'lunch';
const burger = 'burger';
const pizza = 'pizza';

class Product extends Component{
  
    render(){
        return(
            <section id="product" class="product-area pt-100 pb-130">
                {console.log(this.props.categoryArray)}
                <div class="container">
                    <div class="row">
                        <div class="col-lg-3 col-md-4">
                            <div class="collection-menu text-center mt-30">
                                <h4 class="collection-tilte">Menu</h4>
                                <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist"
                                    aria-orientation="vertical">
                                    <a class="active" id="breakfast-tab" data-toggle="pill" href="#breakfast" role="tab"
                                        aria-controls="breakfast" aria-selected="true" onClick={()=>this.props.setType(breakfast)}>Breakfast</a>

                                    <a id="lunch-tab" data-toggle="pill" href="#lunch" role="tab" aria-controls="lunch"
                                        aria-selected="false" onClick={()=>this.props.setType(lunch)}>Lunch</a>

                                    <a id="dinner-tab" data-toggle="pill" href="#dinner" role="tab" aria-controls="dinner"
                                        aria-selected="false" onClick={()=>this.props.setType(dinner)}>Dinner</a>

                                    <a id="v-pills-outdoor-tab" data-toggle="pill" href="#v-pills-outdoor" role="tab"
                                        aria-controls="v-pills-outdoor" aria-selected="false"onClick={()=>this.props.setType(burger)}>Burgers</a>

                                    <a id="v-pills-storage-tab" data-toggle="pill" href="#v-pills-storage" role="tab"
                                        aria-controls="v-pills-storage" aria-selected="false" onClick={()=>this.props.setType(pizza)}>Pizza</a>
                                </div> 
                            </div> 
                        </div>

                        
                        <div class="col-lg-9 col-md-8">
                            <div class="tab-content" id="v-pills-tabContent">
                            <div class="tab-pane fade show active" id={this.props.selectedType} role="tabpanel" aria-labelledby={`${this.props.selectedType}-tab`}>
                            <div class="product-items mt-30">
                <div class="row product-items-active">
                
                                

                                {
                                        this.props.items.map((item, index) => {
                                        // if(item.type===this.props.selectedType)
                                        return <Item
                                            key={index}
                                            quantity={item.quantity}
                                            itemName={item.name}
                                            imgLink={item.imgLink}
                                            regularPrice={item.regularPrice}
                                            discount={item.discount}
                                            discountPrice={item.discountPrice}
                                            increasequantity={() => this.props.changequantity(index, 1)}
                                            decreasequantity={() => this.props.changequantity(index, -1)}
                                        />
                                    })
                                }
         
                                </div>
                                </div>
                            </div>
                            </div>
                           

                        </div>

                    </div>
                </div>
                
        </section>
        );
    }
}

export default Product;
