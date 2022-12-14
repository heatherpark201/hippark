import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { LoginForm } from "../SessionForms";
import DemoUserButton from "./DemoUserButton";
import "./LoginFormPage.css"


function LoginFormPage() {
  const sessionUser = useSelector((state) => state.session.user);

  return sessionUser ? (
    <Redirect to="/" />
  ) : (
    <div className="Login-bg">
      <div className="Login-box">
        <h1>Welcome back!</h1>
        <h3>Let's get you outside.</h3>
        <LoginForm />
        <DemoUserButton />
      </div>
    </div>
    
  );
}

  
export default LoginFormPage;