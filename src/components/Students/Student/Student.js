import React, { Component } from 'react';
import './Student.css';
import plus from '../../../images/plus.png';
import minus from '../../../images/minus.png';

import Grades from './Grades/Grades';
import Tags from './Tags/Tags';

export default class Student extends Component {
    state = {
        showGrades: false
    };

    tagChangeHandler = (event) => {
        this.setState({ tag: event.target.value });
    };

    showGradesHandler = () => {
        this.setState(prevState => ({
            showGrades: !prevState.showGrades
        }));
    };

    addTagHandler = (event) => {
        if(event.key === "Enter") {
            let tag = event.target.value;
            this.props.addTag(this.props.id, tag);
            document.getElementById("reset_value").value = "";
        }
    };

    showGradesToggle(element) {
        return this.state.showGrades ? element : null
    };

    render() {
        let average = 0;
        let count;

        if(this.props.grades) {
            count = this.props.grades.length;

            for(let i in this.props.grades) {
                average += Number(this.props.grades[i]);
            };

            average = (average / count).toFixed(2);
        };

        let grades = null

        if(this.props.grades) {
            grades = (
                <Grades 
                    grades={this.props.grades}
                />
            )
        }

        let tags = null;

        if(this.props.tags) {
            tags = (
                <Tags 
                    tags={this.props.tags}
                    studentId={this.props.id}
                    tagExists={this.tagExistsHandler}
                    tagInput={this.props.tag}
                />
            )
        }

        let showStudent = "inherit";
        let fName = this.props.firstName.toLowerCase();
        let lName = this.props.lastName.toLowerCase();
        let name = this.props.name.trim();
        let tag = this.props.tag.trim();
        
        if(name && tag && this.props.tags) {
            var obj_Tags = JSON.stringify(this.props.tags);
            if((fName.includes(name) || lName.includes(name)) && obj_Tags.includes(tag)) {
                showStudent = "inherit"
            }
            else showStudent = "none"
        }
        else if((fName.includes(name) || lName.includes(name) || name.trim() === '' || name === null) && (this.props.tag === null || this.props.tag === '')) {
            showStudent = "inherit"
        }
        else if (tag && this.props.tags) {
            for(let i in this.props.tags) {
                if(this.props.tags[i].includes(tag)) {
                    showStudent = "inherit"
                }
                else {
                    showStudent = "none"
                }
            }
        }
        else {
            showStudent = "none"
        };

        return (
            <div>
                <div className="Student" style={{display: showStudent}}>
                    <img className="Profile" src={this.props.pic} alt="profile" /> 
                    <br />
                    <strong>
                        {this.props.firstName} {this.props.lastName}
                        <button className="expand-btn" onClick={this.showGradesHandler}>
                            <img className="PlusSign" src={this.state.showGrades ? minus : plus} alt="plus"/>
                        </button>
                    </strong>
                    <br />
                    <div className="Info">
                        Email: {this.props.email}
                        <br />
                        Company: {this.props.company}
                        <br />
                        Skill: {this.props.skill}
                        <br />
                        Average: {average}%
                        <br />
                        <br />
                        {this.state.showGrades ? grades : null}
                        {this.state.showGrades ? <div className="Tags"> {tags} </div> : null}
                        {
                            this.showGradesToggle(
                                <input 
                                    className="add-tag-input"
                                    id="reset_value"
                                    onKeyPress={(event) => this.addTagHandler(event)} 
                                    placeholder="Add a tag"
                                />
                            )
                        }
                    </div>
                </div>
            </div>
        );
    };
};