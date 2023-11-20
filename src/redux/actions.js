import { types } from "./types";

export function changeInputAction(name) {
    return{
        type: types.INPUT_VALUE,
        payload: name
    }
}

export function addUserAction(name) {
    return{
        type: types.ADD_USER,
        payload: name
    }
}

export function deleteUsersAction() {
    return{
        type: types.DELETE_USER
    }
}
