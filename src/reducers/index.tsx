import {handleAction} from "redux-actions";
import {aCenterMap} from "../actions";

export const centerMap = handleAction(
    aCenterMap,
    (state, {lng, lat, zoom}: any) => {
        return {lng, lat, zoom, ...state};
    },
    {
        lat: 48.755517,
        lng: 2.281012,
        zoom: 17,
    }
);
