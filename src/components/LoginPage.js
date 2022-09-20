import React from 'react'
import { Link, Routes,Route,} from "react-router-dom";
import HomePage from './HomePage';
function LoginPage() {
  return (
    <div>
           
        <h1>LoginPage</h1>
        
        <Link to="/home"><button className='btn btn-success'>go home</button></Link>
        
     
        </div>
  )
}

export default LoginPage;