import React from 'react';
import {connect} from 'react-redux';
import {addTask} from '../actions'

class Todo extends React.Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {
        return (
            <div>
                {this.props.todos.map( todo => (
                    <div>
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
    {addTask}
  )(Todo);