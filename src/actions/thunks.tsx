import axios from 'axios';
import {checkError, checkResult, checkStart} from "./index";

const url = "http://127.0.0.1:8000/check";

// noinspection JSUnusedLocalSymbols
export const checkRun = (data: any) => (dispatch: any) => {
    dispatch(checkStart());
    return axios.post(url, {message: "ping"}).then(
        (response) => dispatch(checkResult(response.data.map(({message}: any) => message))),
        (error) => dispatch(checkError(error.toString()))
    );
};
