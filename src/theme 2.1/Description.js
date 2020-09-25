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

                {/* { this.props.preOrder && <div class="d-flex mt-20 justify-content-center align-items-center" style={{width:"100%",backgroundColor:"black"}}>
                    <h5 class="mt-10 mb-10 " style={{color:"white"}} >We also provide Pre-Order service</h5>
                        </div> } */}
                {/* <div class="d-flex mt-20 justify-content-center align-items-center" style={{width:"100%",border: "1px solid black", borderRadius:"8px"}}>
                    <h5 class="mt-10 mb-10 " style={{color:"black"}} >We also provide Pre-Order service</h5>
                </div>  */}
            </div> 
        </section>
        )
    }
}


export default Description;