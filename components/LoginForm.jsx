// import { useState } from 'react';
// import ICHGRA from '../assets/ICHGRA 2.png';
// import Backround from '../assets/Background.png'; 
// import { Link } from "react-router-dom";
// import HorisontalDivider from "../assets/Horizontal_Divider.svg"
// import './LoginForm.css';

// function LoginForm() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!email || !password) {
//       setError('Введите корректный email и пароль');
//     } else {
//       setError('');
//       console.log('Логин успешен');
//     }
//   };

//   return (
//     <div className="login-container">
//       <img src={Backround} alt="Background" className="login-background" />
//       <div className="login-header">
//         <img src={ICHGRA} alt="Logo" className="login-logo" />
//       </div>
//       <form onSubmit={handleSubmit} className="login-form">
//         <input
//           type="text"
//           placeholder="Username, or email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         {error && <p className="error-message">{error}</p>}
//         <button type="submit" className="login-button">Log in</button>
//         <div className="or_simple">_______OR_______</div>
//         <a href="#" className="forgot-password">Forgot password?</a>
//       </form>
//       <div className="signup-link">
//         <p>Dont have an account? <a href="#">Sign up</a></p>
//       </div>
//     </div>
//   );
// }

// export default LoginForm;


import { useState } from 'react';
import ICHGRA from '../assets/ICHGRA 2.png';
import Background from '../assets/Background.png'; 
import { Link } from "react-router-dom"; 
import HorizontalDivider from "../assets/Horizontal_Divider.svg"; 
import './LoginForm.css'; 

const LoginForm = () => {  
  const [username, setUsername] = useState('');  
  const [password, setPassword] = useState('');  
  const [error, setError] = useState('');  
  
  const handleSubmit = (e) => {      
    e.preventDefault();      
    if (username === '' || password === '') {          
      setError('Введите логин и пароль');      
    } else if (username === 'existingUser') {          
      setError('Пользователь уже существует');      
    } else if (password !== 'correctPassword') {          
      setError('Неверный пароль');      
    } else {          
      setError('');          
      alert('Успешный вход!');      
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


// const LoginForm = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleSubmit = (e) => {
//       e.preventDefault();
//       if (username === '' || password === '') {
//           setError('Введите логин и пароль');
//       } else if (username === 'existingUser') {
//           setError('Пользователь уже существует');
//       } else if (password !== 'correctPassword') {
//           setError('Неверный пароль');
//       } else {
//           setError('');
//           alert('Успешный вход!');
//       }
//   };

//   return (
//       <div className="login-container">
//           <div className="login-image">
//               <img src={Backround} alt="Background" className="Left side" />
//           </div>
//           <div className="login-form-container">
//               <form onSubmit={handleSubmit} className="login-form">
//               <img src={ICHGRA} alt="Logo" className="login-logo" />
//                   <input
//                       type="text"
//                       placeholder="Username, or email"
//                       value={username}
//                       onChange={(e) => setUsername(e.target.value)}
//                       className="login-input"
//                   />
//                   <input
//                       type="password"
//                       placeholder="Password"
//                       value={password}
//                       onChange={(e) => setPassword(e.target.value)}
//                       className="login-input"
//                   />
//                   <button type="submit" className="login-button">Log in</button>
//                   {error && <p className="error-message">{error}</p>}
//                   <div className="login-or">
//                   <span className="or-text"> <img src="Horizontal_Divider.svg" alt="" /> OR<img src="C:\Users\ICH\OneDrive\Рабочий стол\Node-project\frontend\src\assets\Horizontal Divider.svg" alt="" /></span>
//                     </div>

//                   <Link to="/reset-password" className="forgot-password">Forgot password?</Link>
//                   </form>
//                   <div className="signup-box">
//                       <p>Don,t have an account? <Link to="/SignUp" className="signup-link">Sign up</Link> </p>
//                   </div>
//                   </div>

                
             
//           </div>
  
//   );
// };

// export default LoginForm;