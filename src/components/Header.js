// src/components/Header.js
import React, { useState } from 'react';
import '../styles/App.css'; // Correct path
import LoginForm from '../pages/LoginForm'; // Correct path
import Logo from './Logo'; // Correct path

function Header() {
  const [showLoginForm, setShowLoginForm] = useState(false);

  const toggleLoginForm = () => {
    setShowLoginForm(!showLoginForm);
  };

  const closeLoginForm = () => {
    setShowLoginForm(false);
  };

  return (
    <header className="App-header">
      <Logo />
      <h1>Government Services Directory Portal</h1>
      <div className="header-links">
        <a href="/about">About Us</a>
        <a href="/services">Services</a>
        <a href="/dashboard">Dashboard</a>
        <a href="/virtual-assistant">Virtual Assistant</a>
      </div>
      <button className="login-button" onClick={toggleLoginForm}>
        Login/Register
      </button>
      {showLoginForm && <LoginForm onClose={closeLoginForm} />}
    </header>
  );
}

export default Header;

