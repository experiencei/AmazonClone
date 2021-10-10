import React from 'react';
import { Link } from 'react-router-dom';
import "./Login.css"

function Login() {
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
                 <input  type="text"/>

                 <h5>Password</h5>
                 <input  type="password"/>

                 <button> Sign In</button>
             </form>
             <p> By signin-in you agree to Amazon's Conditions of Use & sale. please see our privacy Notice and our Interest-Based ads Notice.</p>
          </div>
        </div>
    )
}

export default Login
