import React from "react";
import "./Dashboard.css";
import Header from '../Screen/Header'

const Dashboard = () => {
  return (
    <>
       <Header></Header>
      <body>
        <div className="details-card">
          <div className="details">
            <p className="total-savings">Total savings</p>
            <p className="users-accountnumber">
              A/C: <span> 94903847748df</span>
            </p>
            <b className="users-balance">
              $ <span>20000000</span>
            </b>
            <p className="users-name"> aAli Ali</p>
          </div>
        </div>

        <div type="button" className="profile-card">
          <div className="profile-details">
            <p className="profile-tag">Profile</p>
          </div>
        </div>

        <div className="card-box">
          <div className="container-fluid">
            <div className="row">
              <div className="col-2">
                <div
                  className="card"
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
                >
                  <div className="card-body">
                    <h5 className="card-title">Fund Account</h5>
                    <p className="card-text">
                      <img
                        className="fund-png"
                        src="./imgage/Fund.png"
                        alt=""
                      />
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-2">
                <div
                  className="card"
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop1"
                >
                  <div className="card-body">
                    <h5 className="card-title">Withdraw</h5>
                    <p className="card-text">
                      <img
                        className="withdraw-png"
                        src="./imgage/withdraw.png"
                        alt=""
                      />
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-2">
                <div
                  className="card"
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop2"
                >
                  <div className="card-body">
                    <h5 className="card-title">Save Money</h5>
                    <p className="card-text">
                      <img
                        className="save-png"
                        src="./imgage/save.png"
                        alt=""
                      />
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-2">
                <a className="card card-loan" type="button" href="/requestloan">
                  <div className="card-body">
                    <h5 className="card-title">Loan</h5>
                    <p className="card-text">
                      <img
                        className="save-png"
                        src="./imgage/loan.png"
                        alt=""
                      />
                    </p>
                  </div>
                </a>
              </div>
              <div className="col-2">
                <a href="/transactionhistory" className="card card-trans" type="button">
                  <div className="card-body">
                    <h5 className="card-title">Transaction History</h5>
                    <p className="card-text">
                      <img
                        className="transaction-png"
                        src="./imgage/transaction.png"
                        alt=""
                      />
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Fund Account */}

        <div
          class="modal fade"
          id="staticBackdrop"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabindex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="staticBackdropLabel">
                  Fund Account
                </h1>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Amount"
                />
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" class="btn btn-primary">
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </div>

        {/*Withdraw*/}

        <div
          class="modal fade"
          id="staticBackdrop1"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabindex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="staticBackdropLabel">
                  Withdraw
                </h1>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <input
                  type="Number"
                  className="form-control"
                  placeholder="Account Number"
                />
                <input
                  type="Number"
                  className="form-control"
                  placeholder="Amount"
                />
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" class="btn btn-primary">
                  Understood
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Savemoney */}

        <div
          class="modal fade"
          id="staticBackdrop2"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabindex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="staticBackdropLabel">
                  Modal title
                </h1>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">...</div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" class="btn btn-primary">
                  Understood
                </button>
              </div>
            </div>
          </div>
        </div>
      </body>
    </>
  );
};

export default Dashboard;
