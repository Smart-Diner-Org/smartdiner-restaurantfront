import React,{Component} from "react"
import BurgerImage from "../../assets/images/food1.jpg"


class BillItem extends React.Component {
    constructor(props){
        super(props);
        
    }
    
    render(){
        return(
            <div class='bag-item'>
                <div class='container'>
                    <div className="row">
                    <div className="col-3">
                        <div >
                            <img src={BurgerImage} class="food-image" alt='burger'/>    
                        </div>
                    </div>
                    <div className="col-9" >
                        <div className="row">
                            <label className="col-auto mr-auto"> icon</label>
                            <div className="col-auto">
                                <button className='cancelbutton'>X</button>                            
                            </div>
                        </div>
                        <div className="row">
                            <h4 className="col-6" style={{color:'#1616bd'}}>{this.props.itemName}</h4>
                            <div class='col-3'>
                                            {this.props.discount>0?
                                                <>
                                                <label style={{textDecoration:'line-through'}}>Rs.{this.props.regularPrice}</label>
                                                </>
                                                :
                                                ""
                                                }
                                        </div>
                                        <div className="col-3">
                                <button name='sub' onClick={this.props.decreasequantity}>-</button>
                                <label>{this.props.quantity}</label>
                                <button name='add' onClick={this.props.increasequantity}>+</button>
                            </div>
                        </div>
                        <div className="row">
                            <h6 className="col-6" style={{color:'grey'}}>Containments</h6>
                            <label className="col-3">Rs.{this.props.regularPrice}</label>
                            
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