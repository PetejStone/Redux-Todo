import React from 'react';
import {connect} from 'react-redux';
import {addTask} from '../actions';
class Form extends React.Component {
    constructor() {
        super();
        this.state = {
            todo: ''  
    }}

    handleInputChange = e => {
        this.setState({todo: e.target.value})
      };

      addTodo = e => {
          e.preventDefault();
          this.props.addTask(this.state.todo)
          this.setState({todo: ''})
        
      }

    render() {
        return (
        <div className="form-container">
            <form onSubmit={this.addTodo} autoComplete="off" className="todo-form">
            <input
                onChange={this.handleInputChange}
                placeholder="Task"
                value={this.state.name}
                name="name"
                type="text"
                required
            />
            
            <button type="submit">Add Task</button>
            </form>
        </div>
        )
    }
}

const mapStateToProps = state => {
    return {
      todos: state.todos
    };
  };
export default connect(
    mapStateToProps,
    {addTask}
  )(Form);