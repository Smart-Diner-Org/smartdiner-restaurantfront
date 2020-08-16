import React from "react"
import "./index.css"
import ChefImg from './chef.jpg'
import axios from 'axios';
import {Link} from 'react-router-dom'


class StatusPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            
            data : null,
            flag1 : false,
            flag2 : false,
            flag3 : false,
            flag4 : false,
            progress: "",
        }
        
    }


    async componentDidMount(){
        try {
          setInterval(
            await axios.get(`https://dee890a08845.ngrok.io/before_login/order/id/status`)
            .then(res => {
              const data = res.data;
              console.log(data)
              this.setState({
                data : data,
                  });     
                 
            }), 600000);
        } 
        catch(error){
            console.log(error)
        }
        
        
        if(this.state.datat.stage_id===1 || this.state.data.stage_id===2){
            this.setState({
                flag1 : true,
                progress : "25%"
            })
        }
        else if(this.state.data.stage_id===3 || this.state.data.stage_id===4){
            this.setState({
                flag1 : true,
                flag2 : true,
                progress : "50%"
            })
        }
        else if(this.state.data.stage_id===5 || this.state.data.stage_id===6){
            this.setState({
                flag1 : true,
                flag2 : true,
                flag3 : true,
                progress : "75%"
            })
        }
        else if(this.state.data.stage_id===7 || this.state.data.stage_id===8){
            this.setState({
                flag1 : true,
                flag2 : true,
                flag3 : true,
                flag4 : true,
                progress : "100%"
            })
        }

  }



    render(){
        // this.check()
        return(
            <div>
            <div className="container customerStatusContainer">
                <div className="header">
                    <div className="row">
                        <div className="col">
                            <h1>Track order</h1>
                        </div>
                    </div>
                    <div className="row ">
                        <div className="col-6">
                            <p className="date mt-10">wed,12 july</p>
                            <p className="orderId mt-10">Order id: efgi-987</p>
                        </div>
                        <div className="col-6 d-flex justify-content-end">
                            <div className="priceBg">
                                <h1 className="price">{this.state.data.totalAmount}</h1>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 mt-10">
                            <h4 className="etaTime mb-4">ETA : 10min <i className="lni lni-alarm-clock"></i></h4>
                        </div>
                    </div>
                </div>


                <div className="deliveryProgressContainer">
                    <div className="row mt-2">
                        <div className="col-lg-1 col-1 deliveryProgress">
                            <div className="progress progress-bar-vertical">
                                <div className="progress-bar" role="progressbar" aria-valuenow="30" aria-valuemin="100"
                                    aria-valuemax="0" style={{height: `${this.state.progress}`}}>
                                    <span className="sr-only"></span>
                                </div>
                            </div>
                        </div>
                   
                    
                    <div className="col-lg-5 col-11 d-flex flex-column justify-content-around">
                        <div className={this.state.flag1 ?"progressDetails ":"progressDetails inactive"}>
                            <div className="row">
                                <div className="orderIcon">
                                    <img className="icon shopping-bag" aria-hidden="true" alt=""/>
                                </div>
                                <div className="orderDetails ml-2">
                                    <h4 className="orderTitle">Order placed</h4>
                                    <p className="description">3x parathas</p>
                                </div>
                            </div>
                        </div>
                        <div className={this.state.flag2 ?"progressDetails":"progressDetails inactive"}>
                            <div className="row">
                                <div className="orderIcon">
                                    <img className="icon restaurant-icon" aria-hidden="true" alt=""/>
                                </div>
                                <div className="orderDetails ml-2">
                                    <h4 className="orderTitle">Food is being prepared</h4>
                                    <p className="description">{this.state.data.resturantName} is preparing your food till then.</p>
                                    <p className="description">Till then <a href="https://google.com"
                                            target="blank">https://google.com</a></p>
                                </div>
                            </div>
                        </div>

                        <div className={this.state.flag3 ?"progressDetails":"progressDetails inactive"}>
                            <div className="row">
                                <div className="orderIcon">
                                    <img className="icon delivery-icon" aria-hidden="true" alt=""/>
                                </div>
                                <div className="orderDetails ml-2">
                                    <h4 className="orderTitle">Out for delivery</h4>
                                    <div className="deliveryGuy container">
                                        <div className="row">
                                            <img src="" alt=""/>
                                            <div className="deliveryGuyDetails">
                                                <p>Delivery guy <i className="lni lni-phone"></i></p>
        <p>{this.state.data.resturantContactNumber}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={this.state.flag4 ?"progressDetails":"progressDetails inactive"}>
                            <div className="row">
                                <div className="orderIcon">
                                    <img className="icon shopping-bag" aria-hidden="true" alt=""/>
                                </div>
                                <div className="orderDetails ml-2">
                                    <h4 className="orderTitle">Lets start eating</h4>
                                    <p className="description">Dont forget to rate</p>
                                    <i className="fa fa-star checked" aria-hidden="true"></i>
                                    <i className="fa fa-star checked" aria-hidden="true"></i>
                                    <i className="fa fa-star checked" aria-hidden="true"></i>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-sm-0 restaurantDetails">
                        <Link to="/">
        <h1 className="mb-5">{this.state.data.resturantName}</h1>
                        </Link>
                        <div className="restaurantImages">
                            <div className="row">
                                <div className="col-3 d-flex flex-column justify-content-between">
                                    <img src={ChefImg}
                                        className="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}"
                                        alt=""/>
                                    <img src={ChefImg}
                                        className="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}"
                                        alt=""/>
                                    <img src={ChefImg}
                                        className="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}"
                                        alt=""/>
                                </div>
                                <div className="col-9">
                                    <img src={ChefImg}
                                        className="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}"
                                        alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>

                    <div className="container">
                        <div className="address row mt-5 ">
                            <div className="col-6 d-flex flex-column justify-content-around">
                                <h6>Delivery address:</h6>
        <p>{this.state.data.name}</p>
                        <p>{this.state.deliveryAddressOne}</p>
                        <p>{this.state.deliveryAddressTwo}</p>
                                                {/* <p>Pincode</p> */}
                            </div>
                            <div className="location col-6 pt-10 d-flex flex-column justify-content-around">
                                <h6>Restaurant Contact details</h6>
        <p>{this.state.data.resturantContactNumber}</p><br/>
                                <p>{this.state.data.resturantEmailID}</p><br/>
        <p>{this.state.data.resturantAddress}</p><br/>
                            </div>
                        </div>
                    </div>
                </div>
                </div>

                <div className="status-footer">
                    <p>Powered by <a href="https://smartdiner.co" target="_lank">Smart Diner</a></p>
                </div>



            </div>
        )
    }
}

export default StatusPage;