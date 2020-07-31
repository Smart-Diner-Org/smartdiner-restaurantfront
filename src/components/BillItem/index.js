import React,{Component} from "react"
import BurgerImage from "../../assets/images/food1.jpg"


class BillItem extends Component {
    constructor(props){
        super(props);
        
    }
    
    render(){
        return(
            <div class='bag-item'>
                <div class='container'>
                    <div className="row">
                    <div className="col-3">
                        
                            <img src={BurgerImage} class="food-image" alt='burger'/>    
                       
                    </div>
                    <div className="col-9" >
                        <div className="row">
                            <label className="col-auto mr-auto"> icon</label>
                            <div className="col-auto">
                                <button className='cancelbutton'>X</button>                            
                            </div>
                        </div>
                        <div className="row">
                            <h4 className="col-6" style={{color:'#000466',fontFamily:"Museo moderno",fontSize:"1.125em"}} >{this.props.itemName}</h4>
                            <div class='col-3'>
                                            {this.props.discount>0?
                                                <>
                                                <label style={{textDecoration:'line-through',color:"#FFC009",fontFamily:"Museo moderno",fontSize:"1.125em"}}>Rs.{this.props.price}</label>
                                                </>
                                                :
                                                ""
                                                }
                                        </div>
                                        <div className="col-3">
                                            <div className="quantity">
                                <button name='sub' onClick={this.props.decreasequantity}>-</button>
                                <label>{this.props.quantity}</label>
                                <button name='add' onClick={this.props.increasequantity}>+</button>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <h6 className="col-6" style={{color:'#828282',fontFamily:"Latto",fontSize:"0.75em"}}>Containments</h6>
                            <label className="col-3" style={{color:'#000466',fontFamily:"Museo moderno",fontSize:"1.125em"}} >Rs.{ this.props.discountPrice }</label>
                            
                        </div>
                        <div className="row">
                         {this.props.discount>0&&<h3 style={{fontSize:"0.875em",color:'#828282',fontFamily:"Museo moderno"}}>{this.props.discount}% OFFER APPLIED</h3>}
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
            </div>
        )
    }
}

export default BillItem