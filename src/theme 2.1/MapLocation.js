import React from "react";

function MapLocation(props) {
  let RestaurantName = props.restaurantName
  let Address = props.address
  RestaurantName = RestaurantName.replace(/[^a-zA-Z0-9 ]/g, "").trim().replace(/\s+/g, " ");
  Address = Address.replace(/[^a-zA-Z0-9 ]/g, "").trim().replace(/\s+/g, " ");
  return (

    <section id="location" class="pt-120 pb-10 location-section">

      <div className="container">
        <div className="google-map">
          <iframe
            loading="lazy"
            frameBorder="0"
            title="google-map"
            style={{ border: "none", width: "100%", height: "100%" }}
            src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyDORUh0mGaVxDgP2ZojKCqVmpXnVOZfAS8&q=${RestaurantName}+${Address}`}
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default MapLocation;
