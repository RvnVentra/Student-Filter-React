import React, { Component } from 'react';

export default class Grade extends Component {
    render() {
        return (
            <li className="Grade" key={this.props.index}>
                Test {this.props.index + 1}: 
                    <span>
                        {this.props.grade}%
                    </span>
            </li>
        )
    };
};