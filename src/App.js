import { useEffect } from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';

import { BrowserRouter as Router , Switch , Route } from "react-router-dom";
import Checkout from './components/checkout/Checkout';
import Login from './components/login/Login';
import { auth } from './firebase/firebase';
import { useStateValue } from './stateProvider';
function App() {
  const [ {  } , dispatch] = useStateValue();

  useEffect( () => {
    auth.onAuthStateChanged( authUser => {
      if (authUser) {
        dispatch({
          type : "SET_USER",
          user : authUser
        })
      } else {
        dispatch({
          type : "SET_USER",
          user : null
        })
      }
    })
  } , [])


  return (
    <Router>
    <div className="app">
    <Header/>
    <Switch>
        <Route path="/login">
            <Login />
        </Route>
        <Route path="/checkout">
            <Checkout/>
        </Route>
        <Route path="/">
            <Home />  
        </Route>
     </Switch>
    </div>
    </Router>
  );
}

export default App;
