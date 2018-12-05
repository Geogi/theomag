import Button from "@material-ui/core/Button/Button";
import {LatLng} from "leaflet";
import * as React from "react";
import {Popup} from "react-leaflet";
import {itemTypes} from "../../model/Item";

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
            {itemTypes.map(({name, symbol}) =>
                <Button key={name} variant="text" onClick={p.add(p.pos, name)}>
                    {symbol}
                </Button>
            )}
        </Popup>
        })
    </React.Fragment>
);

export default NewElement;
