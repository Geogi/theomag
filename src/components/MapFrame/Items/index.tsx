import Button from "@material-ui/core/Button/Button";
import {CallMerge, Delete, Dns, Home, Transform} from "@material-ui/icons";
import * as React from "react";
import {Marker, Popup} from "react-leaflet";
import {IMapItem} from "../../../reducers/ptoReducer";

export type IItemsProps = IItemsFromState & IItemsForDispatch;

export interface IItemsFromState {
    items: IMapItem[],
}

export interface IItemsForDispatch {
    eqDel: any,
}

interface IItemType {
    name: string,
    symbol: JSX.Element,
}

export const ITEM_TYPES: IItemType[] = [
    {name: "OJN", symbol: <Dns/>},
    {name: "DP", symbol: <Transform/>},
    {name: "CP", symbol: <CallMerge/>},
    {name: "OE", symbol: <Home/>},
];

const Items = (p: IItemsProps) => (
    <React.Fragment>
        {p.items.map((t: IMapItem) => (
            <Marker key={t.key} position={t.pos}>
                <Popup>
                    <Button variant="text" color="primary" onClick={p.eqDel(t.key)}>
                        <Delete/>
                    </Button>
                </Popup>
            </Marker>
        ))}
    </React.Fragment>
);

export default Items;
