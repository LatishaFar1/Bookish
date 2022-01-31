import Map from './components/Map';
import Marker from './components/Marker';
import { Wrapper } from "@googlemaps/react-wrapper";
import './App.css';

function App() {
  const center = {lat: 40.713050, lng: -74.007230}


  return (
    <Wrapper apiKey={""}>
      <Map>
        <Marker position = {center}/>
      </Map>

    </Wrapper>
    
   
  );
}

export default App;
