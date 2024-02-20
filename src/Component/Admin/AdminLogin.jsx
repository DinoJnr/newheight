import React, { useState } from 'react'
import "./AdminLogin.css"
import AdminHeader from './AdminHeader'
import { useNavigate } from 'react-router-dom'

const AdminLogin = () => {
const [passcode, setpassCode] =useState("")
const [password, setpassWord] =useState("")

let navigate = useNavigate();
  const login =()=>{

  }
  return (
  <>
  <AdminHeader></AdminHeader>
    <body>

    <div className="adminlogin-body">
          <div className="row  p-5">
            <div className=" adminlogin">
              <h2 className="admin-tag">Admin Login </h2> <br />
            
              <input
                className="adminLogin-inp"
              onChange={(e)=> setpassCode(e.target.value)}
                type="text/number"
                name="passcode"
                placeholder="Passcode"
              />
              <p></p>
              <input
                className="adminPassword"
                onChange={(e)=> setpassWord(e.target.value)}
                type="password"
                name="password"
                placeholder="Password"
              />
              <p></p>
             
              <button onChange={login} className="btn btn-secondary admin-btn">
                Login 
              </button>
              <div className="admin-new">
                <b className="onlly-admin">Only Admin are allowed here</b>
                <p className="notadmin">
                  Click here to sign up if you're not an admin.
                 
                </p>
                <a className="btn btn-primary admin-sign-up" href="/signup">
                    Login
                  </a>
              </div>
            </div>
          </div>
        </div>

      
        
    </body>
  
  </>
  )
}

export default AdminLogin