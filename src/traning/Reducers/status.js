var initialState=false;
//tạo reducer 
var myReducer=(state=initialState,action)=>{
    if(action.type==='TOGGLE_STATUS'){
            state=!state;
        return state;
    }
    return state;
}
export default myReducer;
