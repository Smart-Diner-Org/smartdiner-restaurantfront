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
                            <p style={{width: '80%'}}>All rights reserved. <a href="#" rel="nofollow">&copy; chinese grill kitchen</a></p>
                            <p style={{marginleft: 'auto'}}>Term and Polices</p>
                        </div> 
                    </div>
                </div> 
            </div>
        </div> 
    </section>
     <a href="#" class="back-to-top"><i class="lni-chevron-up"></i></a>
     </div>
    )
}

export default FootComponent