import {LatLng} from "leaflet";
import * as React from "react";
import {Polyline} from "react-leaflet";

interface IRouteDisplay {
    upstream: LatLng,
    downstream: LatLng,
    key: string,
}

export interface IRoutesFromState {
    routes: IRouteDisplay[]
}

// tslint:disable-next-line:no-empty-interface TODO
export interface IRoutesForDispatch {
}

export type IRoutesProps = IRoutesFromState & IRoutesForDispatch;

const Routes = (p: IRoutesProps) => (
    <React.Fragment>
        {p.routes.map(({key, upstream, downstream}) =>
            <Polyline key={key} positions={[upstream, downstream]}/>
        )}
    </React.Fragment>
);

export default Routes;
