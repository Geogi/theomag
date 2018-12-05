import {LatLng} from "leaflet";
import reduceReducer from "reduce-reducers";
import {handleAction} from "redux-actions";
import * as uuid from "uuid";
import {ptoAdd, ptoDel, routeAdd, routeDel, routeStart} from "../actions";
import {ItemTypeCode} from "../model/Item";

export interface IMapItem {
    pos: LatLng,
    key: string,
    typ: ItemTypeCode,
}

export interface IRoute {
    downstream: string,
    key: string,
    upstream: string,
}

export interface IItemsState {
    items: IMapItem[],
    routes: IRoute[],
    routeFromItem: string | null;
}

const defaultPto: IItemsState = {
    items: [],
    routeFromItem: null,
    routes: [],
};

const ptoReducer = reduceReducer(
    handleAction(ptoAdd, (state, action) => ({
        ...state,
        items: state.items.concat([{
            key: uuid(),
            pos: action.payload!.pos,
            typ: action.payload!.typ,
        }])
    }), defaultPto),
    handleAction(ptoDel, (state, action) => ({
        ...state,
        items: state.items.filter(({key}) => key !== action.payload!)
    }), defaultPto),
    handleAction(routeStart, (state, action) => ({
        ...state,
        routeFromItem: action.payload!,
    }), defaultPto),
    handleAction(routeAdd, (state, action) => ({
        ...state,
        routeFromItem: null,
        routes: state.routes.concat([{
            downstream: action.payload!.downstream,
            key: uuid(),
            upstream: action.payload!.upstream,
        }])
    }), defaultPto),
    handleAction(routeDel, (state, action) => ({
        ...state,
        routes: state.routes.filter(({key}) => key !== action.payload!)
    }), defaultPto),
);

export default ptoReducer;
