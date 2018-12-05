import {combineReducers} from "redux";
import checkReducer, {ICheckState} from "./checkReducer";
import mapReducer, {IMapState} from "./mapReducer";
import ptoReducer, {IItemsState} from "./ptoReducer";

export interface IRootState {
    check: ICheckState,
    map: IMapState,
    pto: IItemsState,
}

const rootReducer = combineReducers<IRootState>({
    check: checkReducer,
    map: mapReducer,
    pto: ptoReducer,
});

export default rootReducer;
