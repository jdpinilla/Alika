import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Axios from 'axios';
import '../styles/Register.css';
const Register = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm_password, setConfirmPassword] = useState('');
  const [, navigate] = useLocation();

  const handleRegister = () => {
    Axios({
      method: 'POST',
      data: {
        fullName,
        email,
        password,
        confirm_password,
      },
      withCredentials: true,
      url: 'http://localhost:3000/user/signup',
    }).then((res) => navigate('/'));
  };
  return (
    <div className="Register">
      <div className="Register_form">
        <h2>REGISTRATE</h2>
        <input
          placeholder="Full Name"
          type="text"
          name="fullName"
          onChange={(e) => setFullName(e.target.value)}
        />
        <input
          placeholder="Email"
          type="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="password"
          type="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          placeholder="Confirm Password"
          type="password"
          name="confirm_password"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button onClick={handleRegister}> SUBMIT</button>
        <p>
          ¿No tienes una cuenta? <Link>Crea una aqui!</Link>{' '}
        </p>
      </div>
    </div>
  );
};

export default Register;
