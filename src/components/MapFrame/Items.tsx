import Button from "@material-ui/core/Button/Button";
import {ArrowRightAlt, Delete} from "@material-ui/icons";
import * as React from "react";
import {Marker, Popup} from "react-leaflet";
import {findIcon} from "../../model/Item";
import {IMapItem} from "../../reducers/ptoReducer";

export type IItemsProps = IItemsFromState & IItemsForDispatch;

export interface IItemsFromState {
    items: IMapItem[],
    routeFromItem: string | null;
}

export interface IItemsForDispatch {
    eqDel: any,
    routeStart: any,
    routeAddMaybe: any,
}

const Items = (p: IItemsProps) => (
    <React.Fragment>
        {p.items.map((t: IMapItem) => (
            <Marker key={t.key} position={t.pos} icon={findIcon(t.typ)}
                    onClick={p.routeAddMaybe(p.routeFromItem, t.key)}>
                <Popup>
                    <p>
                        Capacity: {t.capacity}
                    </p>
                    <Button variant="text" onClick={p.eqDel(t.key)}>
                        <Delete/>
                    </Button>
                    <Button variant="text" onClick={p.routeStart(t.key)}>
                        <ArrowRightAlt/>
                    </Button>
                </Popup>
            </Marker>
        ))}
    </React.Fragment>
);

export default Items;
