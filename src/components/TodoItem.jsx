import React from 'react';
import '../assets/styles/TodoItem.css';

function TodoItem({ todo, changeTodo, removeTodo }) {
  return (
    <label className="checkbox checkbox__container">
      <input
        className="checkbox__input"
        type="checkbox"
        onClick={() => {
          changeTodo(todo._id);
        }}
      />
      <div className={todo.isCompleted ? 'checkbox__checkmark' : ''} />
      <p
        className={
          todo.isCompleted
            ? 'checkbox__body checkbox__completed'
            : 'checkbox__body'
        }
      >
        {todo.title}
      </p>
      <button className={todo.isCompleted ? 'delete-btn delete-btn_active' : 'delete-btn'} onClick={() => removeTodo(todo._id)} />
    </label>
  );
}

export default TodoItem;
