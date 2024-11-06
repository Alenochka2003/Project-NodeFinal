//components/Layout.js
import { Outlet } from 'react-router-dom';
import Sidebar from '../SideBar/SideBar'

function Layout() {
  return (
    <div className="app-layout">
      <Sidebar /> 
      <div className="content">
        <Outlet /> 
      </div>
    </div>
  );
}

export default Layout;
