import {LatLng} from "leaflet";
import 'leaflet-defaulticon-compatibility';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css';
import 'leaflet/dist/leaflet.css';
import * as React from 'react';
import {Map as LeafLetMap} from "react-leaflet";
import ItemsCont from "../../containers/ItemsCont";
import NewElementCont from "../../containers/NewElementCont";
import RoutesCont from "../../containers/RoutesCont";
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

export default (p: IMapFrameProps) => (
    <LeafLetMap center={p.center} zoom={p.zoom} ondblclick={p.showItemPopup} doubleClickZoom={false}>
        <Layers/>
        <ItemsCont/>
        <NewElementCont/>
        <RoutesCont/>
    </LeafLetMap>
);
