import { createWrapper } from "next-redux-wrapper";
import { createStore } from "redux";
import reducer from '../reducers';

const configureStore = () => {
    const store = createStore(reducer);
    return store;

};

// 두번째 인자는 옵션 객체
// debug가 true일 때 redux에 대해서 조금 더 자세하게 나옴. \
// 개발할 때 더 좋음. 
const wrapper = createWrapper(configureStore, { debug: process.env.NODE_ENV === 'development' });

export default wrapper;

