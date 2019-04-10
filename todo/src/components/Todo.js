import React from 'react';
import { connect } from 'react-redux';

import { addTodo, deleteTodo, toggleTodo, clearCompleted } from '../actions';


class Todo extends React.Component {
    state = {
        newTodo: ''
    };
     
    handleChanges = e => {
        this.setState({ newTodo: e.target.value});
    };

    addTodo = e => {
        e.preventDefault();
        this.props.addTodo(this.state.newTodo);
        this.setState({ newTodo: ''})
    };

    deleteTodo = id => {
        this.props.deleteTodo(id);
    };

    toggleTodo = id => {
        this.props.toggleTodo(id);
    };

    clearCompleted = id => {
        this.props.clearCompleted(id);
    };

    render() {
        return (
            <>
            <div className='todoCont'>
            <h1>To-Do List</h1>
                {this.props.todos.map(item => (
                    <div key={item.id} className='todoList'>
                    <h1 onClick={() => this.toggleTodo(item.id)} className={`${item.completed ? 'completed' : ''}`}>{item.todoItem}</h1>
                    <h3 onClick={() => this.deleteTodo(item.id)} className='dBtn'>x</h3>
                    </div>
                ))}
                
                <input
                type="text"
                name="newTodo"
                value={this.state.newTodo}
                onChange={this.handleChanges}
                placeholder="Add todo"
                />
                <button onClick={this.addTodo}>Add new Todo</button>
                <button onClick={this.clearCompleted}>Clear completed</button>
            </div>
            </>
        );
    }

}

const mapStateToProps = state => {
    return {
        todos: state.todos
    };
};

export default connect(
    mapStateToProps,
    { addTodo, deleteTodo, toggleTodo, clearCompleted }
)(Todo);