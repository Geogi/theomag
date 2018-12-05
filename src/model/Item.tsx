import {CallMerge, Dns, FullscreenExit, Home, Transform} from "@material-ui/icons";
import {DivIcon} from "leaflet";
import * as React from "react";
import {ReactElement} from "react";
import * as ReactDOM from "react-dom";

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
    defaultCapacity: number,
}

const itemTypesNoIcon = [
    {name: ItemTypeCode.OJN, symbol: <Dns/>, defaultCapacity: 144},
    {name: ItemTypeCode.DP, symbol: <Transform/>, defaultCapacity: 48},
    {name: ItemTypeCode.CP, symbol: <CallMerge/>, defaultCapacity: 6},
    {name: ItemTypeCode.OE, symbol: <Home/>, defaultCapacity: 1},
    {name: ItemTypeCode.JU, symbol: <FullscreenExit/>, defaultCapacity: Infinity},
];

export const itemTypes: IItemType[] = itemTypesNoIcon.map((values) => {
    const div = document.createElement('div');
    ReactDOM.render(values.symbol, div);
    const ret = {
        ...values,
        leafIcon: new DivIcon({
            html: div.innerHTML
        }),
    };
    ReactDOM.unmountComponentAtNode(div);
    return ret
});

export const findIcon = (me: ItemTypeCode) => itemTypes.find(({name}) => me === name)!.leafIcon;
export const findDefaultCapacity = (me: ItemTypeCode) =>
    itemTypes.find(({name}) => me === name)!.defaultCapacity;
