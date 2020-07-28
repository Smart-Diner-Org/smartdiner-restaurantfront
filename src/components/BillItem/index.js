import React,{Component} from "react"
import BurgerImage from "../../assets/images/food1.jpg"


class BillItem extends React.Component {
    render(){
        return(
            <div class='bag-item'>
                <div class='container'>
                    <div className="row">
                        
                        <div className="col-3">
                            <img src={BurgerImage} class="food-image" alt='burger'/>    
                        </div>
                        <div className="col-7">
                            <div className="row-9">
                                <div className="col-7">
                                    <div class="item-detail">
                                        <label className="row-3">icon</label>
                                        <h4 className="row-3" style={{color:'#1616bd'}}>{this.props.itemName}</h4>
                                        <h6 className="row-3" style={{color:'grey'}}>Containments</h6>
                                        {this.props.discount>0&&<h3 className="row-3" style={{color:'grey'}}>{this.props.discount}% OFFER APPLIED</h3>}
                                    </div>
                                </div>
                            <div className="col-5">
                                <div class='price'>
                                    {this.props.discount>0?
                                        <>
                                        <label className="row-6" style={{textDecoration:'line-through'}}>Rs.{this.props.price}</label>
                                        <label className="row-6" >Rs.{this.props.price-(this.props.price * this.props.discount/100)}</label>
                                        </>
                                        :
                                        <label>Rs.{this.props.price}</label>
                                        }
                                </div>
                            </div>
                            </div>
                            <div className="row-3">
                                <div className='top-up'>
                                    <button >Extra Cheese</button>
                                    <button >Extra suger</button>
                                    <button >Extra Patty</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-1">
                            <div class = 'quantity'>
                                <button name='sub' onClick={this.props.decreasequantity}>-</button>
                                <label>{this.props.quantity}</label>
                                <button name='add' onClick={this.props.increasequantity}>+</button>
                            </div>
                        </div>
                        <div className="col-1">
                            <div className='cancelbutton'>
                                <button >X</button>                            </div>
                        </div>
                        
                
                    </div>
                
                </div>
            </div>
        )
    }
}

export default BillItem