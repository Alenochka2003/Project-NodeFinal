

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ICHGRA from '../assets/ICHGRA 2.png';
import Background from '../assets/Background.png'; 
import { Link } from "react-router-dom"; 
import HorizontalDivider from "../assets/Horizontal_Divider.svg"; 
import './LoginForm.css'; 
import { $api } from '../api/api';

const LoginForm = () => {  
  const [username, setUsername] = useState('');  
  const [password, setPassword] = useState('');  
  const [error, setError] = useState('');  
  const navigate = useNavigate();


    const handleSubmit = async (e) => {
      e.preventDefault();
    
      try {
        const response = await $api.post("/auth/login", {email: username,password });
        if (response.status === 200) {
          localStorage.setItem("token",response.data.token )
          setError('');
          navigate('/home');  // Перенаправление на главную страницу
        } else {
          setError(response.data.message || 'Ошибка авторизации');
        }
      } catch (error) {
        if (error.response) {
          // Сервер ответил, но с ошибкой
          setError(error.response.data.message || 'Ошибка авторизации');
        } else {
          // Ошибка сети
          setError('Ошибка сети');
        }
      }
    };
    
    

  return (      
    <div className="login-container">          
      <div className="login-image">              
        <img src={Background} alt="Background" className="Left side" />          
      </div>          
      <div className="login-form-container">              
        <form onSubmit={handleSubmit} className="login-form">              
          <img src={ICHGRA} alt="Logo" className="login-logo" />                  
          <input                      
            type="text"                      
            placeholder="Username, or email"                      
            value={username}                      
            onChange={(e) => setUsername(e.target.value)}                      
            className="login-input"                  
          />                  
          <input                      
            type="password"                      
            placeholder="Password"                      
            value={password}                      
            onChange={(e) => setPassword(e.target.value)}                      
            className="login-input"                  
          />                  
          <button type="submit" className="login-button">Log in</button>                  
          {error && <p className="error-message">{error}</p>}                  
          <div className="login-or">                  
            <span className="or-text"> 
              <img src={HorizontalDivider} alt="Divider" />  OR  <img src={HorizontalDivider} alt="Divider" /> 
            </span>                    
          </div>                  
          <Link to="/reset-password" className="forgot-password">Forgot password?</Link>                  
        </form>                  
        <div className="signup-box">                      
          <p>Don,t have an account? <Link to="/SignUp" className="signup-link">Sign up</Link> </p>                  
        </div>                  
      </div>                                       
    </div>    
  );
};

export default LoginForm;


