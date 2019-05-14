import {ADD_TASK} from '../actions';
const stateTree = {
    todos: [
        {
            value: '',
            completed: false
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
        default: 
            return state;
    }
}

export default reducer;