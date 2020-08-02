import React,{Component} from "react"
import Burger from '../../assets/images/food1.jpg'

class Item extends Component {
    render(){
        return(
            
                
            <div class="col-md-3 " style={{ marginBlockEnd : '2rem',marginBlockStart : '1.5rem'}}>
              
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
                                        <p>{this.props.discount}% OFF</p>
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
                                        <span style={{color:"#c4c4c4",textDecoration:"line-through"}}>Rs.{this.props.regularPrice}</span>
                                        <span style={{color:"#000000"}}>Rs.{this.props.discountPrice}</span>
                                        
                                        </>
                                        :
                                        <span style={{color:"#000000"}}>Rs.{this.props.regularPrice}</span>
                                    }
                                        
                                    <div class="input-group mb-3 mt-10" style={{ width:"fit-content",border:"1px solid black", borderRadius:"23px"}}>
                                        <div class="input-group-prepend" >
                                            <button class="button-round" style={{borderLeft:"0px"}}
                                                type="button" onClick={this.props.decreasequantity}>−</button>
                                        </div>
                                        <input type="text" className="total-quantity" value={this.props.quantity}/>
                                            
                                        <div class="input-group-append">
                                            <button class="button-round" style={{borderRight:"0px"}}
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