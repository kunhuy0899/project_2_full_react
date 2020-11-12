import React, { Component } from 'react'
import TaskItem from './TaskItem';
import {connect} from 'react-redux';

class TaskList extends Component {
  constructor(props){
    super(props);
    this.state={
      filterName:'',
      filterStatus:'-1' //all:-1 ,active:1 ,deactive:0 // đây này
    }
  }
  onChange =(event)=>{
    var target=event.target;
    var name=target.name;
    var value=target.value;
    // chổ này truyền gtri từ tk con sang app
    //truyền từ chổ này
    this.props.onFilter(
      name==='filterName'?value:this.state.filterName,
      name==='filterStatus'?value :this.state.filterStatus,
    )  
    this.setState({
      [name]:value, //cai nay là set cai file ak là chổ bắt sự kiện onchange á ô  đó 2 cái name đó nó sẽ setstate 

    });
    
  }
    render() {
      var {tasks} = this.props;
      var {filterName,filterStatus}=this.state;
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
    tasks:state.taskss
  }
};
export default connect(mapStateToProps,null) (TaskList);