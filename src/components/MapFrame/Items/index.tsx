import Button from "@material-ui/core/Button/Button";
import {CallMerge, Delete, Dns, FullscreenExit, Home, Transform} from "@material-ui/icons";
import {DivIcon} from "leaflet";
import * as React from "react";
import {ReactElement} from "react";
import * as ReactDOM from 'react-dom';
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
    leafIcon: DivIcon,
    name: ItemTypeCode,
    symbol: ReactElement<any>,
}

export const itemTypes: IItemType[] = [
    {name: ItemTypeCode.OJN, symbol: <Dns/>},
    {name: ItemTypeCode.DP, symbol: <Transform/>},
    {name: ItemTypeCode.CP, symbol: <CallMerge/>},
    {name: ItemTypeCode.OE, symbol: <Home/>},
    {name: ItemTypeCode.JU, symbol: <FullscreenExit/>},
].map(({name, symbol}) => {
    const div = document.createElement('div');
    ReactDOM.render(symbol, div);
    const ret = {
        leafIcon: new DivIcon({
            html: div.innerHTML
        }),
        name,
        symbol,
    };
    ReactDOM.unmountComponentAtNode(div);
    return ret
});

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
