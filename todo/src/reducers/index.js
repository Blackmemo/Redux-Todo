import { ADD_TODO, DELETE_TODO } from '../actions';

const initialState = {
    todos: [
        
    ]
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
        const newTodo = {
            todoItem: action.payload,
            id: Date.now(),
            completed: false
        };
        return {
            ...state,
            todos: [...state.todos, newTodo]
        };
        
        case DELETE_TODO:
        return {
            ...state,
            todos: state.todos.filter(
                todo => !(todo.id === action.payload)
            )
        };
        default:
        return state;
    }
};

export default reducer;