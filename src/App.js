import {BrowserRouter as Router,Routes,Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.min.js"
import './App.css';
import Home from './Home';
import NavBar from "./component/common/NavBar.js";
import EmployeesView from './component/employee/EmployeesView';
import AddEmployee from "./component/employee/AddEmployee.js";
import EditEmployee from "./component/employee/EditEmployee.js";
import EmployeePofile from "./component/employee/EmployeeProfile.js";

function App() {
  return (
    <main className="container mt-7">
     
      
      <Router>
        <NavBar/>
        <Routes>
          <Route exact path="/" element={<Home/>}></Route>
          <Route exact
           path="/view-employees"
            element={<EmployeesView/>}></Route>
            <Route exact
           path="/add-employees"
            element={<AddEmployee/>}></Route>
            <Route exact
           path="/edit-employee/:id"
            element={<EditEmployee/>}></Route>
             <Route exact
           path="/employee-profile/:id"
            element={<EmployeePofile/>}></Route>
        </Routes>
      </Router>
      
    </main>
  );
}

export default App;
