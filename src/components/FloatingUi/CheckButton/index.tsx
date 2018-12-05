import {Fab} from "@material-ui/core";
import {Autorenew, Check} from "@material-ui/icons";
import {withStyles} from "@material-ui/styles";
import * as React from "react";
import './index.css'

export interface ICheckButtonFromState {
    inProgress: boolean,
}

export interface ICheckButtonForDispatch {
    click: any,
}

export type ICheckButtonProps = ICheckButtonFromState & ICheckButtonForDispatch;

const Fab2 = withStyles({
    disabled: {
        backgroundColor: 'rgba(0,0,0,0.2) !important',
        color: 'rgb(0,0,0) !important',
    },
})(Fab);

const CheckButton = (p: ICheckButtonProps) => (
    <Fab2 className="CheckButton" disabled={p.inProgress} color="primary" variant="extended" onClick={p.click}>
        {p.inProgress ? <Autorenew className="Autorenew"/> : <Check/>}
        {p.inProgress ? "In progress" : "Verify"}
    </Fab2>
);

export default CheckButton;
