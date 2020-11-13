import {combineReducers} from 'redux';
import taskss from './tasks';
import isdisplayForm from './isdisplayForm'
import itemEditting from './itemEditTask'
import filterTable from './filterTable'
import searchTask from './searchTask'
import sort from './sort'
const myReducer = combineReducers({
    taskss:taskss,
    isdisplayForm,
    itemEditting,
    filterTable,
    searchTask,
    sort
});

export default myReducer;
 