
import React from "react";
import { RiBookOpenLine } from "react-icons/ri";

export default function Map() {
  const google = window.google 

  
  const map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 40.712776, lng: -74.005974},
    zoom: 14.5,
    mapId: '2ef2dbafe148d19'
    });
   
    const marker = <RiBookOpenLine />;

    new google.maps.Marker({
      position: {lat: 40.712511, lng: -74.007905},
      map,
      title:"library",
      icon: {
        marker,
        scaledSize: new google.maps.Size(38, 31)
      }
    });

  return <div className="map">
     
    



  </div>;
}
