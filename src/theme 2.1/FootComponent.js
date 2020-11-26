import React from 'react'


function FootComponent (props){
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
                                        <a href={`tel:+91${props.contact_number}`} target="blank"><i rel="preload" class="lni-phone-handset mr-10"></i></a>
                                          {/* <a href={`https://api.whatsapp.com/send?phone=91${props.contact_number}`} target="blank">
                                            <i rel="preload" class="lni lni-whatsapp "></i></a> */}
                                        </div>
                                        <div class="info-content">
                                         <p><a href={`tel:+91${props.contact_number}`} target="blank">+91{props.contact_number}</a></p>
                                        </div>
                                    </div> 
                                </li>
                                <li>
                                    <div class="single-info mt-30">
                                        <div class="info-icon">
                                            {/*<i rel="preload" class="lni-phone-handset mr-10"></i>*/}
                                            <a href={`https://api.whatsapp.com/send?phone=91${props.contact_number}`} target="blank">
                                            <i rel="preload" class="lni lni-whatsapp "></i></a>
                                        </div>
                                        <div class="info-content">
                                         <p><a href={`https://api.whatsapp.com/send?phone=91${props.contact_number}`} target="blank">+91{props.contact_number}</a></p>
                                        </div>
                                    </div> 
                                </li>
                                <li>
                                    <div class="single-info mt-30">
                                        <div class="info-icon">
                                        <a href={`mailto:${props.email}`} target="blank"><i class="lni-envelope"></i></a>
                                        </div>
                                        <div class="info-content">
                                            <p><a href={`mailto:${props.email}`} target="blank">{props.email}</a></p>
                                        </div>
                                    </div> 
                                </li>
                                <li>
                                    <div class="single-info mt-30">
                                        <div class="info-icon">
                                            <i rel="preload" class="lni-home"></i>
                                        </div>
                                        <div class="row info-content">
                                            <p class="col-lg-5  col-sm-12" style={{color:"#ffffff"}}>{props.address}</p>
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
                                                    props.links.facebook_link && <li><a href={`${props.links.facebook_link}`} target="blank" ><i rel="preload" className="lni-facebook-filled"></i></a></li>
                                                }
                                                {
                                                    props.links.instagram_link && <li><a href={`${props.links.instagram_link }`} target="blank" ><i rel="preload" className="lni-instagram"></i></a></li>
                                                }
                                                {
                                                    props.links.twitter_link && <li><a href={`${props.links.twitter_link }`} target="blank"><i rel="preload" className="lni-twitter-original"></i></a></li>
                                                }
                                                {
                                                    props.links.youtube_link && <li><a href={`${props.links.youtube_link }`} target="blank"><i rel="preload" class="lni lni-youtube"></i></a></li>
                                                }
                                                
                                            </ul>

                        </div>
                        
                    </div>
                    </div>
                    <div className="row">
                    <div class="col-lg-12 mt-30">
                            <div  style={{width: '100%', display: 'flex',justifycontent: 'space-between'}}>
                                <p style={{width: '70%'}}>All rights reserved. <a href="/" rel="nofollow">&copy; {props.restaurantName}</a></p>
                                
                            </div> 
                        </div>
                    </div>
                </div>
            </div> 
        </section>
        
         </div>
        )
}
   


export default FootComponent