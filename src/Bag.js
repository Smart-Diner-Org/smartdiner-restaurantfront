import React , {Component} from 'react'
import BagItemList from './BagItemList';
import Delivery from './Delivery';

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
                
                <BagItemList 
                            items={this.props.items}
                            changequantity={this.props.changequantity}
                            
                        />

                   
                
                <Delivery />
                <footer>
                    <div className='foot-content'>
                        <span className="span-left">Powered by <strong>Smart Diner</strong></span>
                        <span className="span-right"><a href='#'>Terms and Conditions</a>
                        <a href='#'>Contact Us</a></span>
                    </div>
                </footer>
            </div>
            
        );
    }
}

export default Bag;