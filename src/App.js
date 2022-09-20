
import './App.css';
import HomePage from './components/HomePage';
import BasePage from './components/BasePage';
import Navbar from './components/Navbar';
import { GlobalProvider } from './context/GlobalState';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import { Route, Routes } from 'react-router-dom';
import MessagesPage from './components/MessagesPage';
import AccountPage from './components/AccountPage';


function App() {
  return (

    <div className="App">

      <Routes>
     
        <Route  path="/home" element={<HomePage/>} />
        <Route  path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/messages" element={<MessagesPage />} />
        <Route  path="/" element={<BasePage/>} />

      </Routes>
    </div>
  );
}

export default App;
