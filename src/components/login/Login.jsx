import React, {useState} from 'react';
import { Link , useHistory } from 'react-router-dom';
import { auth  } from '../../firebase/firebase';
import "./Login.css"
function Login() {
   const [email , setEmail] = useState("");
   const [password , setPassword] = useState("");
   const history = useHistory();

   const signIn = e => {
       e.preventDefault();
       auth.signInWithEmailAndPassword(email , password)
       .then((auth) => {
           history.push('/')
           
      }).catch(
          error => (alert(error.message))
      )
   }
   const registerIn = e => {
       e.preventDefault();
        auth.createUserWithEmailAndPassword(email , password)
        .then((auth) => {
          if(auth){
             history.push('/')
          }
        }).catch(
            error => (alert(error.message))
        )
   }

    return (
        <div className="login">
        <Link to="/login">
          <img  
            className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
              alt="logo"
          />  
          </Link>
          <div className="login__container">
             <h1>Sign-in</h1>

             <form>
                 <h5>E-mail</h5>
                 <input  type="text" value={email} onChange={e => setEmail(e.target.value)}/>

                 <h5>Password</h5>
                 <input  type="password" value={password}  onChange={e => setPassword(e.target.value)}/>

                 <button className="login__signInButton" onClick={signIn}> Sign In</button>
             </form>
             <p> By signin-in you agree to the AMAZON FAKE CLONE Conditions of Use & sale. please see our privacy Notice and our Interest-Based ads Notice.</p>

             <button className="login__registerButton" onClick={registerIn}> Create your Amazon Account</button>
          </div>
        </div>
    )
}

export default Login
