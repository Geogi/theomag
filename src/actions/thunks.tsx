import axios from 'axios';
import {checkError, checkResult, checkStart} from "./index";

const url = "http://localhost:8000/a";

export const checkRun = () => (dispatch: any) => {
    dispatch(checkStart());
    return axios.post(url, {}).then(
        (response) => dispatch(checkResult(response)),
        (error) => dispatch(checkError(error))
    );
};
