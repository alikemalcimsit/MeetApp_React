import React from 'react'
import { Routes,Route } from 'react-router-dom'
import AccountPage from './components/AccountPage';
import BasePage from './components/BasePage';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import MessagesPage from './components/MessagesPage';
import RegisterPage from './components/RegisterPage';

function PageRoute() {
  return (
    <div>

<Routes>
     
     <Route  path="/home" element={<HomePage/>} />
     <Route  path="/login" element={<LoginPage />} />
     <Route path="/register" element={<RegisterPage />} />
     <Route path="/account" element={<AccountPage />} />
     <Route path="/messages" element={<MessagesPage />} />
     <Route exact path="/" element={<BasePage/>} />

   </Routes>


    </div>
  )
}

export default PageRoute;