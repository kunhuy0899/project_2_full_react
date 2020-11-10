import * as types from './../constants/actionType'
export const listAll=()=>{
    return {
        type:types.LIST_ALL,
    }
}
export const addtask=task=>{
    return {
        type:types.ADD_TASK,
        task:task //task:task
    }
}
export const toggleform=()=>{
    return {
        type:types.TOGGLE_FORM
    }
}
export const closeform=()=>{
    return {
        type:types.CLOSE_FORM
    }
}
export const openform=()=>{
    return {
        type:types.OPEN_FORM
    }
}
export const updateStatusTask=(id)=>{
    return {
        type:types.UPDATE_STATUS_TASK,
        id
    }
}
export const deleteTask=(id)=>{
    return {
        type:types.DELETE_TASK,
        id
    }
}