import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import '../assets/Login.css';

const Login = () => {
  const { login, token, isAuthenticated } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const focusinp = (inputId) => {
    if (inputId === 'usr') {
      setUsername('');
      document.getElementById('username').focus();
    } else if (inputId === 'pass') {
      setPassword(''); 
      document.getElementById('password').focus();
    } else {
      setUsername(''); 
      document.getElementById('username').focus();
    }
  };

  useEffect(() => {
    const inputs = document.querySelectorAll('.inp input');

    inputs.forEach(input => {
      input.addEventListener('input', function () {
        const label = this.nextElementSibling;
        label.classList.toggle('up', this.value.trim() !== '');
      });
    });
  }, []); 

  useEffect(() => {
    if (isAuthenticated && token) {
      navigate('/landing');
    }
  }, [navigate, token, isAuthenticated]);

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/login', { username, password });
      const { token } = response.data;
      login(token, username);
    } catch (error) {
      console.error(error);
      // setError('Login failed. Please check your credentials.');
      setError(error.response.data.message);
    }
  };

  return (
    <div className="body">
      <div className="container">
        <h1>Sign In</h1>

        <div className="inp">
          <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
          <label onClick={() => focusinp('usr')} htmlFor="Username">Username</label>
        </div>

        <div className="inp">
          <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <label onClick={() => focusinp('pass')} htmlFor="Password">Password</label>
        </div>

        {error && <p style={{ color: 'red' }}>{error}</p>}
        

        <button className="login-btn" type="submit" onClick={handleLogin}>Login</button>

        <div style={{ display: 'flex' }}>
          <Link to="#">Lupa password? - Support</Link>
        </div>
        <Link to="#">Belum punya akun? Daftar</Link>
      </div>
      <div className="pic"></div>
    </div>
    
  );
};

export default Login;
