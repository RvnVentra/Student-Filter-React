import React, { Component } from 'react';
import Tag from './Tag/Tag';

export default class Tags extends Component {
    render() {
        return this.props.tags.map((tag, index) => {
            return (
                <Tag 
                    key={index}
                    tag={tag}
                />
            )
        });
    };
};