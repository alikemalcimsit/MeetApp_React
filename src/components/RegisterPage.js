import React from 'react'
import { Link, Routes,Route,} from "react-router-dom";
function RegisterPage() {
  return (
    <div>
       <h1>RegisterPage</h1>
       <Link to="/login"><button className='btn btn-success'>Log In</button></Link>
       </div>
  )
}

export default RegisterPage;