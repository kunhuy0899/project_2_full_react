import React, { Component } from 'react'
import './App.css'
import Search_Sort from './Components/Search_Sort'
import TaskList from './Components/TaskList'
import TaskForm from './Components/TaskForm'
import _, { sortBy } from 'lodash'
import demo from './traning/demo'

export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
      tasks:[], //id:unique , name, status
      isDisplayForm:false,
      taskEditing:null,
      //cái filter tui để nó là 1 object
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
  //sử dụng lycical . nó sẽ được gọi khi component đc gắn vào. hay nói cách khác khi reset lại thì hàm này sẽ được gọi
  componentDidMount(){
    if(localStorage && localStorage.getItem('tasks')){
      var tasks=JSON.parse(localStorage.getItem('tasks'));
      this.setState({
        tasks:tasks
      })
    
    }
  }
  // onGenerateData = () => {
  //   var tasks=[
  //             {id:this.generateID(),
  //             name:'Lập trình web',
  //             status:true},
  //             {id:this.generateID(),
  //             name:'Lập trình c++',
  //             status:true},
  //             {id:this.generateID(),
  //             name:'Lập trình Phython',
  //             status:false}  
  //             ];
  //   this.setState({
  //     tasks:tasks
  //   });
  //   //lưu trên local storate và chuyển từ dạng object sang string
  //   localStorage.setItem('tasks',JSON.stringify(tasks));
  // }
  s4(){
    return Math.floor((1+Math.random())*0x10000).toString(16).substring(1);
  }
  generateID(){
    return this.s4() +'-'+ this.s4() + '-'+this.s4()+'-'+this.s4()+'-'+this.s4()+'-'+this.s4()+'-'+this.s4();
  }
  onTogleFrom =()=>{ //Thêm Task
      if(this.state.isDisplayForm && this.state.taskEditing !== null)
      {
        this.setState({
          //isDisplayForm:true,
          taskEditing:null
        })
      }
      else{
        this.setState({
          isDisplayForm:!this.state.isDisplayForm,
          taskEditing:null
        })
      }
      

  }
  onCloseForm=()=>{
    this.setState({
      isDisplayForm:false
    })
  }
  onSubmit = (data)=>{
   
    // var task={
    //   id:this.generateID(),
    //   name:data.name,
    //   status:true
    // }
   
    var {tasks}=this.state;
    if(data.id===''){
      data.id=this.generateID();
      tasks.push(data);
    }else{
      //editting
      var index = this.findIndex(data.id);
      tasks[index]=data;

    }
    
    this.setState({
      tasks:tasks,
      taskEditing:null
    })
    localStorage.setItem('tasks',JSON.stringify(tasks));

  }
 
  onUpdateStatus=(id)=>{
    var {tasks}=this.state;
    // var index = this.findIndex(id);
    var index=_.findIndex(tasks,(task)=>{
        return task.id===id;
    })
    if(index!==-1){
      tasks[index].status=!tasks[index].status;
      this.setState({
        tasks:tasks
      })
      localStorage.setItem('tasks',JSON.stringify(tasks));
    }
    else{
      alert('không tìm thấy !!!');
    }

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
  onDelete=(id)=>{
    var {tasks}=this.state;
    var index = this.findIndex(id);
    if(index!==-1){
      tasks.splice(index,1);
     
      this.setState({
        tasks:tasks
      })
      localStorage.setItem('tasks',JSON.stringify(tasks));
    }
    else{
      alert('không tìm thấy !!!');
    }
    this.onCloseForm();
  }
  onShowFrom=()=>{
    this.setState({
      isDisplayForm:true
    })
  }
  onUpdate=(id)=>{
    var {tasks}=this.state;
    var index = this.findIndex(id);
    console.log(index);
    var taskEditing=tasks[index];
    this.setState({
      taskEditing:taskEditing
    });
    this.onShowFrom();
  }
  onFilter=(filterName,filterStatus)=>{
    //chổ này gtri ban đầu  mà gtri ban đầu nó trả về tk status la 1 cái mảng . mà tui đâu có khai báo nó là mảng đâu 
    //chổ này ép kiểu
    filterStatus=parseInt(filterStatus,10) ;
    this.setState({
      filter:{
        name:filterName.toLowerCase(),
        //chổ này gán vào state
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
    console.log(this.state);
  }
  render() {
      var {tasks,
        isDisplayForm,
        filter,
        keyword
      ,sortBy,
    sortValue} = this.state; // var tasks=this.state.tasks

       if(filter){
         if(filter.name){
           tasks=tasks.filter((task)=>{
             return task.name.toLowerCase().indexOf(filter.name)!==-1;
           });
         }
         tasks=tasks.filter((task)=>{
           if(filter.status===-1){
        return task;
         }
        else{
             return task.status===(filter.status===1?true:false);
           }
         }); 
       }
      if(keyword){
        tasks=tasks.filter((task)=>{
          return task.name.toLowerCase().indexOf(keyword)!==-1;
        });
      }
      
      if(sortBy==='name'){
        tasks.sort((a,b)=>{
          if(a.name>b.name) return sortValue;
          else if(a.name<b.name) return -sortValue;
        });
      }else{
        tasks.sort((a,b)=>{
          if(a.status>b.status) return -sortValue;
          else if(a.status<b.status) return sortValue;
          else return 0;
        });
      }
      var elementAddTask=isDisplayForm?<TaskForm
      onSubmit={this.onSubmit}
      onCloseFrom={this.onCloseForm}
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
              <TaskList tasks={tasks}
              onUpdateStatus={this.onUpdateStatus}
              onDelete={this.onDelete}
              onUpdate={this.onUpdate}
              //tạo 1 cái props pải k 
              onFilter={this.onFilter}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

