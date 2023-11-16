import React from 'react'
import {Link} from "react-router-dom";

const NavBar = () => {
  return ( 
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-5">
  <div className="container-fluid">
    <Link className="navbar-brand" to={"/"}> EmployeeManagement &#128213;</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to={"/view-employees"}>View All Employee&#9207;</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={"/add-employees"}>Add new Employees&#128397;</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default NavBar
