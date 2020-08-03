import React,{ Component } from 'react'
import Item from './components/Item'
import Menu from './Menu'
import Burger from './assets/images/food1.jpg'




class Product extends Component{
// constructor(props){
//     super(props);
//   this.autoclick=this.autoclick.bind(this)
// }
// autoclick(){
//     document.getElementsByClassName('active').click();
// }

    render(){
        return(
            <section id="product" class="product-area pt-100 pb-130">
            
                <div class="container">
                <div className="row " >
                <h2 class="col-lg-3 col-md-4 collection-tilte">Menu</h2>
            </div>
                    <div class="row">
                        <Menu categoryArray={this.props.categoryArray}
                        setType = {this.props.setType}
                        // autoclick={this.autoclick}
                        />
                      
                        <div class="col-lg-9 col-md-8">
                            <div class="tab-content" id="v-pills-tabContent">
                            <div class="tab-pane fade show active" id={this.props.selectedType} role="tabpanel" aria-labelledby={`${this.props.selectedType}-tab`}>
                            <div class="product-items mt-30">
                                <div class="row product-items-active">
                
                                {
                                        this.props.items.map((item, index) => {
                                        if(item.category.id==this.props.selectedType)
                                        return <Item
                                            key={index}
                                            quantity={item.quantity}
                                            itemName={item.name}
                                            image={item.image}
                                            regularPrice={item.price}
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
