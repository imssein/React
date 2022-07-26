import React from "react";
import useReduxState from "../hooks/useReduxState";

function TodoList(props) {
  const state = useReduxState();

  return (
      <ul>
        {state.todos.map((todo) => {
          return <li>{todo.text}</li>;
        })}
      </ul>
  );
}

export default TodoList;
