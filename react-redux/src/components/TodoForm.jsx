import React, {useRef} from 'react';
import { addTodo } from '../redux/actions';
import useReduxDispatch from '../hooks/useReduxDispatch';
function TodoForm(props) {
    const inputRef = useRef();
    const dispatch = useReduxDispatch();

    return (
        <div>
            <input ref={inputRef} /><button onClick={click}>추가</button>
        </div>
    );

    function click(){
        dispatch(addTodo(inputRef.current.value))
    }
}

export default TodoForm;