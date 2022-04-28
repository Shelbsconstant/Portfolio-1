//import logo from './src/logo.svg';
import './App.css';
//import Menu from './components/Menu';
//import MenuItem from './components/MenuItem';
import MenuApp from './components/MenuApp';
import data from "./data.json"

function App() {

    return (
        <MenuApp data={data} />      
    );
}

export default App;
