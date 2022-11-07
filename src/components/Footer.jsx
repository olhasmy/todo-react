import React from 'react';
import '../assets/styles/Footer.css';
import { Link } from 'react-router-dom';

function Footer({ removeAllTodos, leftTodo }) {
  return (
    <div className="footer">
      <div className="footer__amount">{leftTodo.length} items left</div>
      <nav>
        <ul className="footer__buttons">
          <li>
            <Link className="button" to="/">
              All
            </Link>
          </li>
          <li>
            <Link className="button" to="/active">
              Active
            </Link>
          </li>
          <li>
            <Link className="button" to="/completed">
              Completed
            </Link>
          </li>
        </ul>
      </nav>
      <div className="footer__button-clear">
        <button className="button" onClick={removeAllTodos}>
          Clear completed
        </button>
      </div>
    </div>
  );
}

export default Footer;
