import {Button} from "@material-ui/core";
import {Delete} from "@material-ui/icons";
import {LatLng} from "leaflet";
import * as React from "react";
import {Polyline, Popup} from "react-leaflet";

interface IRouteDisplay {
    upstream: LatLng,
    downstream: LatLng,
    key: string,
}

export interface IRoutesFromState {
    routes: IRouteDisplay[]
}

export interface IRoutesForDispatch {
    routeDel: any,
}

export type IRoutesProps = IRoutesFromState & IRoutesForDispatch;

const Routes = (p: IRoutesProps) => (
    <React.Fragment>
        {p.routes.map(({key, upstream, downstream}) =>
            <Polyline key={key} positions={[upstream, downstream]}>
                <Popup>
                    <Button variant="text" onClick={p.routeDel(key)}>
                        <Delete/>
                    </Button>
                </Popup>
            </Polyline>
        )}
    </React.Fragment>
);

export default Routes;
