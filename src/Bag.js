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
                <BagItemList />
                <Delivery />
                <BagFoot />
            </div>
        );
    }
}

export default Bag;