import Button from "@material-ui/core/Button/Button";
import {Add} from "@material-ui/icons";
import {LatLng} from "leaflet";
import * as React from "react";
import {Popup} from "react-leaflet";

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
            <Button variant="text" color="primary" onClick={p.add(p.pos)}>
                <Add/>
            </Button>
        </Popup>
        })
    </React.Fragment>
);

export default NewElement;
