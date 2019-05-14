import {ADD_TASK, TOGGLE_COMPLETE} from '../actions';
const stateTree = {
    todos: [
        {
            value: '',
            completed: false,
            id: ''
        }
    ]
}

function reducer(state=stateTree, action) {
    switch(action.type) {
        case ADD_TASK:
            return {
                ...state,
                todos: [...state.todos, {value: action.payload, completed: false}]
            }
        case TOGGLE_COMPLETE:
            return {
                ...state,
                todos: state.todos.map(todo => {
                    if (todo.id === action.payload) {
                        return {
                            ...todo,
                            completed: !todo.completed
                        }
                    }
                    return todo;
                })
            }
        default: 
            return state;
    }
}

export default reducer;