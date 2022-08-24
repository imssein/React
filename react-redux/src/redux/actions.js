// todo 리스트에 todo를 추가하는 액션
// 액션 타입(대문자 / _ )
export const ADD_TODO = "ADD_TODO";
export const COMPLETE_TODO = "COMPLETE_TODO";
// 액션 생성자
// 하는 일 투두리스트에 인풋으로 받아온 할 일 추가하기
// {type: ADD_TODO, text: '할일' }

export function addTodo(text) {
  return {
    type: ADD_TODO,
    text,
  };
}

// {type: COMPLETE_TODO, index: 3}
export function completeTodo(index) {
  return {
    type: COMPLETE_TODO,
    index,
  };
}

export const SHOW_ALL = "SHOW_ALL";
export const SHOW_COMPLETE = "SHOW_COMPLETE";

export function showAll() {
  return {
    type: SHOW_ALL,
  };
}
export function showComplete() {
  return {
    type: SHOW_COMPLETE,
  };
}
