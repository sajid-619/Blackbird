import logo from './Vector.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to Propelleraero
        </p>
        <a
          className="App-link"
          href="https://www.propelleraero.com/dirtmate/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click here to visit our website
        </a>
      </header>
    </div>
  );
}

export default App;
