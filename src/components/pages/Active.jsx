import React from 'react';
import TodoItem from '../TodoItem';

function Active({ changeTodo, leftTodo, removeTodo }) {
  return (
    <>
      {leftTodo.map((todo) => (
        <TodoItem
          changeTodo={changeTodo}
          removeTodo={removeTodo}
          todo={todo}
          key={todo._id}
        />
      ))}
    </>
  );
}

export default Active;
