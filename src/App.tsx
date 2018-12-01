import 'leaflet-defaulticon-compatibility';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css';
import 'leaflet/dist/leaflet.css';
import * as React from 'react';
import './App.css'

import {Map as LeafLetMap, Marker, Popup, TileLayer} from "react-leaflet";

const position: [number, number] = [48.755517, 2.281012];
const App = () => (
    <LeafLetMap center={position} zoom={17}>
        <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        />
        <Marker position={position}>
            <Popup>A pretty CSS3 popup.<br />Easily customizable.</Popup>
        </Marker>
    </LeafLetMap>
);

export default App;
