import React, { Component } from 'react'
import TaskItem from './TaskItem';
import {connect} from 'react-redux';
import * as actions from './../actions/index';
class TaskList extends Component {
  constructor(props){
    super(props);
    this.state={
      filterName:'',
      filterStatus:'-1' 
    }
  }
  onChange =(event)=>{
    var target=event.target;
    var name=target.name;
    var value=target.type==='checkbox'?target.checked:target.value;
  
   var filter={
    name:name==='filterName'?value:this.state.filterName,
    status:name==='filterStatus'?value :this.state.filterStatus,
   }
    this.props.onFilterTable(filter)
    this.setState({
      [name]:value,
    });
  }
    render() {
      var {tasks,filterTable,keyword,sort} = this.props;
      var {filterName,filterStatus}=this.state;
      //filter
      if(filterTable.name){
        tasks=tasks.filter((task)=>{
          return task.name.toLowerCase().indexOf(filterTable.name.toLowerCase())!==-1;
        });
      }
      tasks=tasks.filter((task)=>{
        if(filterTable.status===-1){
          return task;
        }
        else {
          return task.status===(filterTable.status===1?true:false)
        };
      });
      tasks=tasks.filter((task)=>{
        return task.name.toLowerCase().indexOf(keyword.toLowerCase())!==-1;
      });
      //sort
      if(sort.sortBy==="name"){
        tasks.sort((a,b)=>{
          if(a.name>b.name) return sort.sortValue;
          else if(a.name<b.name) return -sort.sortValue;
          else return 0;
        });
      }else {
        tasks.sort((a,b)=>{
          if(a.status>b.status) return -sort.sortValue;
          else if(a.status<b.status) return sort.sortValue;
          else return 0;
        });
      }
      var elementTask=tasks.map((task,index)=>{
          return <TaskItem key={task.id} index={index} task={task}
          />
      })
        return (
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
               <table className="table table-bordered table-hover">
                  <thead>
                    <tr>
                      <th className="text-center">STT</th>
                      <th className="text-center">Tên</th>
                      <th className="text-center">Trạng Thái</th>
                      <th className="text-center">Hành Động</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td />
                      <td>
                        <input type="text" className="form-control"
                        value={filterName}
                        onChange={ this.onChange }
                        name="filterName" />
                      </td>
                      <td>
                        <select name="filterStatus"
                        value={filterStatus}
                        onChange={this.onChange} 
                        className="form-control">
                          <option value="-1">Tất cả</option>
                          <option value="0">Ẩn</option>
                          <option value={1}>Kích Hoạt</option>
                        </select>
                      </td>
                      <td />
                    </tr>
                    {elementTask}
                  </tbody>
                </table>
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
  return {
    tasks:state.taskss,
    filterTable:state.filterTable,
    keyword:state.searchTask,
    sort:state.sort
  }
};
const mapDispatchToProps=(dispatch,props)=>{
  return {
    onFilterTable:(filter)=>{
        dispatch(actions.filterTask(filter))
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps) (TaskList);
