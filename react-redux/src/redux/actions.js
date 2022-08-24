import axios from "axios";
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

//users
// 깃허브 API 호출을 시작하는 것을 의미 (로딩)
export const GET_USERS_START = "GET_USERS_START";
// 깃허브 API 호출에 대한 응답이 성공적으로 돌아온 경우 (로딩끝데이터세팅)
export const GET_USERS_SUCCESS = "GET_USERS_SUCCESS";
// 깃허브 API 호출에 대한 응답이 실패로 돌아온 경우 (로딩끝에러세팅)
export const GET_USERS_FAIL = "GET_USERS_FAIL";

export function getUsersStart() {
  return {
    type: GET_USERS_START,
  };
}

//인자값이 필요한지 생각
export function getUsersSuccess(data) {
  return {
    type: GET_USERS_SUCCESS,
    data,
  };
}

export function getUsersFail(error) {
  return {
    type: GET_USERS_FAIL,
    error,
  };
}


export function getUsersThunk(){
  // dispatch는 액션을 store에 전달하는 역할 
  // dispatch를 컨테이너에서 처리했는데 이부분을 액션에서 처리 
  return async (dispatch) => { 
    try {
      dispatch(getUsersStart());
      const res = await axios.get("https://api.github.com/users");
      dispatch(getUsersSuccess(res.data));
    } catch (error) {
      dispatch(getUsersFail(error));
    }
  }
}

const GET_USERS = 'GET_USERS';

export const GET_USERS_PENDING = 'GET_USERS_PENDING';
export const GET_USERS_FULFILLED = 'GET_USERS_FULFILLED';
export const GET_USERS_REJECTED = 'GET_USERS_REJECTED';

// dispatch를 직접 할 필요없음. 
// try / catch 할 필요없음.
export function getUsersPromise(){
  return {
    type: GET_USERS,
    payload: async () => {
        const res = await axios.get("https://api.github.com/users");
        return res.data;
    }
  }
}