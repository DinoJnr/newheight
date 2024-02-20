import React from "react";
import "./AdminDashBoard.css";
import AdminHeader from "./AdminHeader";

const AdminDashBoard = () => {
  return (
    <>
      <AdminHeader></AdminHeader>

      <body>
        <div className="adminDashboard">
          <div class="container-fluid">
            <div class="row">
              <div class="col-3">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">120000</h5>
                    <img src="./imgage/allcustomer.png" className="card-pic" alt="" />
                  </div>
                  <div className="card-footer">
                    <small className="text-muted">TOTAL CUSTOMER</small>
                  </div>
                </div>
              </div>
              <div class="col-3">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">
                      $<span>5000</span>
                    </h5>
                    <img src="./imgage/asset.png" className="card-pic" alt="" />
                  </div>
                  <div className="card-footer">
                    <small className="text-muted">ASSET</small>
                  </div>
                </div>
              </div>
              <div class="col-3">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">
                      $<span>1200</span>
                    </h5>
                    <img src="./imgage/debt.png" className="card-pic" alt="" />
                  </div>
                  <div className="card-footer">
                    <small className="text-muted">MONEY OUT</small>
                  </div>
                </div>
              </div>
              <div class="col-3">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">
                      $<span>500</span>
                    </h5>
                 <img src="./imgage/profitmade.png" className="card-pic" alt="" />
                  </div>
                  <div className="card-footer">
                    <small className="text-muted">PROFIT</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </>
  );
};

export default AdminDashBoard;
