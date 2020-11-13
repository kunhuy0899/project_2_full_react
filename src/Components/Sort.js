import { sortBy } from 'lodash';
import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as action from '../actions/index';
 class Sort extends Component {
  onClick=(sortBy,sortValue)=>{
    this.props.onSort(
      {sortBy:sortBy,
        sortValue:sortValue
      });
  }
    render() {
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="dropdown"> 
                  <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Sắp xếp
                    <span className="bx bxs-guitar-amp bx-tada ml-5">
                    </span></button>
                  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <li onClick={()=>this.onClick('name',1)}>
                      <a role="button" 
                 
                      className={this.props.sort.sortBy==='name'&&this.props.sort.sortValue===1?'sort_selected':''}>
                        <span className="bx bx-sort-a-z bx-tada" />Tên A-Z
                      </a>
                    </li>
                    <li onClick={()=>this.onClick('name',-1)}>
                      <a role="button" className={this.props.sort.sortBy==='name'&&this.props.sort.sortValue===-1?'sort_selected':''}>
                        <span className="bx bx-sort-a-z bx-tada" />Tên z-A
                      </a>
                    </li>
                    <li onClick={()=>this.onClick('status',1)}>
                      <a role="button" className={this.props.sort.sortBy==='status'&&this.props.sort.sortValue===1?'sort_selected':''}>
                        Trạng thái kích hoạt
                      </a>
                    </li>
                    <li onClick={()=>this.onClick('status',-1)}>
                      <a role="button" className={this.props.sort.sortBy==='status'&&this.props.sort.sortValue===-1?'sort_selected':''}>
                        Trạng thái ẩn
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
        )
    }
}

const  mapStateToProps=state=>{
  return {
    sort:state.sort
  }
};
const mapDispatchToProps=(dispatch,props)=>{
  return {
    onSort:(sort)=>{
      dispatch(action.sortTask(sort))
    }
  }
};
export default connect(mapStateToProps,mapDispatchToProps)(Sort);
