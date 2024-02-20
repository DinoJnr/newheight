import React from "react";
import "./Signin.css";
import axios from "axios"
import Header from "../Screen/Header";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const Signin = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  let navigate = useNavigate();
  const endpoint = "http://localhost:/signin";
  const signin = () => {
    if (email == "" || password == "") {
      console.log("Enter correct information");
    } else {
      let user = { email, password };
      axios.post(endpoint, user).then((result) => {
        if (!result.data.status) {
          console.log(result.data.message);
        } else {
          localStorage.token = result.data.token;
          navigate("/dashboard");
        }
      });
    }
  };
  return (
    <>
      <Header></Header>
      <div className="signin">
        <div className="row  p-5">
          <div className=" design-signin">
            <h2 className="signin-tag">SIGN IN </h2> <br />
            <input
              className=" sign-input"
              onChange={(e) => setemail(e.target.value)}
              type="email"
              name="email"
              placeholder="Email"
            />
            <p></p>
            <input
              className="sign-password"
              onChange={(e) => setpassword(e.target.value)}
              type="password"
              name="password"
              placeholder="Password"
            />
            <p></p>
            <p className="forgotten">Forgotten password?</p>
            <button onClick={signin} className="btn btn-secondary signin-btn">
              Sign In
            </button>
            <div className="create-new">
              <b className="you-dont-have">You don't have an account?</b>
              <p className="create">Create a new account here.</p>
              <a className="btn btn-primary signin-sign-up" href="/signup">
                Sign up
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signin;
