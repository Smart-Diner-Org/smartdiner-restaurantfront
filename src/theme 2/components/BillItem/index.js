import React,{Component} from "react"
import BurgerImage from "../../assets/images/food1.jpg"


class BillItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            removeItem : true,
        }
      
        this.removeItem = this.removeItem.bind(this)
    }
    removeItem() {
        this.setState({
            removeItem : !this.state.removeItem
          });
    }
    
    render(){
        return(
            
            <div class='bag-item'>
                {this.state.removeItem &&
                <div class='container'>
                
                    <div className="row">
                    <div className="col-3">
                        
                            <img src={BurgerImage} class="food-image" alt='burger'/>    
                       
                    </div>
                    <div className="col-9" >
                        <div className="row">
                            <label className="col-auto mr-auto"> icon</label>
                            <div className="col-auto">
                                <button className='cancelbutton' onClick={this.state.removeItem}>X</button>                            
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-5 des">
                            <h4 className="itemname"  >{this.props.itemName}</h4>
                            <h6 className="containment" >Containments</h6>
                            </div>
                            
                            <div class='col-2 price-display' style={{display:"flex",flexDirection:"column"}}>
                                            {this.props.discount>0?
                                                <>

                                                <label className="disc-price">Rs.{this.props.price}</label>
                                                <label   >Rs.{ this.props.discountPrice }</label>
                                                </>
                                                :
                                                <label >Rs.{this.props.price}</label>

                                                }


                                        </div>
                                        <div className="col-4">
                                            <div className="quantity">
                                <button name='sub' onClick={this.props.decreasequantity}>-</button>
                                    <label >{this.props.quantity}</label>
                                <button name='add' onClick={this.props.increasequantity}>+</button>
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
                        <div className="row">
                            <div className='top-up'>
                                <button className="col-3" >Extra Cheese</button>
                                <button className="col-3" >Extra suger</button>
                                <button className="col-3" >Extra Patty</button>
                            </div>
                        </div>
                       
                
                    </div>
                    </div>
    
                </div>
    }
            </div>
        )
                        
    }
}

export default BillItem