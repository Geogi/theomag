import {LatLng} from "leaflet";
import reduceReducer from "reduce-reducers";
import {handleAction} from "redux-actions";
import * as uuid from "uuid";
import {ptoAdd, ptoDel} from "../actions";

export interface IMapItem {
    pos: LatLng,
    key: string,
}

export type IItemsState = IMapItem[];

const defaultPto: IItemsState = [];

const ptoReducer = reduceReducer(
    handleAction(ptoAdd, (state, action) => state.concat([{
        key: uuid(),
        pos: action.payload!
    }]), defaultPto),
    handleAction(ptoDel, (state, action) =>
        state.filter(({key}) => key !== action.payload), defaultPto),
);

export default ptoReducer;
