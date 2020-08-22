import React, { Component } from 'react'
import axios from "axios"

class Contact extends Component{
        constructor(props) {
            super(props);
            this.state={
                name : "",
                email : "",
                message: "",
            }
            this.handleChange = this.handleChange.bind(this)
            this.contact = this.contact.bind(this)

        }

        handleChange(event) {
            const {name, value} = event.target
            this.setState({
                [name]: value,
            })
        }

    async contact(event){
        event.preventDefault()
        const data ={ 
            name : this.state.name,
            email : this.state.email,
            message : this.state.message,
        }
        await axios.post(`${process.env.REACT_APP_BASE_URL}/before_login/restaurant/save_contact_request`,data)
            .then(res => {
                alert(res.data.message)
               
            })
            .catch( (error) => {
                alert(error.response.data.message)
                
            })
    }
 
    render(){
        return(
            <section id="contact" class="contact-area pt-100">
        <div class="container">
            <div class="row justify-content-left">
                <div class="col-lg-6">
                    <div class="contact-title text-left">
                        <h2 class="title">Contact</h2>
                    </div> 
                </div>
            </div> 
            <div class="contact-box mt-70">
                <div class="row">
                    <div class="col-lg-8">
                        <div class="contact-form" onSubmit={this.contact}>
                            <form id="contact-form" action="assets/contact.php" method="post" data-toggle="validator">
                                <div class="row">
                                    <div class="col-lg-6">
                                        <div class="single-form form-group">
                                            <input type="text" name="name" placeholder="Enter Your Name"
                                                data-error="Name is required." required="required" onChange={this.handleChange}/>
                                            <div class="help-block with-errors"></div>
                                        </div> 
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="single-form form-group">
                                            <input type="email" name="email" placeholder="Enter Your Email"
                                                data-error="Valid email is required." required="required" onChange={this.handleChange}/>
                                            <div class="help-block with-errors"></div>
                                        </div> 
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="single-form form-group">
                                            <textarea name="message" placeholder="Enter Your Message"
                                                data-error="Please,leave us a message." required="required" onChange={this.handleChange}></textarea>
                                            <div class="help-block with-errors"></div>
                                        </div> 
                                    </div>
                                    <p class="form-message"></p>
                                    <div class="col-lg-12">
                                        <div class="single-form form-group">
                                            <button class="main-btn"  type="submit">CONTACT NOW</button>
                                        </div>
                                    </div>
                                </div> 
                            </form>
                        </div> 
                    </div>
                    {/* <div class="col-lg-4">
                        <div class="contact-info pt-25">
                            <h4 class="info-title">Contact Info</h4>
                            <ul>
                                <li>
                                    <div class="single-info mt-30">
                                        <div class="info-icon">
                                            <i class="lni-phone-handset"></i>
                                        </div>
                                        <div class="info-content">
                                            <p>+91 9876543210</p>
                                        </div>
                                    </div> 
                                </li>
                                <li>
                                    <div class="single-info mt-30">
                                        <div class="info-icon">
                                            <i class="lni-envelope"></i>
                                        </div>
                                        <div class="info-content">
                                            <p>contact@yourmail.com</p>
                                        </div>
                                    </div> 
                                </li>
                                <li>
                                    <div class="single-info mt-30">
                                        <div class="info-icon">
                                            <i class="lni-home"></i>
                                        </div>
                                        <div class="info-content">
                                            <p>{this.props.address}</p>
                                        </div>
                                    </div> 
                                </li>
                            </ul>
                        </div> 
                    </div> */}


                </div> 
            </div> 
        </div> 
    </section>

        );

    }
}
export default Contact