import React from 'react'


function FootComponent(){
    return(
        <div>
        <section id="footer" class="footer-area mt-200">
        <div class="container">
            <div class="footer-copyright pt-15 pb-15">
                <div class="row">
                    <div class="col-lg-12">
                        <div  style={{width: '100%',
   
   display: 'flex',
   justifycontent: 'space-between'}}>
                            <p style={{width: '70%'}}>All rights reserved. <a href="#" rel="nofollow">&copy; chinese grill kitchen</a></p>
                            <ul className="social text-right">
                                <li><a href="#"><i className="lni-facebook-filled"></i></a></li>
                                <li><a href="#"><i className="lni-twitter-original"></i></a></li>
                                <li><a href="#"><i className="lni-instagram"></i></a></li>
                             </ul>
                            <p style={{marginleft: 'auto'}}>Term and Polices</p>
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