import {LatLng} from "leaflet";
import {createAction} from "redux-actions";
import {ItemTypeCode} from "../components/MapFrame/Items";

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
