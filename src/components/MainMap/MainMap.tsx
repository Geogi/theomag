import 'leaflet-defaulticon-compatibility';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css';
import 'leaflet/dist/leaflet.css';
import * as React from 'react';
import {Map as LeafLetMap, Marker, TileLayer} from "react-leaflet";
import {IPto} from "../../reducers";
import './MainMap.css';

const MainMap = ({lat, lng, zoom, ptoAdd, pto}: any) => (
    <LeafLetMap center={[lat, lng]} zoom={zoom} onclick={ptoAdd}>
        <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        />
        {pto.map((pos: IPto) => (
            <Marker key={pos.key} position={[pos.y, pos.x]}/>
        ))}
    </LeafLetMap>
);

export default MainMap;
