import reduceReducer from "reduce-reducers";
import {handleAction} from "redux-actions";
import {checkError, checkResult, checkStart} from "../actions";

export interface ICheckState {
    inProgress: boolean
}

const defaultCheckState: ICheckState = {
    inProgress: false,
};

const checkReducer = reduceReducer(
    handleAction(checkStart, (state) => ({
        ...state,
        inProgress: true
    }), defaultCheckState),
    handleAction(checkError, (state) => ({
        ...state,
        inProgress: false
    }), defaultCheckState),
    handleAction(checkResult, (state) => ({
        ...state,
        inProgress: false
    }), defaultCheckState),
);

export default checkReducer;
