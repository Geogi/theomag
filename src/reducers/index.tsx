import reduceReducer from "reduce-reducers";
import {combineReducers} from "redux";
import {handleAction} from "redux-actions";
import * as uuid from "uuid";
import {IPtoPos, mapReset, ptoAdd} from "../actions";

const defaultMap = {
    lat: 48.755517,
    lng: 2.281012,
    zoom: 17,
};

const mapReducer = reduceReducer(
    handleAction(mapReset, () => defaultMap, defaultMap)
);

export interface IPto extends IPtoPos {
    key: string,
}

const defaultPto: IPto[] = [];

const ptoReducer = reduceReducer(
    handleAction(ptoAdd, (state, action) => {
        return action.payload && state.concat([{
            key: uuid(),
            ...action.payload
        }]);
    }, defaultPto)
);

export default combineReducers({
    map: mapReducer,
    pto: ptoReducer
});
