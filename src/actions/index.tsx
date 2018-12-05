import {LatLng} from "leaflet";
import {createAction} from "redux-actions";
import {ItemTypeCode} from "../model/Item";

export const mapReset = createAction('MAP_RESET', () => {/**/
});

interface IPtoAddPayload {
    pos: LatLng,
    typ: ItemTypeCode
}

export const ptoAdd = createAction('PTO_ADD', (payload: IPtoAddPayload) => payload);
export const ptoDel = createAction('PTO_DEL', (key: string) => key);
export const popupNewShow = createAction('POPUP_NEW_SHOW', (pos: LatLng) => pos);
export const popupNewHide = createAction('POPUP_NEW_HIDE', () => {/**/
});

interface IRouteAddPayload {
    upstream: string,
    downstream: string,
}

export const routeAdd = createAction("ROUTE_ADD", (payload: IRouteAddPayload) => payload);
export const routeStart = createAction("ROUTE_START", (key: string) => key);
export const routeDel = createAction("ROUTE_DEL", (key: string) => key);
