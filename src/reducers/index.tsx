import {combineReducers} from "redux";
import mapReducer, {IMapState} from "./mapReducer";
import ptoReducer, {IItemsState} from "./ptoReducer";

export interface IRootState {
    map: IMapState,
    pto: IItemsState,
}

const rootReducer = combineReducers<IRootState>({
    map: mapReducer,
    pto: ptoReducer,
});

export default rootReducer;
