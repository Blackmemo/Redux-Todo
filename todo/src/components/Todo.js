import React from 'react';
import { connect } from 'react-redux';

import { addTodo, deleteTodo } from '../actions';


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

    render() {
        return (
            <>
            <div className='todoCont'>
                {this.props.todos.map(item => (
                    <div className='todoList'>
                    <h1 key={item.id}>{item.todoItem}</h1>
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
    { addTodo, deleteTodo }
)(Todo);