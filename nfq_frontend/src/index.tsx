import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from './Pages/HomePage';
import NavBar from './Components/NavBar/Navbar'
import LoginPage from './Pages/LoginPage';
import InfoPage from './Pages/InfoPage';
import SpecialistPage from './Pages/SpecialistPage';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  
  <BrowserRouter>
  <NavBar/>
  <React.StrictMode>
  <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/info" element={<SpecialistPage />} />
       
      </Routes>
  </React.StrictMode>
  </BrowserRouter>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
