import logo from './logo.svg';
import './App.css';
import { addTodo } from './redux/actions';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import useReduxDispatch from './hooks/useReduxDispatch';
function App() {
  const dispatch = useReduxDispatch();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <TodoList />
      <TodoForm />
    </div>
  );

  function click(){
    dispatch(addTodo('코딩'))
  }
}

export default App;
