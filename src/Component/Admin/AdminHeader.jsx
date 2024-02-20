import React from 'react'

const AdminHeader = () => {
  return (
    <>
    <body>
        <div className="header">
          <div className="navbar">
            <div className="header-title">
              <img className="logo" src="./imgage/logo.png" alt="" />
              <p className="header-title-name">
                New Height Credit & THrift Society
              </p>

              <div className="nav">
                <ul className="nav-ul">
                  <li>
                    {" "}
                    <a href="">Dashbaord</a>
                  </li>
                  
                  <li>
                    <a href="">Customer Information</a>
                  </li>
                  <li className="dashboard-li">
                    <a href="">Transaction History</a>{" "}
                  </li>
                  <li>
                    <a href="">Feedbacks</a>
                  </li>
                  <li>
                    <a href="">Logout</a>
                  </li>
                </ul> 
              </div>
            </div>
          </div>
        </div>
      </body>
    
    </>
  )
}

export default AdminHeader