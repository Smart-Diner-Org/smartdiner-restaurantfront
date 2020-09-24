import React from "react"

class Description extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            location : (this.props.delivery_locations ? this.props.delivery_locations.split(",") : null)
        }
    }
    
 
    render(){
        return(
            <section  class="about-area mt-50 pt-50 ">
            <div class="container">
                <div class="row">
                    <div class="col-lg-3">
                        <div class="section-title">
                            <h5 class="mb-15">Our Delivey Locations</h5>
                        </div>
                    </div>
                    <div class="col-lg-9">
                        <ul className="row d-flex justify-content-around ">
                            {
                                this.state.location ? 
                                this.state.location.map((item) => {
                                    return(

                                        <ol class="font-weight-bold col-lg-3 col-md-12 col-sm-12"><i class="lni lni-map-marker mr-10 "></i>{item}</ol>  
                                    )
                                })

                            :
                          " "
                        }
                        </ul>
                    </div>
                </div>
               
            </div> 
        </section>
        )
    }
}


export default Description;