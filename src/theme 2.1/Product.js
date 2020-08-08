import React,{ Component } from 'react'
import Item from './components/Item'
import Menu from './Menu'





class Product extends Component{


    render(){
        return(
            <section id="product" className="product-area pt-100 pb-130">
            
                <div className="container">
                <div className="row " >
                <h2 className="col-lg-3 col-md-4 collection-tilte">Menu</h2>
                
            </div>
                    <div className="row">
                        <Menu categoryArray={this.props.categoryArray}
                        setType = {this.props.setType}
                        />
                      
                        <div className="col-lg-9 col-md-8">
                            <div className="tab-content" id="v-pills-tabContent">
                            <div className="tab-pane fade show active" id={this.props.selectedType} role="tabpanel" aria-labelledby={`${this.props.selectedType}-tab`}>
                            <div className="product-items mt-30">
                                <div className="row product-items-active">
                
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
