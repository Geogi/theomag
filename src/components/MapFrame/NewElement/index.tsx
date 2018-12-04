import Button from "@material-ui/core/Button/Button";
import {LatLng} from "leaflet";
import * as React from "react";
import {Popup} from "react-leaflet";
import {ITEM_TYPES} from "../Items";

export type INewElementProps = INewElementFromState & INewElementForDispatch;

export interface INewElementFromState {
    pos: LatLng,
    showing: boolean,
}

export interface INewElementForDispatch {
    add: any,
    close: any,
}

const NewElement = (p: INewElementProps) => (
    <React.Fragment>
        {p.showing &&
        <Popup position={p.pos} onClose={p.close}>
            {ITEM_TYPES.map(({name, symbol}) =>
                <Button key={name} variant="text" color="primary" onClick={p.add(p.pos)}>
                    {symbol}
                </Button>
            )}
        </Popup>
        })
    </React.Fragment>
);

export default NewElement;
