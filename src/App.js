import logo from './logo.svg';
import Header from './components/Header'
import Tile from './components/Tile'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <header className="App-header">
      <Tile firstLine="Artificial" secondLine="Intelligence" color="white" />
      <Tile firstLine="DevOps" secondLine="Engineering" color="black"/>
      <Tile firstLine="Cloud" secondLine="Infrastructure" color="white"/>
      <Tile firstLine="Software" secondLine="Engineering" color="black"/>

      </header>
    </div>
  );
}

export default App;
