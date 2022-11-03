import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <div className="footer">
            <div className="footer__amount">2 items left</div>
            <ul className="footer__buttons">
                <li><button className="button">All</button></li>
                <li><button className="button">Active</button></li>
                <li><button className="button">Completed</button></li>
            </ul>
            <div className="footer__button-clear">
                <button className="button">Clear completed</button>
            </div>
        </div>
    );
}

export default Footer;
