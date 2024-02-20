import React from 'react'
import "./Signup.css"
import Header from '../Screen/Header'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Signup = () => {
const[fullname,setfullName] = useState("")
const[email, setEmail]= useState("")
const [phone, setphoneNumber] = useState("");
const [password, setPassword] = useState("");

const endpoint ="http://localhost:";
let navigate =useNavigate();
const signup =()=>{
  if (fullname === "" || email === "" || phone === "" || password === "") {
    alert("Fill in the form");
  } else {
    let customerDetails = {
      fullname,
      email,
      phone,
      password
    };
    axios
      .post(endpoint, customerDetails)
      .then((response) => {
        console.log(response);

        if (response.data.message) {
          navigate("/signin ");
        } else {
          console.log(response.data.message);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
    
  return (
   <>
      <Header></Header>
   <body>
   <div className="sign-up">
          <div className="row p-5">
            <div className=" design-signup">
              <h2 className="signup-tag">SIGN UP </h2> <br />
              <input
                type="text"
               onChange={(e)=>setfullName(e.target.value)}
                name="fullname"
                placeholder="Full Name"
                className=" username"
              />
              <br />
              <p></p>
              <input
                type="number"
               onChange={(e)=>setphoneNumber(e.target.value)}
                name="phone"
                className=" phonenumber"
                placeholder="Phone Number"
              />
              <br />
              <p></p>
              <input
                type="email"
              onChange={(e)=>setEmail(e.target.value)}
                name="email"
                className=" email"
                placeholder="Email"
              />
              <br />
              <p></p>
              <input
                type="password"
       onChange={(e)=>setPassword(e.target.value)}
                name="password"
                className=" password"
                placeholder="Password"
              />
              <br />
              <p></p>
              <input
                type="password"
              onChange={(e)=>setPassword(e.target.value)}
                name="password"
                className="    confirm-password "
                placeholder="Confirm Password"
              />
              <br />
              <p></p>
              <div className="check-box-input">
                <input
                  className="accept-terms-check-box"
                  type="checkbox"
                ></input>
                <b className="accept">Accept the terms</b>
              </div>
              <br />
              <br />
              <button
               onClick={signup}
                className="btn btn-secondary form-control signup-btn"
              >
                Sign Up
              </button>
              <div className="already-con">
                <b className="already-have">Already Have An Account?</b>
                <p className="kindly-signin">Kindly Sign In Here!</p>
                <a className="btn btn-primary login-in-route" href="/signin">
                  Login in
                </a>
              </div>
            </div>
          </div>
        </div>
   </body>
   </>
  )
}

export default Signup