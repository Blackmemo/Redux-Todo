import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from '../actions';

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

        case TOGGLE_TODO:
        return {
            ...state,
            todos: state.todos.map(todo => 
                todo.id === action.payload
                ? { ...todo, completed: !todo.completed }
                : todo
            )
        };
        default:
        return state;
    }
};

export default reducer;