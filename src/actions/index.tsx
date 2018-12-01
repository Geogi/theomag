import {createAction} from "redux-actions";

export const aCenterMap = createAction(
    'CENTER_MAP',
    ({lng, lat, zoom}: any) => ({lng, lat, zoom}));
