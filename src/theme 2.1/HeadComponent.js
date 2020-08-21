import React ,{ Component } from "react"
import BagImage from "./assets/images/bag.png"
import Logo from "./assets/images/logo.png"



class HeadComponent extends Component {
    constructor(props) {
		super(props);

		this.state = { showPopup: false };

        this.handleScroll = this.handleScroll.bind(this);
	}

	handleScroll() {
		this.setState({scroll: window.scrollY});
	}
  
  componentDidMount() {
        const el = document.querySelector('header'); 
        this.setState({top: el.offsetTop, height: el.offsetHeight});
		window.addEventListener('scroll', this.handleScroll);
	}
  
    
    render(){
    return (
        <header className={this.state.scroll > this.state.top ? " header-area header-area-sticky" : "header-area"}>
        
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <nav className="navbar navbar-expand-lg">
                        <a className="navbar-brand d-inline-flex" style={{margin:"0px"}} href="./">
                            {
                                this.props.logo?
                                <>
                                <img src={this.props.logo} style={{width:"50px",maxHeight:"50px"}} alt="Logo"/>
                                </>
                                :
                                <img src={Logo} style={{width:"50px",maxHeight:"50px"}} alt="Logo"/>    
                            }
                            <h4 className="pl-20 d-flex align-items-center">{this.props.restaurantName}</h4>
                        </a> 
                         
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span className="bar-icon"></span>
                            <span className="bar-icon"></span>
                            <span className="bar-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul id="nav" className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <a data-scroll-nav="0" href="#about">About</a>
                                </li>
                                <li className="nav-item">
                                    <a data-scroll-nav="0" href="#location">Location</a>
                                </li>
                                <li className="nav-item">
                                    <a data-scroll-nav="0" href="#product">Menu</a>
                                </li>
                                <li className="nav-item">
                                    <a data-scroll-nav="0" href="#contact">Contact</a>
                                </li>
                                
                            </ul> 
                        </div>
                        <div className="headlogo" >
                            {/* {this.props.total==0 && <span className="tooltiptext">Your Cart is Empty</span>} */}
                                    <a data-scroll-nav="0" href="#" onClick={this.props.togglePopup} >
                                        <img src={BagImage} className="img-responsive cart" alt="Cart"/>
                                        <span className="badge">{this.props.total}</span>
                                    </a> 
                         </div>
                    </nav> 
                </div>
            </div> 
        </div> 
        
    </header>

    
    );
    }
}

export default HeadComponent