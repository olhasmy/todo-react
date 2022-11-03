import React from 'react';
import './All.css';
import Footer from '../Footer/Footer';

function All() {
    const [todos, setTodos] = React.useState([]);
    const [title, setTitle] = React.useState("");

    function handlePress(e, title) {
        if(e.key === 'Enter') {
            setTodos([title, ...todos]);
            setTitle('');
        }
    }

    return (
        <div className="all">
            <form className="all__add" onSubmit={e => {e.preventDefault();}}>
                <button className="button-more"/>
                <input onChange={e => setTitle(e.target.value)} value={title} onKeyPress={e => handlePress(e, title)} type="text" className="input-add" placeholder="What needs to be done?"/>
            </form>
            { todos.map((deed, id) => (
                <label className="checkbox checkbox__container" key={`${deed}_${id}`}>
                    <input type="checkbox"/>
                    <div className="checkbox__checkmark"></div>
                    <p className="checkbox__body">{deed}</p>
                </label>
            ))}
            <Footer/>
        </div>
    );
}

export default All;
