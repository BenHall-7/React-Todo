// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';

class TodoList extends React.Component {
    render() {
        let todo = this.props.todo;
        return (
            <div>
                {todo.map(
                    item => <Todo key={item.id} todoName={item.todoName} completed={item.completed}/>
                )}
            </div>
        )
    }
}

export default TodoList;