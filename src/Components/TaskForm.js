import React, { Component } from 'react'
import {connect} from 'react-redux'
import * as actions from './../actions/index';
 class TaskForm extends Component {
  constructor(props){
    super(props);
    this.state={
      id:'',
      name:'',
      status:true
    }
  }
  //sử dụng lycecal
  componentWillMount(){
      if(this.props.taskEditing){
        this.setState({
          id:this.props.taskEditing.id,
          name:this.props.taskEditing.name,
          status:this.props.taskEditing.status
        });
      }
  }
  componentWillReceiveProps(nextProps){
    if(nextProps && nextProps.taskEditing){
      this.setState({
        id:nextProps.taskEditing.id,
        name:nextProps.taskEditing.name,
        status:nextProps.taskEditing.status
      });
    }
    else if(!nextProps.taskEditing){
       this.setState({
         id:'',
         name:'',
         status:false
       });
    }
  }
    onCloseForm = ()=>{
      this.props.onCloseForm();
    }
    onChange=(event)=>{
      var target=event.target;
      var name=target.name;
      var value=target.value;
      if(name==='status'){
        value=target.value==='true'?true:false;
      }
      
      this.setState({
        [name]:value
      })
      
    }
    onSubmit = (event) => {
        event.preventDefault();
        this.props.onAddTask(this.state); 
        console.log('state',this.state);
        //hủy bỏ và close form
        this.onClear();
        this.onCloseForm(); 

    }
    onClear=()=>{
      this.setState({
        name:'',
        status:false
      })
    }
    render() {
      var {id}=this.state;
        return (
            <div className="panel panel-warning">
              <div className="panel-heading">
              <h3 className="panel-title ">{id!==''?'Cập nhập công việc':'Thêm công việc'}
                  <span className="bx bx-plus bx-tada text-right" 
                  onClick={this.onCloseForm}>
                  </span></h3>
              </div>
              <div className="panel-body">
                <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                    <label>Tên :</label>
                    <input type="text" className="form-control" name="name" value={this.state.name} onChange={this.onChange} />
                  </div>
                  <label>Trạng thái : </label>
                  <select className="form-control" name="status" 
                   value={this.state.status} onChange={this.onChange}>
                    <option value={true}>Kích hoạt</option>
                    <option value={false}>Ẩn</option>
                  </select><br />
                  <div className="text-center">
                    <button type="submit" className="btn btn-warning"> <span className="bx bx-plus bx-tada"></span>Lưu lại</button>
                    &nbsp;
                    <button type="button" className="btn btn-danger" onClick={this.onClear}>
                      <span className="bx bx-x bx-tada">
                      </span>
                      Hủy bỏ</button>
                  </div>
                </form>
              </div>
            </div> 
        )
    }
}

const  mapStateToProps=state=>{
  return {
  }
};
const mapDispatchToProps=(dispatch,props)=>{
  return {
    onAddTask:(task)=>{
      dispatch(actions.addtask(task))
    },
    onCloseForm:()=>{
      dispatch(actions.closeform())
    }
  }
};
export default connect(mapStateToProps,mapDispatchToProps)(TaskForm);
