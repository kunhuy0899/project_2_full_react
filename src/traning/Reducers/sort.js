var initialState={
        sortBy:'name',
        sortValue:1
}
//tạo reducer 
var myReducer=(state=initialState,action)=>{
   
    if(action.type==="SORT"){
        var {sortBy,sortValue}=action.sort;
        return {
            sortBy,sortValue
        };
    }
    return state;
}
export default myReducer;