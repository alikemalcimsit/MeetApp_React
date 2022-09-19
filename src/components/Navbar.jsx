import React from 'react'
import logo from  '../assets/ali_logo.png'
import { MdAccountCircle,MdQuestionAnswer,MdHomeFilled } from "react-icons/md";
function Navbar() {
  return (
    <div><nav className="navbar" >
    <a className="navbar-brand">
      <img src={logo} width="30" height="30" className="d-inline-block align-top" alt=""/>
    MEERKAT
    </a>
    <ul className="nav">
    <li className="nav-item">
    <a className="nav-link" href="#"><MdHomeFilled  size={30}/></a>
  </li>
  <li className="nav-item">
  <a className="nav-link" href="#"><MdQuestionAnswer size={30}/></a>
  </li>
  <li className="nav-item">
  <a className="nav-link" href=""><MdAccountCircle size={30}/></a>
  </li>
  <li className="nav-item">
  
  <a className="nav-link" href="#"><button type="button" class="btn btn-danger" >Log Out</button></a>
  </li>

</ul>
  </nav>
  </div>
  )
}

export default Navbar