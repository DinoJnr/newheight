import React from "react";
import AdminHeader from "./AdminHeader";
import "./Customerdetails.css";

const Customerdetails = () => {
  return (
    <>
      <AdminHeader></AdminHeader>

      <table className="table">
        <thead className="users-tdhead">
          <tr>
            <td>S/N</td>
            <td>Full Name</td>
            <td>Email</td>
            <td>Phone No</td>
            <td>Customer's Id</td>
            <td>Date Registered</td>
            <td>Edit</td>
            <td>Delete</td>
          </tr>
        </thead>

        <tbody className="users-tbody">
       
            <tr>
                <td>1</td>
                <td>Adejare Kolade</td>
                <td>philioe@gmafklgk.com</td>
                <td>095950404</td>
                <td>3940505</td>
                <td>fhjfjf</td>
                <td>da</td>
                <td>eee</td>
            </tr>
     
        </tbody>
      </table>
    </>
  );
};

export default Customerdetails;
