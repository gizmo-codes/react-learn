import logo from './logo.svg';
import './App.css';
import { Hello, Hello2, Hello3, Hello4 } from './FunctionTesting';
import Header from './Header'
import Content from './Content'
import Footer from './Footer'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          Edit <code>src/App.js</code> and save to reload.
          <Hello/>
          <Hello2/>
          <Hello3/>
          <Hello4/>
          <Header/>
          <Content/>
          <Footer/>
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
