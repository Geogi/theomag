import {LatLng} from "leaflet";
import reduceReducer from "reduce-reducers";
import {handleAction} from "redux-actions";
import * as uuid from "uuid";
import {ptoAdd, ptoDel} from "../actions";
import {ItemTypeCode} from "../components/MapFrame/Items";

export interface IMapItem {
    pos: LatLng,
    key: string,
    typ: ItemTypeCode,
}

export type IItemsState = IMapItem[];

const defaultPto: IItemsState = [];

const ptoReducer = reduceReducer(
    handleAction(ptoAdd, (state, action) => state.concat([{
        key: uuid(),
        pos: action.payload!.pos,
        typ: action.payload!.typ,
    }]), defaultPto),
    handleAction(ptoDel, (state, action) =>
        state.filter(({key}) => key !== action.payload), defaultPto),
);

export default ptoReducer;
