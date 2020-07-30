import React , {Component} from 'react'
import BagItemList from './BagItemList';
import Delivery from './Delivery';
import BagFoot from './BagFoot';
// import BgImage from './assets/images/bag.png'

class Bag extends Component{  
    
render(){
        return(
            // <Modal backdrop="static">
            <div className="bag-component">
                <header className="bag-header">
                    <div className="row">
                        <div className="col-auto mr-auto">
                        <button className="bag-close" onClick={this.props.closePopup}>X</button>
                        </div>
                        <div className="col-auto" >
                        <label >Your PaperBag</label>
                        <img src='./dummpy.jpg' alt="image"/>
                        </div>

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