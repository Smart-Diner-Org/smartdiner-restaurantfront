import React,{Component} from "react"
import Burger from '../../assets/images/food1.jpg'

class Item extends Component {
    render(){
        return(
            
                
            <div class="col-md-4 " style={{ marginBlockEnd : '2rem'}}>
              
                
                            <div class="single-product-items">
                                <div class="product-item-image">
                                {this.props.image?
                                    <>
                                    <a href="#"><img src={this.props.image} alt="Product"/> </a>
                                    </>
                                    :
                                    <a href="#"><img src={Burger} alt="Product"/> </a>
        }  
        
                                    {this.props.discount>0?
                                    <>
                                    <div class="product-discount-tag">
                                        <p>-{this.props.discount}%</p>
                                    </div>
                                    </>
                                    :
                                    ""
                                }           
                                    </div>
                                <div class="product-item-content mt-30">
                                        <h5 class="product-title"><a href="#">{this.props.itemName}</a></h5>
                                        <p>Containments</p>
                                        {this.props.discount>0?
                                        <>
                                        <span style={{color:"#c4c4c4",textDecoration:"line-through"}}>{this.props.regularPrice}</span>
                                        <span style={{color:"#000000"}}>{this.props.discountPrice}</span>
                                        
                                        </>
                                        :
                                        <span style={{color:"#000000"}}>{this.props.regularPrice}</span>
                                    }
                                        
                                    <div class="input-group mb-3 mt-10" style={{ maxWidth : '120px'}}>
                                        <div class="input-group-prepend">
                                            <button class="btn btn-outline-primary js-btn-minus"
                                                type="button" onClick={this.props.decreasequantity}>−</button>
                                        </div>
                                        <input type="text" class="form-control text-center" value={this.props.quantity}
                                            placeholder="" aria-label="Example text with button addon"
                                            aria-describedby="button-addon1"/>
                                        <div class="input-group-append">
                                            <button class="btn btn-outline-primary js-btn-plus"
                                                type="button" onClick={this.props.increasequantity}>+</button>
                                        </div>
                                    </div>
                                    <ul class="rating">
                                        <li><i class="lni-star-filled"></i></li>
                                        <li><i class="lni-star-filled"></i></li>
                                        <li><i class="lni-star-filled"></i></li>
                                        <li><i class="lni-star-filled"></i></li>
                                        <li><i class="lni-star-filled"></i></li>
                         
                                    </ul>
                                    </div>
                                    </div>
                            </div>   
                         
                
                    
               
            
        )
    }
}

export default Item