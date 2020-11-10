import React, { Component } from 'react'
import './App.css'
import Search_Sort from './Components/Search_Sort'
import TaskList from './Components/TaskList'
import TaskForm from './Components/TaskForm'
import _, { sortBy } from 'lodash';
import {connect} from 'react-redux';
import * as action from './actions/index';

 class App extends Component {
  constructor(props){
    super(props);
    this.state={
      taskEditing:null,

      filter:{
        name:'',
        status:-1
      }
      ,
      keyword:'',
     sortBy:'name',
     sortValue:1
    }
  }
  onTogleFrom =()=>{
      this.props.onToggleform();

  }
 

  findIndex=(id)=>{
    var {tasks}=this.state;
    var result=-1;
    tasks.forEach((task,index)=>{
      if(task.id===id)
      {
        return result= index;
      }
    });
    return result;  
  }

  onShowFrom=()=>{
    this.setState({
      isDisplayForm:true
    })
  }
  onUpdate=(id)=>{
    var {tasks}=this.state;
    var index = this.findIndex(id);
    var taskEditing=tasks[index];
    this.setState({
      taskEditing:taskEditing
    });
    this.onShowFrom();
  }
  onFilter=(filterName,filterStatus)=>{
    filterStatus=parseInt(filterStatus,10) ;
    this.setState({
      filter:{
        name:filterName.toLowerCase(),
        status:filterStatus
      }
    });
  }
  onSearch=(keyword)=>{
    this.setState(
      {
        keyword:keyword
      }
    )
  }
  onSort=(sortby,sortvalue)=>{
    
    this.setState({
      sortBy:sortby,
      sortValue:sortvalue
    })
  }
  render() {
      var {
     sortBy,
        sortValue} = this.state; 
        var {isDisplayForm}=this.props;
      var elementAddTask=isDisplayForm?<TaskForm
      taskEditing={this.state.taskEditing}
       /> :'';
      
      return (
     <div className="container">
        <div className="text-center">
          <h1>Quản lý công việc</h1>
        </div>
        <div className="row">
          <div className={isDisplayForm?'col-xs-4 col-sm-4 col-md-4 col-lg-4':''} >
            {elementAddTask}
          </div>
          <div className={isDisplayForm===false ? 'col-xs-12 col-sm-12 col-md-12 col-lg-12':'col-xs-8 col-sm-8 col-md-8 col-lg-8'}>
            <button type="button" className="btn btn-primary" onClick={this.onTogleFrom}>
              <span className="bx bx-plus bx-tada">
                </span>Thêm công việc
            </button>
              <Search_Sort onSearch={this.onSearch}
                onSort={this.onSort}
                sortBy={sortBy}
                sortValue={sortValue}
              />
            <div className="row mt-15">
              <TaskList 
              onUpdate={this.onUpdate}
              onFilter={this.onFilter}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
const mapstateToProps=state=>{
  return {
    isDisplayForm:state.isdisplayForm
  }
}
const mapDispatchToProps=(dispatch,props)=>{
    return {
      onToggleform:()=>{
        dispatch(action.toggleform())
      }
    }
}
export default connect(mapstateToProps,mapDispatchToProps) (App);
