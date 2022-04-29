//import logo from './logo.svg';
import Index from './components/favShow';
import IndexTwo from './components/favdescrip';
import IndexThree from './components/favImage';
import './pretty.css' 



function App() {
  let wel = "Hello There!"
  return (
    <div className="App">
          <h1 className='title'>{wel}</h1>
          <IndexThree/>
       <div className='container'>
          <Index show="Arcane" charcter="Jinx" />
          <IndexTwo show="Arcane"/>
      </div>
      
    </div>
  );
}

export default App;
