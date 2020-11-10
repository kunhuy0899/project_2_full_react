import React, { Component } from 'react'
import Search from './Search'
import Sort from './Sort'

export default class Search_Sort extends Component {
    render() {
        return (
            <div className="row mt-15">
                <Search onSearch={this.props.onSearch} />
                <Sort onSort={this.props.onSort} />
            </div>
        )
    }
}