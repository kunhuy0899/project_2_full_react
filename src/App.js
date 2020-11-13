import React, { Component } from 'react'
import './App.css'
import Search_Sort from './Components/Search_Sort'
import TaskList from './Components/TaskList'
import TaskForm from './Components/TaskForm'
import {connect} from 'react-redux';
import * as action from './actions/index';

 class App extends Component {
  constructor(props){
    super(props);
    this.state={
     sortBy:'name',
     sortValue:1
    }
  }
  onTogleFrom =()=>{
    var {itemEditting}=this.props;
    if(itemEditting&&itemEditting.id!==''){
      this.props.onOpenform();
    }
    else{
      this.props.onToggleform();
    }
    this.props.onClearTask({
      id:'',
      name:'',
      status:false
    });
      
  }

  render() {
      var {
     sortBy,
        sortValue} = this.state; 
        var {isDisplayForm}=this.props;
      return (
     <div className="container">
        <div className="text-center">
          <h1>Quản lý công việc</h1>
        </div>
        <div className="row">
          <div className={isDisplayForm?'col-xs-4 col-sm-4 col-md-4 col-lg-4':''} >
          <TaskForm />
          </div>
          <div className={isDisplayForm===false ? 'col-xs-12 col-sm-12 col-md-12 col-lg-12':'col-xs-8 col-sm-8 col-md-8 col-lg-8'}>
            <button type="button" className="btn btn-primary" onClick={this.onTogleFrom}>
              <span className="bx bx-plus bx-tada">
                </span>Thêm công việc
            </button>
              <Search_Sort />
            <div className="row mt-15">
              <TaskList />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
const mapstateToProps=state=>{
  return {
    isDisplayForm:state.isdisplayForm,
    itemEditting:state.itemEditting
  }
}
const mapDispatchToProps=(dispatch,props)=>{
    return {
      onToggleform:()=>{
        dispatch(action.toggleform())
      },
      onClearTask:(task)=>{
        dispatch(action.editTask(task))
      },
      onOpenform:()=>{
          dispatch(action.openform());
      }
    }
}
export default connect(mapstateToProps,mapDispatchToProps) (App);
