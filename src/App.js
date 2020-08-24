import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

import Students from './components/Students/Students';

export default class App extends Component {
  state = {
    students: [],
    tags: [],
    name: '',
    tag: ''
  };

  componentDidMount() {
    axios.get("https://www.hatchways.io/api/assessment/students")
      .then(response => {
        let student;
        for(let i in response.data) {
          student = response.data[i];
        };

        this.setState({
          students: student
        });
      })
      .catch(error => console.log(error));
  };

  nameSearchHandler = (event) => {
    this.setState({ name: event.target.value });
  };

  tagSearchHandler = (event) => {
    this.setState({ tag: event.target.value });
  };

  tagAddHandler = (id, tag) => {
    const addTag = {'sId': id, 'tag': tag}
    let students = [...this.state.students]
    console.log(addTag);
    for(let i in students) {
      if(students[i].id === id) {
        if(!students[i].tags) {
          students[i].tags = [];
        }
        students[i].tags.push(tag);
      }
    };
    this.setState({ students: students });
  };

  render() {

    let students = null;

    if(this.state.students) {
      students = (
        <Students 
          students={this.state.students}
          name={this.state.name}
          tag={this.state.tag}
          addTag={this.tagAddHandler}
        />
      )
    };

    return (
      <div className="App">
          <input 
            id="name-input" 
            placeholder="Search by name"
            onChange={(event) => this.nameSearchHandler(event)}
          />
          <input 
            id="tag-input" 
            placeholder="Search by tags"
            onChange={(event) => this.tagSearchHandler(event)}
          />
          {students}
      </div>
    )
  }
};