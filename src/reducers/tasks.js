import * as types from './../constants/actionType'

var s4=()=>{
    return Math.floor((1+Math.random())*0x10000).toString(16).substring(1);
  }
 var generateID=()=>{
    return s4() +'-'+ s4() + '-'+s4()+'-'+s4()+'-'+s4()+'-'+s4()+'-'+s4();
  }
  var findIndex=(tasks,id)=>{
    var result=-1;
    tasks.forEach((task,index)=>{
      if(task.id===id)
      {
        return result= index;
      }
    });
    return result;
  }
var data=JSON.parse(localStorage.getItem('tasks'));
var initialState=data?data:[];

var myReducer=(state=initialState,action)=>{
    switch(action.type){
        case types.LIST_ALL:
            return state;
        case types.ADD_TASK:
            console.log(action)
            var newTask={
                id:generateID(),
                name:action.task.name,
                status:action.task.status
            }
            state.push(newTask);
            localStorage.setItem('tasks',JSON.stringify(state));
            return [...state];
        case types.UPDATE_STATUS_TASK:
            var id=action.id;
            var index=findIndex(state,id);
            state[index]={
                ...state[index],
                status:!state[index].status
            }
            localStorage.setItem('tasks',JSON.stringify(state));
            console.log(state);
            return [...state];

        case types.DELETE_TASK:
            var id2=action.id;
            var index2=findIndex(state,id2);
            state.splice(index2,1);
            localStorage.setItem('task',JSON.stringify(state));
            return [...state];
        default: return state;
    }
 }
 export default myReducer;