import React, { useContext, useState } from 'react';
import '../styles/Login.css';
import useUser from '../../hooks/useUser';

const validationForm = (form) => {
  let errors = {};
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  let regexPassword = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;
  if (!form.email.trim()) {
    errors.email = "El campo 'Email' es requerido";
  } else if (!regexEmail.test(form.email.trim())) {
    errors.email = "El formato de 'Email' no es valido.";
  }
  if (!form.password.trim()) {
    errors.password = "El campo 'Password' es requerido";
  } else if (!regexPassword.test(form.password.trim())) {
    errores.password =
      'El campo de Password debe tener entre 8-16 caracteres con almenos una minuscula y una mayuscula.';
  }
  return errors;
};

const Login = () => {
  const { login } = useUser();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    login({ email, password });
  };

  return (
    <div className="Login">
      <div className="Login_form">
        <h2>LOGIN</h2>

        <input
          type="email"
          name="email"
          placeholder="Escribe tu email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Escribe tu contraseña"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" onClick={handleLogin}>
          Enviar{' '}
        </button>
      </div>
    </div>
  );
};

export default Login;
