import React, {useEffect} from 'react';

export default function Marker({ position }: { position: google.maps.LatLngLiteral }) {
 

    useEffect(() => {
      new google.maps.Marker({position});
    });
   
  return null;
}
