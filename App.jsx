
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import ResetPassword from './components/ResetPassword';
import SignUp from './components/SignUp';
import { Home } from "./atoms/Home";
// import Sidebar from "./components/SideBar/SideBar";
// import PostGrid from "./components/SideBar/PostGrid";
import './App.css'

function App() {
 

  return (
    <Router>

        
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        {/* <Route path="/home" element={<Sidebar />} /> */}
        {/* <Route path="/home" element={<PostGrid />} /> */}
        
      </Routes>
    </Router>
  );
}

export default App;