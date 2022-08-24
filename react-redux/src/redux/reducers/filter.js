import { SHOW_ALL, SHOW_COMPLETE } from "../actions";

const initialState = 'ALL';

// {todos: [{ text: '코딩', done: false }, { text: '점심 먹기', done: false }], filter: 'ALL'}
function filter(previousState = initialState, action){
    if(action.type === SHOW_COMPLETE){
        return 'COMPLETE';
    }
    if(action.type === SHOW_ALL){
        return 'ALL';
    }
    return previousState;
}

export default filter;