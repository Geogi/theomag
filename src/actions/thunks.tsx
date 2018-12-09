import axios from 'axios';
import {ICheckRequest, ICheckResponse, url} from "../remote";
import {checkError, checkResult, checkStart} from "./index";

export const checkRun = (data: ICheckRequest) => (dispatch: any) => {
    dispatch(checkStart());
    return axios.post<ICheckResponse>(url, data).then(
        (response) => dispatch(checkResult(response.data)),
        (error) => dispatch(checkError(error.toString()))
    );
};
