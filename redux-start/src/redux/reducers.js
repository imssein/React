import { ADD_TODO, COMPLETE_TODO, SHOW_ALL, SHOW_COMPLETE } from "./actions";
import { combineReducers } from 'redux'
// state의 모습
// ['코딩', '점심 먹기'];
// [{text: '코딩', done: false}, {text: '점심 먹기}]
// 최초 todoApp이 실행될 때 초기 상태를 설정해줘야함.
// {todos: [{text: '코딩', done: false}, {text: '점심 먹기}], filter: 'ALL'}

const initialState = { todos: [], filter: "ALL" };

export function todoApp(previousState = initialState, action) {
  // 초기값을 설정해주는 부분
  // if(previousState === undefined ){
  //     return [];
  // }

  if (action.type === ADD_TODO) {
    return {
      ...previousState,
      todos: [...previousState.todos, { text: action.text, done: false }],
    };
  }
  if (action.type === COMPLETE_TODO) {
    return {
      ...previousState,
      todos: previousState.map((todo, index) => {
        if (index === action.index) {
          return { ...todo, done: true };
        }
        return todo;
      }),
    };
  }
//   if (action.type === SHOW_COMPLETE){
//     return {
//         ...previousState,
//         filter: 'COMPLETE',
//     };
//   }
//   if (action.type === SHOW_ALL){
//     return {
//         ...previousState,
//         filter: 'ALL',
//     };
//   }
  return previousState;
}
