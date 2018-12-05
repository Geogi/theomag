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

export const findIcon = (me: ItemTypeCode) => itemTypes.find(({name}) => me === name)!.leafIcon;
