import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import Navbar from './components/Navbar';
import { GlobalProvider } from './context/GlobalState';
import BasePage from './components/BasePage';
import PageRoute from './PageRoute';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
      <GlobalProvider>
    <BrowserRouter>
 <PageRoute/>
    </BrowserRouter>
    </GlobalProvider>
  </React.StrictMode>
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
