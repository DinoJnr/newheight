import React from "react";
import Header from "./Header";
import "./Loan.css";

const Loan = () => {
  return (
    <>
      <Header></Header>

      <body>
        <div className="loan-body">
          <div className="loan-form-con">
            <h1>Loan</h1>
            <label>Amount:</label>
            <input className="form-control" type="text" placeholder="Amount" />
            <label>Loan Duration</label>
            <select className="form-select" aria-label="Default select example">
              <option selected>Loan Duration</option>
              <option value="1">12 months</option>
              <option value="2">18 months</option>
              <option value="3">24 months</option>
            </select>
            <label>Loan Description</label>
            <input
              className="form-control"
              type=""
              placeholder="Why do you need this loan"
            />
            <br />
            <br />
            <button className="btn btn-success">Confirm</button>
          </div>
        </div>
      </body>
    </>
  );
};

export default Loan;
