import reduceReducer from "reduce-reducers";
import {combineReducers} from "redux";
import {handleAction} from "redux-actions";
import {IPtoPos, mapReset, ptoAdd} from "../actions";

const defaultMap = {
    lat: 48.755517,
    lng: 2.281012,
    zoom: 17,
};

const mapReducer = reduceReducer(
    handleAction(mapReset, () => defaultMap, defaultMap)
);

const defaultPto: IPtoPos[] = [];

const ptoReducer = reduceReducer(
    handleAction(ptoAdd, (state, action) => {
        return action.payload && state.concat([action.payload]);
    }, defaultPto)
);

export default combineReducers({
    map: mapReducer,
    pto: ptoReducer
});
