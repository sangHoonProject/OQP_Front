import React from 'react';
import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Main from './views/Main';
import Signup from './Sign/Signup';
import Signin from './Sign/Signin';
import Profil from './views/Profil';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/Profil" element={<Profil />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
