//tạo store
import { flatMap } from 'lodash';
import {createStore} from 'redux';
import {status,sort} from './Actions/index'
import myReducer from './Reducers/index'

const store=createStore(myReducer);
console.log("befor:",store.getState());
//tạo action

store.dispatch(status());
console.log("TOGGLE_STATUS:",store.getState());

//thực hiện công việc sắp xếp name từ Z-A


store.dispatch(sort({
    sortBy:'kun',
    sortValue:-1
}));
console.log("sort",store.getState());