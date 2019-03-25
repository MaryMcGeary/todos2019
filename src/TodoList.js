import React, { Component } from "react";

class TodoList extends Component {
  render() {
    const { todos } = this.props; //in curlies bcse pulling todos off props
    //above means same thing as const todos = this.props.todos;

    // ["Foo", "Bar", "Baz"]
    // should become:
    //<li>Foo</li><li>Bar...
    const todoListItems = todos.map(item => <li key={item}>{item}</li>);
    return <ul>{todoListItems}</ul>;
  }
}

export default TodoList;
