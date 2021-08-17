import './App.css';
import logo from "./logo.png";
import Dictionary from "./Dictionary.js";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          <small>
            <a
              href="https://github.com/lipka-coder/weather-app-react"
              className="github-link"
            >
              Open-source code 
            </a>
              {" "} by {" "} 
            <a
              href="https://www.linkedin.com/in/katarzyna-podlipska"
              className="linkedin-link">
                Kasia Podlipska 
            </a>👩‍💻
          </small>
        </footer>
      </div>
    </div>
  );
}

export default App;
