import React, {useEffect} from 'react';

export default function Marker({ position, map }: { position: google.maps.LatLngLiteral }) {
    console.log({position})

    useEffect(() => {
      const marker = new google.maps.Marker({position});
    });
   
  return null;
}
