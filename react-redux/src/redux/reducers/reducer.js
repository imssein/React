import { combineReducers } from "redux";
import todos from "./todos";
import filter from "./filter";

export const initialState = {todos: [], filter: 'ALL'};

const reducer = combineReducers({
    todos, 
    filter,
});

export default reducer;