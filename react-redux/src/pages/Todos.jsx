import React from 'react';
import TodoListContainer from '../containers/TodoListContainer';
import TodoFormContainer from "../containers/TodoFormContainer";

function Todos(props) {
    return (
        <div>
            <TodoListContainer />
            <TodoFormContainer />
        </div>
    );
}

export default Todos;