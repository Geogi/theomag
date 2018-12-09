import {
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Theme,
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

const DrawerFixedWidth = withStyles({
    paper: {
        width: 360,
    },
})(Drawer);

const TypographyRight = withStyles({
    root: {
        flexGrow: 1,
    },
})(Typography);

const ToolbarPrimary = withStyles((theme: Theme) => ({
    root: {
        backgroundColor: theme.palette.primary.main
    }
}))(Toolbar);

const ResultDrawer = (p: IResultDrawerProps) => (
    <DrawerFixedWidth anchor="left" open={p.open} onClose={p.close} variant="persistent">
        <ToolbarPrimary variant="dense">
            <TypographyRight variant="h6">
                Results
            </TypographyRight>
            <IconButton>
                <Close onClick={p.close}/>
            </IconButton>
        </ToolbarPrimary>
        <List>
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
        </List>
    </DrawerFixedWidth>
);

export default ResultDrawer;
