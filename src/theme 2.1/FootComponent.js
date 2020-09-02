import React ,{Component} from 'react'


class FootComponent extends Component{
    render(){
        return(
            <div>

            <section id="footer" class="footer-area mt-50">
            <div class="container">
                <div class="footer-copyright pt-15 pb-15">
                    <div class="row">
                    <div class="col-lg-8">
                    <div class="contact-info pt-25">
                            <h4 class="info-title"  >Contact Info</h4>
                            <ul>
                                <li>
                                    <div class="single-info mt-30">
                                        <div class="info-icon">
                                            <i class="lni-phone-handset mr-10"></i>
                                            <i class="lni lni-whatsapp "></i>
                                        </div>
                                        <div class="info-content ml-20">
                                <p><a href={`https://api.whatsapp.com/send?phone=${this.props.contact_number}`} target="blank">{this.props.contact_number}</a></p>
                                        </div>
                                    </div> 
                                </li>
                                <li>
                                    <div class="single-info mt-30">
                                        <div class="info-icon">
                                            <i class="lni-envelope"></i>
                                        </div>
                                        <div class="info-content">
                                            <p>{this.props.email}</p>
                                        </div>
                                    </div> 
                                </li>
                                <li>
                                    <div class="single-info mt-30">
                                        <div class="info-icon">
                                            <i class="lni-home"></i>
                                        </div>
                                        <div class="row info-content">
                                            <p class="col-lg-5  col-sm-12">{this.props.address}</p>
                                        </div>
                                    </div> 
                                </li>
                            </ul>
                        </div> 
                    </div>
                    <div className="col-lg-4 d-flex pt-25 " >
                        <div className ="d-flex-column">
                                <h6 style={{color: 'white'}}>SOCIAL MEDIA</h6>
                                <ul className="social text-right mt-10">
                                                {
                                                    this.props.links.facebook_link && <li><a href={`${this.props.links.facebook_link}`} target="blank" ><i className="lni-facebook-filled"></i></a></li>
                                                }
                                                {
                                                    this.props.links.instagram_link && <li><a href={`${this.props.links.instagram_link }`} target="blank" ><i className="lni-instagram"></i></a></li>
                                                }
                                                {
                                                    this.props.links.twitter_link && <li><a href={`${this.props.links.twitter_link }`} target="blank"><i className="lni-twitter-original"></i></a></li>
                                                }
                                                {
                                                    this.props.links.youtube_link && <li><a href={`${this.props.links.youtube_link }`} target="blank"><i class="lni lni-youtube"></i></a></li>
                                                }
                                                
                                            </ul>

                        </div>
                        
                    </div>
                    </div>
                    <div className="row">
                    <div class="col-lg-12 mt-30">
                            <div  style={{width: '100%', display: 'flex',justifycontent: 'space-between'}}>
                                <p style={{width: '70%'}}>All rights reserved. <a href="#" rel="nofollow">&copy; {this.props.restaurantName}</a></p>
                                {/* <ul className="social text-right">
                                    {
                                        this.props.links.facebook_link && <li><a href={`${this.props.links.facebook_link}`} target="blank" ><i className="lni-facebook-filled"></i></a></li>
                                    }
                                    {
                                        this.props.links.instagram_link && <li><a href={`${this.props.links.instagram_link }`} target="blank" ><i className="lni-instagram"></i></a></li>
                                    }
                                    {
                                        this.props.links.twitter_link && <li><a href={`${this.props.links.twitter_link }`} target="blank"><i className="lni-twitter-original"></i></a></li>
                                    }
                                    {
                                        this.props.links.youtube_link && <li><a href={`${this.props.links.youtube_link }`} target="blank"><i class="lni lni-youtube"></i></a></li>
                                    }
                                    
                                 </ul> */}
                            </div> 
                        </div>
                    </div>
                </div>
            </div> 
        </section>
        
         </div>
        )
    }
}
   


export default FootComponent