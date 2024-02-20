import React from "react";
import "./Savemoney.css";
import FontAwesome from "react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import Header from '../Screen/Header'
const Savemoney = () => {
  return (
    <>
       <Header></Header>
      <body>
        <div className="savedetails-card">
          <div className="savedetails">
            <p className="saved-savings">Thrift savings</p>
            <p className="saveusers-accountnumber">
              A/C: <span> 94903847748df</span>
            </p>
            <b className="saaveusers-balance">
              $ <span>20000000</span>
            </b>
            <p className="saveusers-name"> aAli Ali</p>
          </div>
        </div>

        <div type="button" className="createsave-card">
          <div className="saveitems-details">
            <p className="Thrift-tag">Create Thrift Plan</p>
            <button
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
              className="btn btn-secondary create-plan"
            >
              Create Plan
            </button>
          </div>
        </div>

        <h1 className="thrift-plan-tag">THRIFT PLANS</h1>
        <div className="created-plans-savings">
          <div className="container-fluid">
            <div className="row">
              <div className="col-3">
                <div className="card savecard">
                  <div className="card-body">
                    <h5 className="card-title">Emergency</h5>
                    <p className="card-text targetamount-text">
                      Target Amount: $<span>500</span>
                    </p>
                    <p className="card-text currentamount-text">
                      Current Amount: $<span>500</span>
                    </p>
                    <button
                      data-bs-toggle="modal"
                      data-bs-target="#staticBackdrop1"
                      className="btn btn-primary add-btn"
                    >
                      {" "}
                      Add Money
                    </button>

                    <button
                      data-bs-toggle="modal"
                      data-bs-target="#staticBackdrop3"
                      className="btn btn-success withdrawal-btn"
                    >
                      Withdraw
                    </button>
                  </div>
                  <div className="card-footer footer-display">
                    <button
                      className="btn btn-warning edit-plan"
                      data-bs-toggle="modal"
                      data-bs-target="#staticBackdrop2"
                    >
                      {" "}
                      edit
                    </button>
                    <button className="btn btn-danger delete-plan">
                      Delete
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="card savecard">
                  <div className="card-body">
                    <h5 className="card-title">School Fees</h5>
                    <p className="card-text targetamount-text">
                      Target Amount: $<span>500</span>
                    </p>
                    <p className="card-text currentamount-text">
                      Current Amount: $<span>500</span>
                    </p>
                    <button
                      data-bs-toggle="modal"
                      data-bs-target="#staticBackdrop1"
                      className="btn btn-primary add-btn"
                    >
                      {" "}
                      Add Money
                    </button>
                    <button
                      data-bs-toggle="modal"
                      data-bs-target="#staticBackdrop3"
                      className="btn btn-success withdrawal-btn"
                    >
                      Withdraw
                    </button>
                  </div>
                  <div className="card-footer">
                    <button
                      className="btn btn-warning edit-plan"
                      data-bs-toggle="modal"
                      data-bs-target="#staticBackdrop2"
                    >
                      edit
                    </button>
                    <button className="btn btn-danger delete-plan">
                      {" "}
                      Delete
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="card  savecard">
                  <div className="card-body">
                    <h5 className="card-title">House Rent</h5>
                    <p className="card-text targetamount-text">
                      Target Amount: $<span>500</span>
                    </p>
                    <p className="card-text currentamount-text">
                      Current Amount: $<span>500</span>
                    </p>
                    <button
                      data-bs-toggle="modal"
                      data-bs-target="#staticBackdrop1"
                      className="btn btn-primary add-btn"
                    >
                      {" "}
                      Add Money
                    </button>
                    <button
                      data-bs-toggle="modal"
                      data-bs-target="#staticBackdrop3"
                      className="btn btn-success withdrawal-btn"
                    >
                      Withdraw
                    </button>
                  </div>
                  <div className="card-footer">
                    <button
                      className="btn btn-warning edit-plan"
                      data-bs-toggle="modal"
                      data-bs-target="#staticBackdrop2"
                    >
                      {" "}
                      edit
                    </button>
                    <button className="btn btn-danger delete-plan">
                      Delete
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="card savecard">
                  <div className="card-body">
                    <h5 className="card-title">Japa</h5>
                    <p className="card-text targetamount-text">
                      Target Amount: $<span>500</span>
                    </p>
                    <p className="card-text currentamount-text">
                      Current Amount: $<span>500</span>
                    </p>
                    <button
                      data-bs-toggle="modal"
                      data-bs-target="#staticBackdrop1"
                      className="btn btn-primary add-btn"
                    >
                      {" "}
                      Add Money
                    </button>
                    <button
                      data-bs-toggle="modal"
                      data-bs-target="#staticBackdrop3"
                      className="btn btn-success withdrawal-btn"
                    >
                      Withdraw
                    </button>
                  </div>
                  <div className="card-footer">
                    <button
                      className="btn btn-warning edit-plan"
                      data-bs-toggle="modal"
                      data-bs-target="#staticBackdrop2"
                    >
                      edit
                    </button>
                    <button className="btn btn-danger delete-plan">
                      {" "}
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* createplan */}
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
                  Create Plan
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
                  placeholder="Target Amount"
                />
                <input
                  type="text"
                  className="form-control"
                  placeholder="Description"
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

        {/* addmoney */}

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
                  Fund Plan
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

        {/* edit */}
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
                  Edit Plan
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
                  placeholder="Target Amount"
                />
                <input
                  type="text"
                  className="form-control"
                  placeholder="Description"
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

        {/* withdaraw */}
        <div
          class="modal fade"
          id="staticBackdrop3"
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
                  type="text"
                  className="form-control" disabled
                  placeholder="Current Amount"
                />
                <input
                  type="text"
                  className="form-control"
                  placeholder="Withdrawal Amount"
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
      </body>
    </>
  );
};

export default Savemoney;
