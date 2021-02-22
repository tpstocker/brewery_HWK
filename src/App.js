import React from 'react';
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import BreweriesContainer from './containers/BreweriesContainer';
import './App.css';


function App() {
  return (
    <>
    <div className="App">
      <BreweriesContainer></BreweriesContainer>  
    </div>

    <MapContainer center={[40.712776, -74.0059]} zoom={12}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>
        contributors'
      />
    </MapContainer>
    </>
  );
}

export default App;