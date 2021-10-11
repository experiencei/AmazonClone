import { useEffect } from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';

import { BrowserRouter as Router , Switch , Route } from "react-router-dom";
import Checkout from './components/checkout/Checkout';
import Login from './components/login/Login';
import { auth } from './firebase/firebase';
import { useStateValue } from './stateProvider';
import Payment from './components/payment/Payment';
function App() {
  const [ {} , dispatch] = useStateValue();

  useEffect( () => {
    auth.onAuthStateChanged( authUser => {
     console.log(" this user is", authUser);
      if (authUser) {
        dispatch({
          type : "SET_USER",
          item : authUser
        })
      } else {
        dispatch({
          type : "SET_USER",
          item : null
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
        <Route exact path="/">
            <Home />  
        </Route>
        <Route path="/payment">
            <Payment />  
        </Route>
     </Switch>
    </div>
    </Router>
  );
}

export default App;
