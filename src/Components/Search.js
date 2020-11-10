import React, { Component } from 'react'

export default class Search extends Component {
    constructor(props){
        super(props);
        this.state={
            keyword:''
        }
    }
    onChange=(event)=>{
        var target=event.target;
        var name=target.name;
        var value=target.value;
        this.setState({
            [name]:value
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
