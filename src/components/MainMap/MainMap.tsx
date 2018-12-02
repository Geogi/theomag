import 'leaflet-defaulticon-compatibility';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css';
import 'leaflet/dist/leaflet.css';
import * as React from 'react';
import {Map as LeafLetMap, TileLayer} from "react-leaflet";
import './MainMap.css'

const MainMap = ({lat, lng, zoom, ptoAdd}: any) => (
    <LeafLetMap center={[lat, lng]} zoom={zoom} onclick={ptoAdd}>
        <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        />
    </LeafLetMap>
);

export default MainMap;
