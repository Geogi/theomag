import Button from "@material-ui/core/Button/Button";
import {CallMerge, Delete, Dns, FullscreenExit, Home, Transform} from "@material-ui/icons";
import {Icon} from "leaflet";
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

export enum ItemTypeCode {
    OJN,
    DP,
    CP,
    OE,
    JU
}

interface IItemType {
    leafIcon: Icon,
    name: ItemTypeCode,
    symbol: JSX.Element,
}

export const itemTypes: IItemType[] = [
    {name: ItemTypeCode.OJN, symbol: <Dns/>, namePart: "dns"},
    {name: ItemTypeCode.DP, symbol: <Transform/>, namePart: "transform"},
    {name: ItemTypeCode.CP, symbol: <CallMerge/>, namePart: "call_merge"},
    {name: ItemTypeCode.OE, symbol: <Home/>, namePart: "home"},
    {name: ItemTypeCode.JU, symbol: <FullscreenExit/>, namePart: "fullscreen_exit"},
].map(({name, symbol, namePart}) => ({
    leafIcon: new Icon({
        iconUrl: `/assets/baseline_${namePart}_black_24dp.png`
    }),
    name,
    symbol,
}));

const findIcon = (me: ItemTypeCode) => itemTypes.find(({name}) => me === name)!.leafIcon;

const Items = (p: IItemsProps) => (
    <React.Fragment>
        {p.items.map((t: IMapItem) => (
            <Marker key={t.key} position={t.pos} icon={findIcon(t.typ)}>
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
