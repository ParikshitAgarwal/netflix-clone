import React, { useRef } from "react";
import { Link } from "react-router-dom";
import netflixLogo from "../images/netflix_logo.png";

import "../css/sign_in.css";
import { auth } from "../firebase";

const SignIn = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const signin = (e) => {
    e.preventDefault();

    auth.signInWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.current.value
    ).then((authUser) => {
      console.log(authUser)
    }).catch((error) => {
        alert(error.message)
    })

  }
  return (
    <div className="sign-in">
      <img src={netflixLogo} className="logo" alt="" />

      <div className="sign-in_container">
        <div className="sign-in_content">
          <h1>Sign In</h1>
          <form action="" className="sign-in_form">
            
            <label htmlFor="">Email or phone number</label>
            <input ref={emailRef} type="email" required />
            <label htmlFor="">password</label>
            <input ref={passwordRef} type="password" required />
            <Link to="/home">
              {" "}
              <button type="submit" onClick={signin}>
                Sign In
              </button>
            </Link>
          </form>

          <h4 className="signup">
            <span className="grey_text">New to Netflix? </span>
            <span className="signup_link" onClick={register}>
              Sign Up now
            </span>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
