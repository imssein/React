import { applyMiddleware, createStore } from "redux";
import todoApp from "./reducers/reducer";
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
// enhancer가 미들웨어이다.
const store = createStore(todoApp, composeWithDevTools(applyMiddleware(thunk)));

export default store;
