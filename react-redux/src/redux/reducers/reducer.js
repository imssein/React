import { combineReducers } from "redux";
import todos from "./todos";
import filter from "./filter";
import users from "./users";

export const initialState = {todos: [], filter: 'ALL'};

const reducer = combineReducers({
    todos, 
    filter,
    users,
});

export default reducer;