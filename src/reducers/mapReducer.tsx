import {LatLng} from "leaflet";
import reduceReducer from "reduce-reducers";
import {handleAction} from "redux-actions";
import {mapReset, popupNewHide, popupNewShow} from "../actions";

const defaultLatLng = new LatLng(48.785238, 2.328381);

export interface IMapState {
    center: LatLng,
    newPopupShowing: boolean,
    newPos: LatLng,
    zoom: number,
}

const defaultMap: IMapState = {
    center: defaultLatLng,
    newPopupShowing: false,
    newPos: defaultLatLng,
    zoom: 17,
};

const mapReducer = reduceReducer(
    handleAction(mapReset, () => defaultMap, defaultMap),
    handleAction(popupNewShow, (state, action) => ({
        ...state,
        newPopupShowing: true,
        newPos: action.payload!,
    }), defaultMap),
    handleAction(popupNewHide, (state) => ({
        ...state,
        newPopupShowing: false,
    }), defaultMap)
);

export default mapReducer;
