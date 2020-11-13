import * as types from './../constants/actionType'

var initialState={
   sortBy:'name',
   sortValue:1
};

var myReducer=(state=initialState,action)=>{
    switch(action.type){
        case types.SORT:
            return {
                sortBy:action.sort.sortBy,
                sortValue:action.sort.sortValue
            }
        default: return state;
    }
 }
 export default myReducer;
