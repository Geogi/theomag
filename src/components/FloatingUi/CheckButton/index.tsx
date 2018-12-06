import {Fab} from "@material-ui/core";
import {Autorenew, Check} from "@material-ui/icons";
import {withStyles} from "@material-ui/styles";
import * as React from "react";
import {ICheckRequest} from "../../../remote";
import './index.css'

export interface ICheckButtonFromState {
    inProgress: boolean,
    dataToSend: ICheckRequest
}

export interface ICheckButtonForDispatch {
    click: any,
}

export type ICheckButtonProps = ICheckButtonFromState & ICheckButtonForDispatch;

const FabLighter = withStyles({
    disabled: {
        backgroundColor: 'rgba(0,0,0,0.2) !important',
        color: 'rgb(0,0,0) !important',
    },
})(Fab);

const CheckButton = (p: ICheckButtonProps) => (
    <FabLighter className="CheckButton" disabled={p.inProgress} color="primary" variant="extended"
                onClick={p.click(p.dataToSend)}>
        {p.inProgress ? <Autorenew className="Autorenew"/> : <Check/>}
        {p.inProgress ? "In progress" : "Verify"}
    </FabLighter>
);

export default CheckButton;
