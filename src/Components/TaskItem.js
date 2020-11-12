import React, { Component } from 'react'
import {connect} from 'react-redux'
import * as actions from './../actions/index';
 class TaskItem extends Component {

    onUpdateStatus=()=>{
        this.props.onUpdateStatus(this.props.task.id);
    }
    onDelete=()=>{
        this.props.onDeleteTask(this.props.task.id);
     
    }
    onEditTask=()=>{
       
        this.props.onOpenform();
        this.props.onEditTask(this.props.task);
    }
    render() {
        var {task,index}=this.props;
        return (
            <tr>
                <td>{index+1}</td>
                <td>{task.name}</td>
                <td className="text-center"><span className={ task.status === true ? 'label label-danger' : 'label label-success'}
                onClick={this.onUpdateStatus}
                >{task.status=== true ? 'kích hoạt':'ẩn'}</span></td>
                <td className="text-center">
                    <button type="button" className="btn btn-warning" onClick={this.onEditTask}><span className="bx bxs-pencil bx-tada mr-5"
                     />Sửa</button>&nbsp;
                    <button type="button" className="btn btn-danger"
                    onClick={this.onDelete}
                    ><span className="bx bxs-trash bx-tada mr-5" />Xóa</button>
                </td>
            </tr>
        )
    }
}
const  mapStateToProps=state=>{
    return {
    }
  }
  const mapDispatchToProps=(dispatch,props)=>{
    return {
        onUpdateStatus:(id)=>{
            dispatch(actions.updateStatusTask(id))
        },
        onDeleteTask:(id)=>{
            dispatch(actions.deleteTask(id))
        },
        onOpenform:()=>{
            dispatch(actions.openform());
        },
        onCloseForm: ()=>{
            dispatch(actions.closeform());
        },
        onEditTask:(task)=>{
            dispatch(actions.editTask(task));
        }
    }
  }
export default connect(mapStateToProps,mapDispatchToProps)(TaskItem);
