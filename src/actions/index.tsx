import {LatLng} from "leaflet";
import {createAction} from "redux-actions";

export const mapReset = createAction('MAP_RESET', () => {/**/
});
export const ptoAdd = createAction('PTO_ADD', (pos: LatLng) => pos);
export const ptoDel = createAction('PTO_DEL', (key: string) => key);
export const popupNewShow = createAction('POPUP_NEW_SHOW', (pos: LatLng) => pos);
export const popupNewHide = createAction('POPUP_NEW_HIDE', () => {/**/
});
