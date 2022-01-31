import Map from './components/Map';
import Marker from './components/Marker';
import { Wrapper } from "@googlemaps/react-wrapper";
import './App.css';

function App() {



  return (
    <Wrapper apiKey={""}>
      <Map>
        <Marker></Marker>
      </Map>

    </Wrapper>
    
   
  );
}

export default App;
