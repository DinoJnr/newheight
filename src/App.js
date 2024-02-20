import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Header from "./Component/Screen/Header";
import Footer from "./Component/Screen/Footer";
import Home from "./Component/Screen/Home";
import Signup from "./Component/Screen/Signup";
import Signin from "./Component/Screen/Signin";
import Contact from "./Component/Screen/Contact";
import Dashboard from "./Component/Screen/Dashboard";
import Savemoney from "./Component/Screen/Savemoney";
import Transaction from "./Component/Screen/Transaction";
import AdminLogin from "./Component/Admin/AdminLogin";
import AdminDashBoard from "./Component/Admin/AdminDashBoard";
import Customerdetails from "./Component/Admin/Customerdetails";
import AdminTransaction from "./Component/Admin/AdminTransaction";
import Loan from "./Component/Screen/Loan";

function App() {
  return (
    <>

    
      <BrowserRouter>
        {/* <Header></Header> */}
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/signup" element={<Signup></Signup>}></Route>
          <Route path="/signin" element={<Signin></Signin>}></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
          <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
          <Route path="/save" element={<Savemoney></Savemoney>}></Route>
          <Route
            path="/transactionhistory"
            element={<Transaction></Transaction>}
          ></Route>
          <Route path="/adminlogin" element={<AdminLogin></AdminLogin>}></Route>
          <Route path="/admindashboard" element={<AdminDashBoard></AdminDashBoard>}></Route>
        <Route path="/customerdetails" element={<Customerdetails></Customerdetails>}>

        </Route>
        <Route path="/requestloan" element={<Loan></Loan>}></Route>
        <Route path="/admintransactionhistory"  element={<AdminTransaction></AdminTransaction>}></Route>
        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
