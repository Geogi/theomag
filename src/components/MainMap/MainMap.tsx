import Button from "@material-ui/core/Button/Button";
import {Delete} from "@material-ui/icons";
import 'leaflet-defaulticon-compatibility';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css';
import 'leaflet/dist/leaflet.css';
import * as React from 'react';
import {Map as LeafLetMap, Marker, Popup, TileLayer} from "react-leaflet";
import {IPto} from "../../reducers";
import './MainMap.css';

const MainMap = ({lat, lng, zoom, ptoAdd, ptoDel, pto}: any) => (
    <LeafLetMap center={[lat, lng]} zoom={zoom} ondblclick={ptoAdd} doubleClickZoom={false}>
        <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        />
        {pto.map((pos: IPto) => (
            <Marker key={pos.key} position={[pos.y, pos.x]}>
                <Popup>
                    <Button variant="flat" color="primary">
                        <Delete onClick={ptoDel(pos.key)}/>
                    </Button>
                </Popup>
            </Marker>
        ))}
    </LeafLetMap>
);

export default MainMap;
