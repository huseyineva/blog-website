import React from "react";
import { auth, provider } from "../firebase-config";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Button from "../components/button/Button";
import Form from "../components/form/Form";

function Login({ setIsAuth }) {
  let navigate = useNavigate();

  const signInWithGoogle = (e) => {
    e.preventDefault();
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      navigate("/");
    });
  };

  return (
    <div className="App">
      <Form>
        <p>Sign In With Google to Continue</p>
        <Button onClick={signInWithGoogle} name="Sign in with Google" />
      </Form>
    </div>
  );
}

export default Login;
