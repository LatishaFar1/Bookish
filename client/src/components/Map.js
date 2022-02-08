
import React from "react";
import { faBus } from "@fortawesome/free-solid-svg-icons";
import bookish from "./bookish.png"
import { Marker } from "@react-google-maps/api";

export default function Map() {
  const google = window.google 

  
  const map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 40.728378, lng: -73.993876},
    zoom: 13.5,
    mapId: '2ef2dbafe148d19'
    });
   


    const locations = [
      ["Bookish HQ", 40.728378, -73.993876, 1],
      ["Bookish Location", 40.742816, -73.999112, 2],
      ["Bookish Soho Location", 40.724605, -74.002987, 3]
    ]

    for (let i=0; i < locations.length; i++){
      const location = locations[i];

    const marker = new google.maps.Marker({
      position: {lat: location[1], lng: location[2]},
      map,
      title: location[0],
      animation: google.maps.Animation.DROP
    });

    const infoWindow = new google.maps.InfoWindow({
      content: location[0]
    })

    marker.addListener("click", () => {
      infoWindow.open(map, marker)
    });
    }

  return <div className="map">
     
    



  </div>;
}
