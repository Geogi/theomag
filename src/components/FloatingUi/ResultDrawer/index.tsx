import {
    AppBar,
    Button,
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Toolbar,
    Typography
} from "@material-ui/core";
import {CheckCircle, Close, Warning} from "@material-ui/icons";
import {withStyles} from "@material-ui/styles";
import * as React from "react";
import {IMessage} from "../../../reducers/checkReducer";

export interface IResultDrawerFromState {
    errors: IMessage[],
    open: boolean,
}

export interface IResultDrawerForDispatch {
    close: any,
}

export type IResultDrawerProps = IResultDrawerFromState & IResultDrawerForDispatch;

const DrawerW = withStyles({
    paper: {
        width: 360,
    },
})(Drawer);

const TypographyRight = withStyles({
    root: {
        flexGrow: 1,
    },
})(Typography);

const ListOffset = withStyles({
    root: {
        marginTop: 48,
    },
})(List);

const ResultDrawer = (p: IResultDrawerProps) => (
    <DrawerW anchor="left" open={p.open} onClose={p.close} variant="persistent">
        <AppBar>
            <Toolbar variant="dense">
                <TypographyRight variant="h6">
                    Results
                </TypographyRight>
                <Button>
                    <Close onClick={p.close}/>
                </Button>
            </Toolbar>
        </AppBar>
        <ListOffset>
            {p.errors.map((err) =>
                <ListItem key={err.key}>
                    <ListItemIcon>
                        <Warning/>
                    </ListItemIcon>
                    <ListItemText>
                        {err.content}
                    </ListItemText>
                </ListItem>
            )}
            {p.errors.length === 0 &&
            <ListItem>
                <ListItemIcon>
                    <CheckCircle/>
                </ListItemIcon>
                <ListItemText>
                    No problem found.
                </ListItemText>
            </ListItem>
            }
        </ListOffset>
    </DrawerW>
);

export default ResultDrawer;
