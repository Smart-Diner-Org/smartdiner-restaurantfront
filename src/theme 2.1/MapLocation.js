import React from "react";

function MapLocation(props){
        return(
            <section id="location" class="pt-120 pb-10">
            <div className="container" >
                <div className="google-map ">
                    <iframe loading="lazy"
                        frameborder="0" title="google-map" style={{border:"none",width:"100%",height:"100%"}}
                        src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyDORUh0mGaVxDgP2ZojKCqVmpXnVOZfAS8
                            &q=${props.restaurantName}+${props.address}`} allowfullscreen>
                    </iframe>
                </div>
            </div>
            </section>
        )
}

export default MapLocation;