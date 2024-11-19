



import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import LoginForm from './components/LoginForm';
import ResetPassword from './components/ResetPassword';
import SignUp from './components/SignUp';
import { Home } from "./atoms/Home";
import Explore from './Pages/Explore/Explore';
import Layout from './components/Layout/Layout';
import Sidebar from './components/SideBar/SideBar';
import Messeger from './Pages/Messeger/Messeger';
import Search from './components/SideBar/Search/Search';
import NotificationContent from '../../backend/be-social/src/models/notificationModel';
// import UserId from './Pages/Profile/UserId';
import ProfilePage from './Pages/ProfileADD/ProfilePage';

// import PostGrid from "./components/SideBar/PostGrid";
import './App.css';
;

function App() {
  const [isSearchOpen, setIsSearchOpen] = useState(false); // State to toggle the search view

  const handleSearchToggle = () => {
    setIsSearchOpen(!isSearchOpen); // Toggle the search menu state
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/signup" element={<SignUp />} />
        
        <Route element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/home" element={<Sidebar onSearchToggle={handleSearchToggle} />} />
          <Route path="/messages" element={<Messeger />} />
          <Route path="/search" element={<Search />} />
          <Route path='notifications' element={<NotificationContent />} />
          {/* <Route path='profile' element={<UserId />} /> */}
          <Route path='profile' element={<ProfilePage />} />
          {/* <Route path="/home" element={<PostGrid />} /> */}
        </Route>
      </Routes>

      {/* Conditionally render the Search component */}
      {isSearchOpen && <Search />}
    </Router>
  );
}

export default App;




