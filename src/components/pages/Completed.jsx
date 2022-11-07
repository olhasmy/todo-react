import React from 'react';
import TodoItem from '../TodoItem';

function Completed({ doneTodo, changeTodo, removeTodo }) {
  return (
    <>
      {doneTodo.map((todo) => (
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

export default Completed;
