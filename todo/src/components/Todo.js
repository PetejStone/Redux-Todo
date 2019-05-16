import React from 'react';
import {connect} from 'react-redux';
import {addTask, toggleComplete, deleteTask} from '../actions'
import './todo.css';

class Todo extends React.Component {
    constructor() {
        super();
        this.state = {}
    }

    toggleComplete = id => {
        //console.log(id)
        
        this.props.toggleComplete(id);
    }
    
    deleteTask = id => {
        this.props.deleteTask(id);
    }

    render() {
        return (
            <div className="task-list">
                {this.props.todos.map( (todo, index) => (
                    <div className="task" key={index} 
                    onClick={() => this.toggleComplete(todo.id)} 
                    style={ todo.value === '' ? {display: 'none'} : {display: 'flex'} }
                    >
                        <p style={{display:'none' }} >{todo.id = index}</p>
                        <h3>{todo.value}</h3>
                        <p> {todo.value === '' ? null : `Completed: ${todo.completed.toString()}`}</p>
                        <button onClick={() => this.deleteTask(todo.id)}>Delete Task</button>
                    </div>
                ))}
            </div>
           
        )}
}

const mapStateToProps = state => {
    return {
      todos: state.todos
    };
  };

export default connect(
    mapStateToProps,
    {addTask, toggleComplete, deleteTask}
  )(Todo);