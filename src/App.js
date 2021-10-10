import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import DIrectory from './components/directory/DIrectory';

function App() {
  return (
    <div className="app">
     <Header/>
     <Home/>
     <DIrectory/>
    </div>
  );
}

export default App;
