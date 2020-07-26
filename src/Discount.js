import React,{ Component } from "react"
import DiscountImage from './assets/images/discount1.jpg'


class Discount extends Component {
    render(){
    return(
        <section id="discount-product" class="discount-product pt-100">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="single-discount-product mt-30">
                            <div class="product-image">
                                <img src={DiscountImage} alt="Product"/>
                            </div> 
                            <div class="product-content">
                                <h4 class="content-title mb-15">Your favourite pasta</h4>
                                <a href="#">View Menu <i class="lni-chevron-right"></i></a>
                            </div> 
                        </div> 
                    </div>
                    <div class="col-lg-6">
                        <div class="single-discount-product mt-30">
                            <div class="product-image">
                                <img src={DiscountImage} alt="Product"/>
                            </div> 
                            <div class="product-content">
                                <h4 class="content-title mb-15">Pasta <br/> Discount up to 80%</h4>
                                <a href="#">View Menu <i class="lni-chevron-right"></i></a>
                            </div> 
                        </div> 
                    </div>
                </div> 
            </div> 
        </section>
    )
}
}

export default Discount