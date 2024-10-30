import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import ResetPassword from './components/ResetPassword';
import SignUp from './components/SignUp';
import { Home } from "./atoms/Home";


import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/atoms" element={<Home />} />
        <Route path="/home" element={<h2>Добро пожаловать в ICHGRAM!</h2>} />
      </Routes>
    </Router>
  );
}

export default App;