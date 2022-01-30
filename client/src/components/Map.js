import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import React, {useState} from "react";

export default function Map() {

    const containerStyle = {
        width: '400px',
        height: '400px'
      };
      
      const center = {
        lat: -3.745,
        lng: -38.523
      };
      
      function MyComponent() {
        const { isLoaded } = useJsApiLoader({
          id: 'google-map-script',
          googleMapsApiKey: "AIzaSyCaPsMiWKYIXhHeVUJi02-lEYbLSSpG7Lg"
        }) }
      
        const [map, setMap] = React.useState(null)
      
        const onLoad = React.useCallback(function callback(map) {
          const bounds = new window.google.maps.LatLngBounds();
          map.fitBounds(bounds);
          setMap(map)
        }, [])
      
        const onUnmount = React.useCallback(function callback(map) {
          setMap(null)
        }, [])


  return <div id="map">
      <h1>Map</h1>
    

 {/* aPI key = AIzaSyCaPsMiWKYIXhHeVUJi02-lEYbLSSpG7Lg */}

  </div>;
}
