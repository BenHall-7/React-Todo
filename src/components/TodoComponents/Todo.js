import React from 'react';

class Todo extends React.Component {
    render() {
        let {todoName, completed} = this.props;
        return (
            <p style={{
                textDecoration: completed
                    ? "line-through"
                    : ""
            }}>{todoName}</p>
        )
    }
}

export default Todo;