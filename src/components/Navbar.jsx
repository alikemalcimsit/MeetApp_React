import React from 'react'
import logo from  '../assets/ali_logo.png'
import { MdAccountCircle,MdQuestionAnswer,MdHomeFilled } from "react-icons/md";
import { Link, Routes,Route,} from "react-router-dom";
import AccountPage from './AccountPage';
import MessagesPage from './MessagesPage';
import HomePage from './HomePage';
function Navbar() {
  return (
    <div><nav className="navbar" >
    <a className="navbar-brand">
      <img src={logo} width="30" height="30" className="d-inline-block align-top" alt=""/>
    MEERKAT
    </a>
    <ul className="nav">
    <li className="nav-item">
   <Link to="/"><a className="nav-link" href="#"><MdHomeFilled  size={30}/></a></Link> 
  </li>
  <li className="nav-item">
  <Link to="/messages"><a className="nav-link" href="#"><MdQuestionAnswer size={30}/></a></Link>
  </li>
  <li className="nav-item">
  <Link to="/account"><a className="nav-link" href=""><MdAccountCircle size={30}/></a></Link>
  </li>
  <li className="nav-item">
  
  <Link><a className="nav-link" href="#"><button type="button" class="btn btn-danger" >Log Out</button></a></Link>
  </li>

</ul>
  </nav>
  <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/account" element={<AccountPage/>} />
      <Route path="/messages" element={<MessagesPage/>} />
    </Routes>
  </div>
  )
}

export default Navbar