import React,{Component} from "react"
import Burger from '../../assets/images/food1.jpg'

class Item extends Component {
    constructor(props) {
        super(props);
   this.state={
       price: this.props.priceList[0].price,
       quantity: this.props.priceList[0].quantity ,
   }
   
      this.priceListChanged = this.priceListChanged.bind(this)
      this.updateQuantity = this.updateQuantity.bind(this)
      }

      priceListChanged(e){
        
        const index = e.target.value
        const price = this.props.priceList[index].price
        this.setState({
            price:price,
        })
        this.updateQuantity(index)
      }

      updateQuantity(index){
          const quantity = this.props.priceList[index].quantity 
          this.setState({
            quantity:quantity
        })
      }

    render(){
        return(
            <div id={ "product_"+this.props.productId } className="col-md-4 " style={{ marginBlockEnd : '2rem',marginBlockStart : '1.5rem'}}>
              
                            <div className="single-product-items">
                                <div className="product-item-image">
                                {this.props.image?
                                    <>
                                    <a><img loading="lazy" src={this.props.image} alt="Product"/> </a>
                                    </>
                                    :
                                    <a><img loading="lazy" src={Burger} alt="Product"/> </a>
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
                                        <h5 className="product-title"><a>{this.props.itemName}</a></h5>
                                        {this.props.discount>0?
                                        <>
                                        <span style={{color:"#c4c4c4",textDecoration:"line-through"}}>Rs.{this.state.price}</span>
                                        <span style={{color:"#000000"}}>Rs.{(this.state.price-(this.state.price*(this.props.discount/100)))}</span>
                                        <input type='hidden' id={ "original_price_"+this.props.productId } value={this.state.price}></input>
                                        <input type='hidden' id={ "discounted_price_"+this.props.productId } value={(this.state.price-(this.state.price*(this.props.discount/100)))}></input>
                                        
                                        </>
                                        :
                                        <>
                                         <span style={{color:"#000000"}}>Rs.{this.state.price}</span>
                                         <input type='hidden' id={ "original_price_"+this.props.productId } value={this.state.price}></input>
                                        </>
                                    }
                                    <div>
                                    <select id={ "price_list_"+this.props.productId } onChange={(e)=>{this.priceListChanged(e)}}>
                                                {this.props.priceList.map((item, index)=>{
                                                    return (
                                                    <option id={`${item.id}`} value={index}>{item.quantity_values.quantity}{item.measure_values.name}- Rs.{item.price}</option>
                                                    )
                                                })}
                                                
                                        </select>

                                    </div>
                                    
                                        
                                    <div className="input-group mb-3 mt-10" style={{ width:"fit-content",border:"1px solid black", borderRadius:"23px",maxWidth:"112px"}}>
                                        <div className="input-group-prepend" >
                                            <button className="button-round" style={{borderLeft:"0px"}}
                                                type="button" onClick={()=>{this.props.decreasequantity();this.updateQuantity(document.getElementById("price_list_"+this.props.productId).value)}}>−</button>
                                        </div>
                                        <input type="text" className="total-quantity" value={this.state.quantity?this.state.quantity:0}/>
                                            
                                        <div className="input-group-append">
                                            <button className="button-round" style={{borderRight:"0px"}}
                                                type="button" onClick={()=>{this.props.increasequantity();this.updateQuantity(document.getElementById("price_list_"+this.props.productId).value)}}>+</button>
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