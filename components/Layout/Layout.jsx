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

// import { Outlet } from 'react-router-dom';
// import Sidebar from '../SideBar/SideBar';
// import { useState } from 'react';

// function Layout() {
//   const [currentTab, setCurrentTab] = useState('Home'); // Добавляем состояние текущей вкладки

//   const handleNavigate = (tab) => {
//     setCurrentTab(tab); // Обновляем текущую вкладку при навигации
//   };

//   return (
//     <div className="app-layout">
//       {/* Передаем функцию handleNavigate в Sidebar */}
//       <Sidebar onNavigate={handleNavigate} />
      
//       <div className="content">
//         {/* Условно рендерим компонент в зависимости от currentTab */}
//         {currentTab === 'Messages' ? <Outlet /> : <div>Здесь другой контент</div>}
//       </div>
//     </div>
//   );
// }

// export default Layout;

