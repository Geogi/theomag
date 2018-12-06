import {LatLng} from "leaflet";
import 'leaflet-defaulticon-compatibility';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css';
import 'leaflet/dist/leaflet.css';
import * as React from 'react';
import {Map as LeafLetMap} from "react-leaflet";
import ItemsCont from "../../containers/MapFrame/ItemsCont";
import NewElementCont from "../../containers/MapFrame/NewElementCont";
import RoutesCont from "../../containers/MapFrame/RoutesCont";
import './index.css';
import Layers from "./Layers";

export type IMapFrameProps = IMapFrameFromState & IMapFrameForDispatch;

export interface IMapFrameFromState {
    center: LatLng,
    zoom: number,
}

export interface IMapFrameForDispatch {
    showItemPopup: any,
}

const MapFrame = (p: IMapFrameProps) => (
    <LeafLetMap className="LeafLetMap" center={p.center} zoom={p.zoom} ondblclick={p.showItemPopup}
                doubleClickZoom={false} zoomControl={false}>
        <Layers/>
        <ItemsCont/>
        <NewElementCont/>
        <RoutesCont/>
    </LeafLetMap>
);

export default MapFrame;
