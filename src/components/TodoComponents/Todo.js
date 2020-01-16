import React from 'react';

class Todo extends React.Component {
    render() {
        console.log(this);
        return null;
        // let {todo, completed} = this.props;
        // return (
        //     <p style={{
        //         textDecoration: completed
        //             ? ""
        //             : "underline"
        //     }}>{todo}</p>
        // )
    }
}

export default Todo;