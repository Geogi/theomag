import reduceReducer from "reduce-reducers";
import {handleAction} from "redux-actions";
import * as uuid from "uuid";
import {checkError, checkResult, checkStart, resultDrawerClose} from "../actions";

export interface IMessage {
    content: string,
    key: string,
}

export interface ICheckState {
    inProgress: boolean,
    resultDrawerErrors: IMessage[]
    resultDrawerOpen: boolean,
}

const defaultCheckState: ICheckState = {
    inProgress: false,
    resultDrawerErrors: [],
    resultDrawerOpen: false,
};

const makeIds = (messages: string[]): IMessage[] => messages.map((m) => ({
    content: m,
    key: uuid(),
}));

const checkReducer = reduceReducer(
    handleAction(checkStart, (state) => ({
        ...state,
        inProgress: true,
        resultDrawerErrors: [],
    }), defaultCheckState),
    handleAction(checkError, (state, action) => ({
        ...state,
        inProgress: false,
        resultDrawerErrors: makeIds([JSON.stringify(action.payload!)]),
        resultDrawerOpen: true
    }), defaultCheckState),
    handleAction(checkResult, (state, action) => ({
        ...state,
        inProgress: false,
        resultDrawerErrors: makeIds(action.payload!),
        resultDrawerOpen: true,
    }), defaultCheckState),
    handleAction(resultDrawerClose, (state) => ({
        ...state,
        resultDrawerOpen: false,
    }), defaultCheckState)
);

export default checkReducer;
