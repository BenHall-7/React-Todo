import React from 'react';

class Todo extends React.Component {
    render() {
        let {todoName, completed, handleSetCompl} = this.props;
        return (
            <p style={{
                    textDecoration: completed
                    ? "line-through"
                    : ""
                }}
                onClick={handleSetCompl}
            >{todoName}</p>
        )
    }
}

export default Todo;