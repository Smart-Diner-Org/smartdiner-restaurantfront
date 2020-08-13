import React from "react"
import "./index.css"
import ChefImg from './chef.jpg'
import axios from 'axios';


class StatusPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            stage: null,
        }
        
    }


    async componentDidMount() {
        try {
          setInterval(
            await axios.get(`https://f65498dbd740.ngrok.i/before_login/order/78/status`)
            .then(res => {
              const data = res.data;
              this.setState({
                stage: data.stage_id,
                  });     
                 
            }), 600000);
        } 
        catch(error){
            console.log(error)
        }
  }



    render(){
        return(
            <div>
            <div className="container customerStatusContainer">
                <div class="header">
                    <div class="row">
                        <div class="col">
                            <h1>Track order</h1>
                        </div>
                    </div>
                    <div class="row ">
                        <div class="col-6">
                            <p class="date mt-10">wed,12 july</p>
                            <p class="orderId mt-10">Order id: efgi-987</p>
                        </div>
                        <div class="col-6 d-flex justify-content-end">
                            <div class="priceBg">
                                <h1 class="price">Rs.349.00</h1>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12 mt-10">
                            <h4 class="etaTime mb-4">ETA : 10min <i class="lni lni-alarm-clock"></i></h4>
                        </div>
                    </div>
                </div>


                <div class="deliveryProgressContainer">
                    <div class="row mt-2">
                        <div class="col-lg-1 col-1 deliveryProgress">
                            <div class="progress progress-bar-vertical">
                                <div class="progress-bar" role="progressbar" aria-valuenow="30" aria-valuemin="100"
                                    aria-valuemax="0" style={{height: "60%"}}>
                                    <span class="sr-only"></span>
                                </div>
                            </div>
                        </div>
                   
                    
                    <div class="col-lg-5 col-11 d-flex flex-column justify-content-around">
                        <div class="progressDetails ">
                            <div class="row">
                                <div class="orderIcon">
                                    <img class="icon shopping-bag" aria-hidden="true"/>
                                </div>
                                <div class="orderDetails ml-2">
                                    <h4 class="orderTitle">Order placed</h4>
                                    <p class="description">3x parathas</p>
                                </div>
                            </div>
                        </div>
                        <div class="progressDetails inactive">
                            <div class="row">
                                <div class="orderIcon">
                                    <img class="icon restaurant-icon" aria-hidden="true"/>
                                </div>
                                <div class="orderDetails ml-2">
                                    <h4 class="orderTitle">Food is being prepared</h4>
                                    <p class="description">Chinese grill is preparing your food till then.</p>
                                    <p class="description">Till then <a href="https://google.com"
                                            target="_blank">Https://google.com</a></p>
                                </div>
                            </div>
                        </div>

                        <div class="progressDetails ">
                            <div class="row">
                                <div class="orderIcon">
                                    <img class="icon delivery-icon" aria-hidden="true"/>
                                </div>
                                <div class="orderDetails ml-2">
                                    <h4 class="orderTitle">Out for delivery</h4>
                                    <div class="deliveryGuy container">
                                        <div class="row">
                                            <img src="" alt=""/>
                                            <div class="deliveryGuyDetails">
                                                <p>Delivery guy name <i class="lni lni-phone"></i></p>
                                                <p>+929488473837</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="progressDetails inactive">
                            <div class="row">
                                <div class="orderIcon">
                                    <img class="icon shopping-bag" aria-hidden="true"/>
                                </div>
                                <div class="orderDetails ml-2">
                                    <h4 class="orderTitle">Lets start eating</h4>
                                    <p class="description">Dont forget to rate</p>
                                    <i class="fa fa-star checked" aria-hidden="true"></i>
                                    <i class="fa fa-star checked" aria-hidden="true"></i>
                                    <i class="fa fa-star checked" aria-hidden="true"></i>
                                    <i class="fa fa-star" aria-hidden="true"></i>
                                    <i class="fa fa-star" aria-hidden="true"></i>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-6 col-sm-0 restaurantDetails">
                        <h1 class="mb-5">A3 biriyani</h1>
                        <div class="restaurantImages">
                            <div class="row">
                                <div class="col-3 d-flex flex-column justify-content-between">
                                    <img src={ChefImg}
                                        class="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}"
                                        alt=""/>
                                    <img src={ChefImg}
                                        class="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}"
                                        alt=""/>
                                    <img src={ChefImg}
                                        class="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}"
                                        alt=""/>
                                </div>
                                <div class="col-9">
                                    <img src={ChefImg}
                                        class="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}"
                                        alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>

                    <div class="container">
                        <div class="address row mt-5 ">
                            <div class="col-6 d-flex flex-column justify-content-around">
                                <h6>Delivery address:</h6>
                                <p>name</p>
                                <p>address line 1</p>
                                <p>address line 2</p>
                                <p>Pincode</p>
                            </div>
                            <div class="location col-6 d-flex justify-content-around align-items-center">Location</div>
                        </div>
                    </div>
                </div>
                </div>

                <div class="footer">
                    <p>Powered by <a href="https://smartdiner.co" target="_lank">Smart Diner</a></p>
                </div>



            </div>
        )
    }
}

export default StatusPage;