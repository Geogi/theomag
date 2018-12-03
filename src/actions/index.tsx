import {createAction} from "redux-actions";

export interface IPtoPos {
    x: number,
    y: number,
}

export const mapReset = createAction('MAP_RESET', () => undefined);
export const ptoAdd = createAction('PTO_ADD', (pos: IPtoPos) => pos);
export const ptoDel = createAction('PTO_DEL', (key: string) => key);
