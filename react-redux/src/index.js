import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/store';
import ReduxContext from './contexts/reduxContext';
//import { addTodo, completeTodo } from './redux/actions';

//구독하다? store에 변경 사항이 생기는 것을 구독함 
// 하나하나 getState로 출력할 필요없이 subscribe를 통해 변경된 상태 출력 가능
// store.subscribe(() => {
//   console.log(store.getState()); 
// });

// store.dispatch(addTodo('할일'))
// store.dispatch(completeTodo((0)))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ReduxContext.Provider value={store}>
    <App />
    </ReduxContext.Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
