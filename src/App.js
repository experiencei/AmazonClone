import { useEffect } from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Orders from './components/orders/Orders';

import { BrowserRouter as Router , Switch , Route } from "react-router-dom";
import Checkout from './components/checkout/Checkout';
import Login from './components/login/Login';
import { auth } from './firebase/firebase';
import { useStateValue } from './stateProvider';
import Payment from './components/payment/Payment';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe("pk_test_51JZ1ycKGIJkkC9mH7KdDoL1405zKGoTLPtrTAZIBgN18rW6piu4UOzUsiluqGs9IJX9Pblj7FBCoS69f1V21umzX00Txk5zcZt")
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
    
    <Switch>
    <Route path="/orders">
            <Header />
            <Orders />
          </Route>
        <Route path="/login">
            <Login />
        </Route>
        <Route path="/checkout">
           <Header/>
            <Checkout/>
        </Route>
        <Route exact path="/">
          <Header/>
            <Home />  
        </Route>
        <Route path="/payment">
          <Header/>
            <Elements stripe={promise}>
              <Payment /> 
            </Elements> 
        </Route>
     </Switch>
    </div>
    </Router>
  );
}

export default App;
