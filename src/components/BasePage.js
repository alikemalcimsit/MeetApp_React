import React from 'react'
import './BasePage.css';
import { Link, Routes,Route,} from "react-router-dom";
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
function BasePage() {
  return (
    <div className='body'>

            <div className="col-md-12"><p>Hesabın Zaten Var Mı ? Hemen Giriş Yap</p>
        <Link to="/login"><button className="btn">Giriş Yap</button></Link>  
            
            </div>
            <div className="col-md-12"><p>Hesabın Yoksa Endişelenme Hemen Kayıt Ol</p>
          <Link to="/register"> <button className="btn"  >Kayıt Ol</button></Link></div>
        </div>
  
  )
}

export default BasePage;