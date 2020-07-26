import React,{Component} from "react"


class Item extends React.Component {
    render(){
        return(
            
                
            <div class="col-md-4">
                
                            <div class="single-product-items">
                                <div class="product-item-image">
                                
                                    <a href="#"><img src={this.props.imgLink} alt="Product"/></a>
                                    <div class="product-discount-tag">
                                        <p>{this.props.discount}</p>
                                    </div>
                                </div>
                                <div class="product-item-content mt-30">
                                        <h5 class="product-title"><a href="#">{this.props.itemName}</a></h5>
                                        <p>Containments</p>
                                        <span class="discount-price">{this.props.discountPrice}</span>
                                        <span class="regular-price">{this.props.regularPrice}</span>
                                    <div class="input-group mb-3 mt-10" style={{ maxwidth : '120px'}}>
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