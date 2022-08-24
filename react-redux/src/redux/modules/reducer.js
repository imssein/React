import { combineReducers } from "redux";
import todos from "../modules/todos";
import filter from "../modules/filter";
import users from "../modules/users";

export const initialState = {todos: [], filter: 'ALL'};

const reducer = combineReducers({
    todos, 
    filter,
    users,
});

export default reducer;