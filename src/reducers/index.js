import {combineReducers} from 'redux';
import taskss from './tasks';
import isdisplayForm from './isdisplayForm'
const myReducer = combineReducers({
    taskss:taskss,
    isdisplayForm
});

export default myReducer;
 