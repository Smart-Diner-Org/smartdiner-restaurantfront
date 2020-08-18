import React,{Component} from "react"
import BurgerImage from "../../assets/images/food1.jpg"


class BillItem extends Component {
    
    
    
    render(){
        return(
            
            <div class='bag-item'>
                
                <div class='container'>
                
                    <div className="row d-flex align-items-center">
                    <div className="col-3 p-0">
                        <div style={{height:"100%",width:"100%",maxHeight:"100px",maxWidth:"100px" ,display:"flex",alignItems:"centre",borderRadius: "8px"}}>
                                {this.props.image?
                                    <>
                                    <a href="#"><img src={this.props.image} alt="Product"/> </a>
                                    </>
                                    :
                                    <a href="#"><img src={BurgerImage} alt="Product"/> </a>
                                }   
                        </div>
                    </div>
                    <div className="col-9" >
                        <div className="row">
                            <label className="col-auto mr-auto" style={{color:"#e22a28"}}><i class="lni lni-dinner" ></i></label>
                            <div className="col-auto">
                                <button className='cancelbutton' onClick={this.props.removeItem}>X</button>                            
                            </div>
                        </div>
                        <div className="row mt-10 mb-10">
                            <div className="col-5 des">
                            <h4 className="itemname"  >{this.props.itemName}</h4>
                            {/* <h6 className="containment" >Containments</h6> */}
                            <h6 className="containment" >{this.props.description}</h6>

                            </div>
                            
                            <div class='col-3 price-display' style={{display:"flex",flexDirection:"column"}}>
                                            {this.props.discount>0?
                                                <>

                                                <label className="disc-price">Rs.{this.props.price}</label>
                                                <label   >Rs.{ this.props.discountPrice }</label>
                                                </>
                                                :
                                                <label >Rs.{this.props.price}</label>

                                                }


                                        </div>
                                        <div className="col-4 ">
                                            <div className="quantity">
                                <button name='sub' className="d-flex  " onClick={this.props.decreasequantity}>-</button>
                                    <label >{this.props.quantity}</label>
                                <button name='add' className="d-flex  " onClick={this.props.increasequantity}>+</button>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                           
                            
                            
                        </div>
                        <div className="row col-6">
                         {this.props.discount>0 ?
                         <>
                            <h3 className="offer-applied" >{this.props.discount}% OFFER APPLIED</h3>
                            </>
                            :
                            <div><br/></div>
                            }
                        </div>
                        {/* <div className="row">
                            <div className='top-up'>
                                <button className="col-3" >Extra Cheese</button>
                                <button className="col-3" >Extra suger</button>
                                <button className="col-3" >Extra Patty</button>
                            </div>
                        </div> */}
                       
                
                    </div>
                    </div>
    
                </div>
    
            </div>
        )
                        
    }
}

export default BillItem