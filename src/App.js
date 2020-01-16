import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todo: [],
      todoInput: ""
    };
  }
  
  handleTextChange = event => {
    this.setState({
      todoInput: event.target.value
    });
  }

  handleClearCompl = event => {
    event.preventDefault();
    this.setState({
      todo: this.state.todo.map(todo => ({...todo, completed: false}))
    })
  }

  handleAddTodo = event => {
    event.preventDefault();
    let input = this.state.todoInput;
    if (input === "") {
      return;
    }
    this.addTodo(input)
  }

  addTodo(todoName) {
    this.setState({todo: [...this.state.todo, {
      todo: todoName,
      id: Date.now(),
      completed: false,
    }]})
  }

  render() {
    return (
      <div>
        <TodoList todo={this.state.todo}/>
        <TodoForm
          todoInput={this.state.todoInput}
          handleTextChange={this.handleTextChange}
          handleAddTodo={this.handleAddTodo}
          handleClearCompl={this.handleClearCompl}
        />
      </div>
    );
  }
}

export default App;
