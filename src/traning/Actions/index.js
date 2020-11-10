import * as types from './../Constanst/ActionType';
export  const status =()=>{
    return {
        type:types.TOGGLE_STATUS
    }
}

export const sort=(sort)=>{
    return {
        type:types.SORT,
        sort //sort:sort
    } 
}
