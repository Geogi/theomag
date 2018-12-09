export const url = "http://127.0.0.1:8000/check";

interface ICheckRequestEquipment {
    key: string,
    capacity: number | null,
    type: string
}

interface ICheckRequestRoute {
    upstreamKey: string,
    downstreamKey: string,
}

export interface ICheckRequest {
    equipments: ICheckRequestEquipment[],
    routes: ICheckRequestRoute[],
}

export interface ICheckResponse {
    errors: string[]
}
