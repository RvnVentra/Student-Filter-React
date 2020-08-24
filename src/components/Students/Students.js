import React, { Component } from 'react';
import Student from './Student/Student';

export default class Students extends Component {
    render() {
        return this.props.students.map((student, index) => {
            return (
                <Student 
                    key={student.id}
                    id={student.id}
                    city={student.city}
                    company={student.company}
                    email={student.email}
                    firstName={student.firstName}
                    grades={student.grades}
                    lastName={student.lastName}
                    pic={student.pic}
                    skill={student.skill}
                    name={this.props.name}
                    tag={this.props.tag}
                    tags={student.tags}
                    addTag={this.props.addTag}
                />
            )
        })
    }  
};