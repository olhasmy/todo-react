import React from 'react';
import '../../assets/styles/TodoItem.css';
import '../../assets/styles/Footer.css';
import TodoItem from '../TodoItem';

function All({ todos, changeTodo, removeTodo }) {
  return (
    <>
      {todos.map((todo) => (
        <TodoItem
          changeTodo={changeTodo}
          todo={todo}
          removeTodo={removeTodo}
          key={todo._id}
        />
      ))}
    </>
  );
}

export default All;
