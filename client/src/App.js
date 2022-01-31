import Map from './components/Map';
import { Wrapper } from "@googlemaps/react-wrapper";
import './App.css';

function App() {

  return (
    <Wrapper apiKey={""}>
      <Map />

    </Wrapper>
    
   
  );
}

export default App;
