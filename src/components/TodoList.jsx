import React, { Component } from 'react'
import Todo from './Todo'
import axios from 'axios'
import AddTodo from './AddTodo'
export default class TodoList extends Component {
    state = {
        Todos: null,
    };

    componentDidMount(){
        axios
        .get("http://localhost:4000/api/v1/todos")
        .then((response) => this.setState({ Todos: response.data}))
    }

    handleDelete(id) {
        axios
        .delete(`http://localhost:4000/api/v1/todos/${id}`)
        .then((response)=> console.log(response));
        this.componentDidMount()
    }

    addOneTodo = (newTodo) => {
        const copy = [...this.state.Todos]
        copy.unshift(newTodo)
        this.setState({Todos: copy})
    }

    render() {
        const todos = this.state.Todos
        return (
            <div>
            <h1>My todo dream tech-stack list</h1>
                {
                    todos
                    ? 
                    <div>
                        {
                            this.state.Todos.map(todo=>{
                                return(
                                    <div>
                                    <Todo {...todo}/>
                                    <button onClick={()=>{this.handleDelete(todo._id)}}>x</button>
                                    </div>
                                    ) 
                            })
                        }
                    </div>
                    : null
                }
                <AddTodo createTodo={this.addOneTodo} />
            </div>
        )
    }
}
