import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase/FirebaseSetUp";
import { useState, useEffect } from "react";
import styles from "./signUp.css";

const SignUp = (props) => {
  const {stateObject} = props
  const {state, setState} = stateObject

  const handleGoogle = async (e) => {
    const provider = await new GoogleAuthProvider();
    return signInWithPopup(auth, provider).then((data) => {
      setState(data.user.email);
      localStorage.setItem("user-google-authentication-email", data.user.email);
    }).catch((error) => {
      alert('Sign up with google to continue')
      console.log("Caught error Popup closed");
    });
  };

  // useEffect(() => {
  //   setState(localStorage.getItem('user-google-authentication-email'))
  // })

  return (
    <div className="bucket">
      <div className="second-layer">
      <h1 className="heading-main">Lead Enrichment Preview Tool</h1>
        <div className="auth">
          <button
            className={state ? "button button-green" : "button"}
            onClick={handleGoogle}
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/120px-Google_%22G%22_logo.svg.png"
              className="logo"
            />
            <p className="p-0 m-0 pb-1">Sign in with Google</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
