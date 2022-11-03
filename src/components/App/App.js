import './App.css';
import All from "../All/All";
import Footer from "../Footer/Footer";
import Active from "../Active";


function App() {
    return (
        <div className="app">
          <header className="app__header">
              <h1 className="header">todos</h1>
          </header>
          <main className="app__main">
              <All/>
              {/*<Active/>*/}
          </main>
        </div>
    );
}

export default App;
