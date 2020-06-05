import React, { Component } from 'react';
import axios from 'axios'

class AddTodos extends Component {
  state = {
    title: '',
    body: ''
  };


  handleSubmit = async (e) => {
    e.preventDefault();
    axios.post('http://localhost:4000/api/v1/todos', this.state)
    .then(res => {
       const newTodo = this.state
       this.props.createTodo(newTodo)
       
    })
    .catch(err => {
        console.log("Error while adding the thing: ", err);
    });
}  

  handleInput = (e) => {
    let { name, value } = e.target;
    this.setState({ [name]: value });
  };


  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>To-do</label>
          <input
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.handleInput}
          />
          <br />

          <label>Description</label>
          <input
            type="text"
            name="body"
            value={this.state.body}
            onChange={this.handleInput}
          />
          <br />
          <button type="submit">Add Todo</button>
        </form>
      </div>
    );
  }
}

export default AddTodos;
