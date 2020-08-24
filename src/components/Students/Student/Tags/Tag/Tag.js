import React, { Component } from 'react';
import './Tag.css';

export default class Tag extends Component {
    render() {

        return (
            <div>
                <li className="Tag" key={this.props.index}>
                    <span id="tag">
                        {this.props.tag}
                    </span>
                </li>
            </div>
        )
    };
};