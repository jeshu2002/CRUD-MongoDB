// src/App.js
import React from 'react';
import Navbar from './components/navbar';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/home';
import About from './pages/about';
import Services from './pages/Services';
import LoginPage from './pages/login';
import Contact from './pages/contact';
import AddUser from './pages/addUser';

function App() {
  return (
    <div className="bg-gray-200 min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage/ >} />
        <Route path="/home" element={<HomePage/ >} />
        <Route path="/about" element={<About/ >} />
        <Route path="/Services" element={<Services/ >} />
        <Route path="/login" element={<LoginPage/ >} />
        <Route path="/addUser" element={<AddUser/ >} />
        <Route path="/contact" element={<Contact/ >} />
      </Routes>
    </div>
  );
}

export default App;
