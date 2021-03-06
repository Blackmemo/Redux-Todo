export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const CLEAR_COMPLETED = 'CLEAR_COMPLETED';

export const addTodo = todo => {
    return {
        type: ADD_TODO,
        payload: todo
    };
};

export const deleteTodo = id => {
    return {
        type: DELETE_TODO,
        payload: id
    };
};

export const toggleTodo = id => {
    return {
        type: TOGGLE_TODO,
        payload: id
    };
};

export const clearCompleted = id => {
    return {
        type: CLEAR_COMPLETED,
        payload: id
    };
};