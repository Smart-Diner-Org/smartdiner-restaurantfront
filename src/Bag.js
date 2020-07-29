import React , {Component} from 'react'
import BagHead from './BagHead'
import BagItemList from './BagItemList';
import Bill from './Bill';
import Delivery from './Delivery';
import BagFoot from './BagFoot'

class Bag extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="bag-component">
                <header className="bag-header">
                    <div className="left">
                    <button onClick={this.props.closePopup}>x</button>
                    </div>
                    <div className="right">
                    <label >Your PaperBag</label>
                    <img src='./dummpy.jpg' alt="image"/>
                    </div>
                </header>
                {/* <BagHead /> */}
                {/* {JSON.stringify(this.props.items)} */}
                {
                    this.props.items.map((item, index) => {
                        if(item.quantity>=1)
                        return <BagItemList
                            key={index}
                            items={this.props.items}
                            quantity={item.quantity}
                            itemName={item.itemName}
                            price={item.price}
                            discount={item.discount}
                            increasequantity={() => this.props.changequantity(index,1)}
                            decreasequantity={() => this.props.changequantity(index, -1)}
                        />
                    })
                }
                <Delivery />
                <BagFoot />
            </div>
        );
    }
}

export default Bag;