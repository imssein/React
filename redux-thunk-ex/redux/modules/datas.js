import axios from "axios";

export const GET_DATAS_START = "GET_DATAS_START";
export const GET_DATAS_SUCCESS = "GET_DATAS_SUCCESS";
export const GET_DATAS_FAIL = "GET_DATAS_FAIL";

// 액션 생성 함수
export function getDatasStart() {
    return {
      type: GET_DATAS_START,
    };
  }
  
  export function getDatasSuccess(data) {
    return {
      type: GET_DATAS_SUCCESS,
      data,
    };
  }
  
  export function getDatasFail(error) {
    return {
      type: GET_DATAS_FAIL,
      error,
    };
  }

// 초기값
const initialState = {
    loading: false,
    data: [],
    error: null,
  };


  export default function reducer(state = initialState, action) {
    if (action.type === GET_DATAS_START) {
      return {
        ...state,
        loading: true,
        error: null,
      };
    }
    if (action.type === GET_DATAS_SUCCESS) {
      return {
        ...state,
        loading: false,
        data: action.data,
      };
    }

  
    if (action.type === GET_DATAS_FAIL) {
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    }

  
    return state;
  }
  
  // redux-thunk
export function getDatasThunk() {
    // dispatch는 액션을 store에 전달하는 역할
    // dispatch를 컨테이너에서 처리했는데 이부분을 액션에서 처리
    return async (dispatch) => {
      try {
        dispatch(getDatasStart());
        // sleep
        const res = await axios.get("http://localhost:9090/v1/api/cryptocurrencies");
        dispatch(getDatasSuccess(res.data));
        
      } catch (error) {
        dispatch(getDatasFail(error));
      }
    };
  }