import {combineReducers} from 'redux';
import taskss from './tasks';
import isdisplayForm from './isdisplayForm'
import itemEditting from './itemEditTask'
const myReducer = combineReducers({
    taskss:taskss,
    isdisplayForm,
    itemEditting
});

export default myReducer;
 