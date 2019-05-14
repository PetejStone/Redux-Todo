import React from 'react';

class Form extends React.Component {
    constructor() {
        super();
        this.state = {
            todos: {
                todo: ''
            }
        }    
    }

    handleInputChange = e => {
        console.log(e.target)
      };

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

export default Form;