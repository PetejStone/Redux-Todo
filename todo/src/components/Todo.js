import React from 'react';
import {connect} from 'react-redux';
import {addTask} from '../actions'
import {toggleComplete} from '../actions';

class Todo extends React.Component {
    constructor() {
        super();
        this.state = {}
    }

    toggleComplete = id => {
        //console.log(id)
        
        this.props.toggleComplete(id);
    }

    render() {
        return (
            <div>
                {this.props.todos.map( (todo, index) => (
                    <div className="task" key={index} onClick={() => this.toggleComplete(todo.id)}>
                        <p style={{display:'none' }} >{todo.id = index}</p>
                        <h3>{todo.value}</h3>
                        <p> {todo.value === '' ? null : `Completed: ${todo.completed.toString()}`}</p>
                        
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
    {addTask, toggleComplete}
  )(Todo);