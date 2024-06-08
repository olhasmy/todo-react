import React from 'react';
import '../assets/styles/Footer.css';
import { NavLink } from 'react-router-dom';

function Footer({ removeAllTodos, leftTodo }) {
  return (
    <div className="footer">
      <div className="footer__amount">{leftTodo.length} items left</div>
      <nav>
        <ul className="footer__buttons">
          <li>
            <NavLink className={({ isActive }) => (isActive ? 'footer__button footer__button_active' : 'footer__button')} to="/">
              All
            </NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) => (isActive ? 'footer__button footer__button_active' : 'footer__button')} to="/active">
              Active
            </NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) => (isActive ? 'footer__button footer__button_active' : 'footer__button')} to="/completed">
              Completed
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="footer__button-clear">
        <button className="footer__button" onClick={removeAllTodos}>
          Clear completed
        </button>
      </div>
    </div>
  );
}

export default Footer;
