import React, { Component } from "react";
import Grade from './Grade/Grade';

export default class Grades extends Component {
    render() {
        return this.props.grades.map((grade, index) => {
            return (
                <Grade 
                    key={index}
                    index={index}
                    grade={grade}
                />
            )
        });
    };
};