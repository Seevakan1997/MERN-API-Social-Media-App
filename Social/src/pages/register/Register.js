import React, { useRef } from 'react'
import './register.css'
import axios from 'axios';
import { useNavigate  } from "react-router-dom";

export default function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const navigate = useNavigate ();

  const handleClick = async (e)=>{
    e.preventDefault();
    if(passwordAgain.current.value !== password.current.value){
      passwordAgain.current.setCustomValidity("Passwords not match!");
    }
    else{
      const user = {
        username:username.current.value,
        email:email.current.value,
        password:password.current.value
      };
      try{
        console.log(user,"hello");
        await axios.post("/auth/register",user);
        navigate("/login");
      }
      catch(err){
        console.log(err);
      }
    }
  }

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">StarKing</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on StarKing.
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <input placeholder="Username" ref={username} required className="loginInput" />
            <input placeholder="Email" type='email' ref={email} className="loginInput" required/>
            <input placeholder="Password" type='password' ref={password} className="loginInput" minLength={6} required/>
            <input placeholder="Password Again" type='password' ref={passwordAgain} className="loginInput" required/>
            <button className="loginButton" type='submit'>Sign Up</button>
            <button className="loginRegisterButton">
              Log into Account
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
