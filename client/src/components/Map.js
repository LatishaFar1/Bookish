
import React, {useEffect, useRef} from "react";

export default function Map() {
    const ref = useRef();

    useEffect(() => {
      new window.google.maps.Map(ref.current, {
        center: {lat: 40.713050, lng: -74.007230 },
        zoom: 10,
      });
    });
   
  return <div ref={ref} id="map">
      <h1>Map</h1>
    



  </div>;
}
