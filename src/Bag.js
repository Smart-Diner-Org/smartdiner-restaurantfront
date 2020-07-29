import React , {Component} from 'react'
import BagHead from './BagHead'
import BagItemList from './BagItemList';

import Delivery from './Delivery';
import BagFoot from './BagFoot';
import Bill from './Bill';
import Modal from "react-bootstrap/Modal"

class Bag extends Component{
    constructor(props){
        super(props);
        
    }

    
    render(){
        return(
            // <Modal backdrop="static">
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
<BagItemList
                            items={this.props.items}
                            changequantity={this.props.changequantity}
                            
                        />

                   
                
                <Delivery />
                <BagFoot />
            </div>
            // </Modal>
        );
    }
}

export default Bag;