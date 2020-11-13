import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as action from '../actions/index';
 class Search extends Component {
    constructor(props){
        super(props);
        this.state={
            keyword:''
        }
    }
    onChange=(event)=>{
        this.setState({
            keyword:event.target.value
        })
    }
    onSearch=()=>{
        this.props.onSearch(this.state.keyword);
    }
    render() {
        var {keyword}=this.state;
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <div className="input-group">
                    <input name="keyword"
                    value={keyword}
                    onChange={this.onChange}
                    type="text" className="form-control" placeholder="nhập từ khóa ..." />
                    <span className="input-group-btn">
                        <button className="btn  btn-primary"
                       onClick={this.onSearch}
                        ><span className="bx bx-search-alt bx-tada">
                        </span></button>
                    </span>
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
      onSearch:(keyword)=>{
        dispatch(action.searchTask(keyword))
      }
    }
  };
export default connect(mapStateToProps,mapDispatchToProps)(Search);