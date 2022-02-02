
import React from "react";


export default function Map() {
  const google = window.google 

  
  const map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 40.712776, lng: -74.005974},
    zoom: 8,
    mapId: '2ef2dbafe148d19'
    });
   
  return <div className="map">
     
    



  </div>;
}
