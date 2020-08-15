import React from "react"

let location;
class Description extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            location : this.props.delivery_locations.split(",")
        }
    }
    
    // componentDidMount(){
    //     location=this.props.delivery_locations.split(",")
    // }

    render(){
        return(
            <section  class="about-area mt-50 pt-50 ">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="section-title">
                            <h5 class="mb-15">Our Delivey Locations</h5>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <ul className="d-flex justify-content-around ">
                            {
                                this.state.location.map((item) => {
                                    return(

                                        <ol class="font-weight-bold"><i class="lni lni-map-marker mr-10 "></i>{item}</ol>  
                                    )
                                })

                            } 
                         
                        </ul>
                    </div>
                </div>
                {/* <div class="row">
                    
                    <div class="col-lg-12">
    
                        <div class="about-right mt-45">
                            <div class="row justify-content-center">
                                <div class="col-md-6 col-sm-8">
                                    <div class="about-content mt-20">
                                        <h5 class="title mb-10">About Us</h5>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm od
                                            tempor.</p>
                                    </div>
 
                                </div>
                                
                            </div> 
                        </div> 
                    </div>
                </div>  */}
            </div> 
        </section>
        )
    }
}


export default Description;