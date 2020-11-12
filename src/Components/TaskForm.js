import React, { Component } from 'react'
import {connect} from 'react-redux'
import * as actions from './../actions/index';
 class TaskForm extends Component {
  constructor(props){
    super(props);
    this.state={
      id:'',
      name:'',
      status:false
    }
  }
  //sử dụng lycecal
  componentWillMount(){
      if(this.props.itemEditting){
        this.setState({
          id:this.props.itemEditting.id,
          name:this.props.itemEditting.name,
          status:this.props.itemEditting.status
        });
      }
      else{
        this.onClear();
      }
  }
  componentWillReceiveProps(nextProps){
    if(nextProps && nextProps.itemEditting){
      this.setState({
        id:nextProps.itemEditting.id,
        name:nextProps.itemEditting.name,
        status:nextProps.itemEditting.status
      });
    }
    else if(!nextProps.itemEditting){
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
    onSave = (event) => {
        event.preventDefault();
        this.props.onSaveTask(this.state); 
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
      if(!this.props.isDisplayForm) return null;
        return (
            <div className="panel panel-warning">
              <div className="panel-heading">
              <h3 className="panel-title ">{!this.state.id?'Thêm công việc':'Cập nhập công việc'}
                  <span className="bx bx-plus bx-tada text-right" 
                  onClick={this.onCloseForm}>
                  </span></h3>
              </div>
              <div className="panel-body">
                <form onSubmit={this.onSave}>
                  <div className="form-group">
                    <label>Tên :</label>
                    <input type="text"
                     className="form-control"
                      name="name"
                      value={this.state.name}
                      onChange={this.onChange} />
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
    isDisplayForm:state.isdisplayForm,
    itemEditting:state.itemEditting
  }
};
const mapDispatchToProps=(dispatch,props)=>{
  return {
    onSaveTask:(task)=>{
      dispatch(actions.onSaveTask(task))
    },
    onCloseForm:()=>{
      dispatch(actions.closeform())
    }
  }
};
export default connect(mapStateToProps,mapDispatchToProps)(TaskForm);