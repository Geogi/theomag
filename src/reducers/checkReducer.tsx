import reduceReducer from "reduce-reducers";
import {handleAction} from "redux-actions";
import {checkCancel, checkRun} from "../actions";

export interface ICheckState {
    inProgress: boolean
}

const defaultCheckState: ICheckState = {
    inProgress: false,
};

const checkReducer = reduceReducer(
    handleAction(checkRun, (state) => ({
        ...state,
        inProgress: true
    }), defaultCheckState),
    handleAction(checkCancel, (state) => ({
        ...state,
        inProgress: false
    }), defaultCheckState)
);

export default checkReducer;
