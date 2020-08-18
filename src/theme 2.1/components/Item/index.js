import React,{Component} from "react"
import Burger from '../../assets/images/food1.jpg'

class Item extends Component {
    render(){
        return(
            
                
            <div className="col-md-4 " style={{ marginBlockEnd : '2rem',marginBlockStart : '1.5rem'}}>
              
                            <div className="single-product-items">
                                <div className="product-item-image">
                                {this.props.image?
                                    <>
                                    <a href="#"><img src={this.props.image} alt="Product"/> </a>
                                    </>
                                    :
                                    <a href="#"><img src={Burger} alt="Product"/> </a>
                                }  
        
                                    {this.props.discount>0?
                                    <>
                                    <div className="product-discount-tag">
                                        <p>{this.props.discount}% OFF</p>
                                    </div>
                                    </>
                                    :
                                    ""
                                }           
                                    </div>
                                <div className="product-item-content mt-30">
                                        <h5 className="product-title"><a href="#">{this.props.itemName}</a></h5>
                                        {/* <p>Containments</p> */}
                                        <p>{this.props.description}</p>
                                        {this.props.discount>0?
                                        <>
                                        <span style={{color:"#c4c4c4",textDecoration:"line-through"}}>Rs.{this.props.regularPrice}</span>
                                        <span style={{color:"#000000"}}>Rs.{this.props.discountPrice}</span>
                                        
                                        </>
                                        :
                                        <span style={{color:"#000000"}}>Rs.{this.props.regularPrice}</span>
                                    }
                                        
                                    <div className="input-group mb-3 mt-10" style={{ width:"fit-content",border:"1px solid black", borderRadius:"23px",maxWidth:"112px"}}>
                                        <div className="input-group-prepend" >
                                            <button className="button-round" style={{borderLeft:"0px"}}
                                                type="button" onClick={this.props.decreasequantity}>−</button>
                                        </div>
                                        <input type="text" className="total-quantity" value={this.props.quantity}/>
                                            
                                        <div className="input-group-append">
                                            <button className="button-round" style={{borderRight:"0px"}}
                                                type="button" onClick={this.props.increasequantity}>+</button>
                                        </div>
                                    </div>
                                    {/* <ul className="rating">
                                        <li><i className="lni-star-filled"></i></li>
                                        <li><i className="lni-star-filled"></i></li>
                                        <li><i className="lni-star-filled"></i></li>
                                        <li><i className="lni-star-filled"></i></li>
                                        <li><i className="lni-star-filled"></i></li>
                         
                                    </ul> */}
                                    </div>
                                    </div>
                            </div>   
                         
                
                    
               
            
        )
    }
}

export default Item