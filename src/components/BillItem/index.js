import React,{Component} from "react"
import BurgerImage from "../../assets/images/food1.jpg"


class BillItem extends React.Component {
    render(){
        return(
            <div class='bag-item'>
                <img src={BurgerImage} class="food-image" alt='burger'/>
                <div class='container-content'>
                    <div className="main-content">
                        <div class="item-detail">
                            <label>need to add icon</label>
                            <h1 style={{color:'#1616bd'}}>{this.props.itemName}</h1>
                            <h6 style={{color:'grey'}}>Containments</h6>
                            {this.props.discount>0&&<h3 style={{color:'grey'}}>{this.props.discount}% OFFER APPLIED</h3>}
                        </div>
                        
                        <div class='price'>
                            {this.props.discount>0?
                                <>
                                <label style={{textDecoration:'line-through'}}>Rs.{this.props.price}</label>
                                <label >Rs.{this.props.price-(this.props.price * this.props.discount/100)}</label>
                                </>
                                :
                                <label>Rs.{this.props.price}</label>
                                }
                        </div>
                    </div>
                    <div className='top-up'>
                            <button >Extra Cheese</button>
                            <button >Extra suger</button>
                            <button >Extra Patty</button>
                        </div>
                    
                    
                    

                </div>
                
                <div class = 'quantity'>
                    <button name='sub' onClick={this.props.decreasequantity}>-</button>
                    <label>{this.props.quantity}</label>
                    <button name='add' onClick={this.props.increasequantity}>+</button>
                </div>
                <div className='cancelbutton'>
                <button >X</button>

                </div>
                </div>
            
        )
    }
}

export default BillItem