import { sortBy } from 'lodash';
import React, { Component } from 'react'

export default class Sort extends Component {
  onClick=(sortby,sortvalue)=>{
    this.props.onSort(sortby,sortvalue);
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
                 
                      className={this.props.sortBy==='name'&&this.props.sortValue===1?'sort_selected':''}>
                        <span className="bx bx-sort-a-z bx-tada" />Tên A-Z
                      </a>
                    </li>
                    <li onClick={()=>this.onClick('name',-1)}>
                      <a role="button" className={this.props.sortBy==='name'&&this.props.sortValue===-1?'sort_selected':''}>
                        <span className="bx bx-sort-a-z bx-tada" />Tên z-A
                      </a>
                    </li>
                    <li onClick={()=>this.onClick('status',1)}>
                      <a role="button" className={this.props.sortBy==='status'&&this.props.sortValue===1?'sort_selected':''}>
                        Trạng thái kích hoạt
                      </a>
                    </li>
                    <li onClick={()=>this.onClick('status',-1)}>
                      <a role="button" className={this.props.sortBy==='status'&&this.props.sortValue===-1?'sort_selected':''}>
                        Trạng thái ẩn
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
        )
    }
}
