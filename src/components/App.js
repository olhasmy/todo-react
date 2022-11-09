import React from 'react';
import '../assets/styles/App.css';
import All from './pages/All';
import Footer from './Footer';
import Active from './pages/Active';
import Completed from './pages/Completed';
import { Route, Routes } from 'react-router-dom';

function App() {
  const [todos, setTodos] = React.useState(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      return JSON.parse(savedTodos);
    } else {
      return [];
    }
  });
  const [title, setTitle] = React.useState('');
  const [checked, setChecked] = React.useState(true);
  const leftTodo = [...todos].filter((todo) => todo.isCompleted === false);
  const doneTodo = [...todos].filter((todo) => todo.isCompleted === true);

  const changeTodo = (id) => {
    const copy = [...todos];
    const current = copy.find((todo) => todo._id === id);
    current.isCompleted = !current.isCompleted;
    setTodos(copy);
  };

  function checkAllTodos() {
    setChecked(!checked);
    todos.map((todo) => (todo.isCompleted = checked));
    setTodos(todos);
  }

  const removeTodo = (id) => {
    setTodos([...todos].filter((todo) => todo._id !== id));
  };

  const removeAllTodos = () => {
    setTodos(todos.filter((todo) => todo.isCompleted === false));
  };

  const addTodo = (e) => {
    e.preventDefault();
    setTodos((prev) => [
      {
        _id: Math.random(),
        title,
        isCompleted: false,
      },
      ...prev,
    ]);
    setTitle('');
  };

  React.useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="app">
      <header className="app__header">
        <h1 className="header">todos</h1>
      </header>
      <main className="app__main">
        <div className="main">
          <form className="main__add" onSubmit={addTodo}>
            <input
              className="check-all"
              type="button"
              onClick={checkAllTodos}
            />
            <input
              className="input-add"
              required
              onChange={(e) => setTitle(e.target.value)}
              name="title"
              value={title}
              type="text"
              placeholder="What needs to be done?"
            />
          </form>
          <Routes>
            <Route
              path="/active"
              element={
                <Active
                  leftTodo={leftTodo}
                  changeTodo={changeTodo}
                  removeTodo={removeTodo}
                />
              }
            />
            <Route
              path="/completed"
              element={
                <Completed
                  doneTodo={doneTodo}
                  changeTodo={changeTodo}
                  removeTodo={removeTodo}
                />
              }
            />
            <Route
              exact
              path="/"
              element={
                <All
                  todos={todos}
                  changeTodo={changeTodo}
                  removeTodo={removeTodo}
                />
              }
            />
          </Routes>
          <Footer leftTodo={leftTodo} removeAllTodos={removeAllTodos} />
        </div>
      </main>
    </div>
  );
}

export default App;
