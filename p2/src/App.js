import logo from './logo.svg';
import './App.css';
import Index from './components/favShow';
import IndexTwo from './components/favdescrip';


function App() {
  return (
    <div className="App">
          <Index show="Arcane" charcter="Jinx" />
          <IndexTwo/>
    </div>
  );
}

export default App;
