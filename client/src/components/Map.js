
import React from "react";
import { faBus } from "@fortawesome/free-solid-svg-icons";
import bookish from "./bookish.png"
import { Marker } from "@react-google-maps/api";

export default function Map() {
  const google = window.google 

  
  const map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 40.712776, lng: -74.005974},
    zoom: 16,
    mapId: '2ef2dbafe148d19'
    });
   

    const marker = new google.maps.Marker({
      position: {lat: 40.712511, lng: -74.007905},
      map,
      title:"bookish location",
      animation: google.maps.Animation.DROP
    });

    const infoWindow = new google.maps.InfoWindow({
      content: "Bookish Location"
    })

    marker.addListener("click", () => {
      infoWindow.open(map, marker)
    });

  return <div className="map">
     
    



  </div>;
}
