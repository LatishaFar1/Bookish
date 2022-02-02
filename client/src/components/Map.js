
import React from "react";


export default function Map() {
  const google = window.google 

  
  const map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 40.712776, lng: -74.005974},
    zoom: 14.5,
    mapId: '2ef2dbafe148d19'
    });
   
    new google.maps.Marker({
      position: {lat: 40.712511, lng: -74.007905},
      map,
      title:"library",
      icon: {
        url: "https://icons8.com/icon/88049/castle",
        scaledSize: new google.maps.Size(38, 31)
      }
    });

  return <div className="map">
     
    



  </div>;
}
