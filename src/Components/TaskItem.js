import React, { Component } from 'react'

export default class TaskItem extends Component {

    onUpdateStatus=()=>{
        this.props.onUpdateStatus(this.props.task.id);
    }
    onDelete=()=>{
        this.props.onDelete(this.props.task.id);
    }
    onUpdate=()=>{
        this.props.onUpdate(this.props.task.id);
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
                    <button type="button" className="btn btn-warning" onClick={this.onUpdate}><span className="bx bxs-pencil bx-tada mr-5"
                     />Sửa</button>&nbsp;
                    <button type="button" className="btn btn-danger"
                    onClick={this.onDelete}
                    ><span className="bx bxs-trash bx-tada mr-5" />Xóa</button>
                </td>
            </tr>
        )
    }
}
