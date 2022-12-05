import React, { Component } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import EmployeeList from './components/EmployeeList.component';
import AddEmployee from './components/AddEmployee.component';
import Employee from './components/Employee.component'

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link to={"/employees"} className="navbar-brand">Employees</Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/employees"} className="nav-link">
                Employees
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/add"} className="nav-link">
                Add Employee
              </Link>
            </li>
          </div>
        </nav>

        <div className="container mt-3">
          <Routes>
            <Route path="/" element={<EmployeeList/>} />
            <Route path="/employees" element={<EmployeeList/>} />
            <Route path="/employees/:id" element={<Employee/>} />
            <Route path="/add" element={<AddEmployee/>} />
          </Routes>
        </div>

      </div>
    );
  }
  
}

export default App;
