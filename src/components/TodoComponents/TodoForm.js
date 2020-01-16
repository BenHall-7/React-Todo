import React from 'react';

class TodoForm extends React.Component {
    render() {
        let {todoInput, handleTextChange, handleAddTodo, handleClearCompl} = this.props;
        return <form>
            <input
                type='text'
                placeholder="Todo:"
                value={todoInput}
                onChange={handleTextChange}
            />
            <button onClick={handleAddTodo}>Add Todo</button>
            <button onClick={handleClearCompl}>Clear Completed</button>
        </form>
    }
}

export default TodoForm;