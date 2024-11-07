// import PropTypes from 'prop-types';

// import './Sidebar.css';

// function Sidebar({ isOpen, toggleSidebar }) {
//   return (
//     <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
//       <button onClick={toggleSidebar}>Toggle Sidebar</button>
//       <div className="logo">ICHGRAM</div>
//       <ul className="menu">
//         <li onClick={toggleSidebar}>Home</li>
//         <li onClick={toggleSidebar}>Search</li>
//         <li onClick={toggleSidebar}>Explore</li>
//         <li onClick={toggleSidebar}>Messages</li>
//         <li onClick={toggleSidebar}>Notifications</li>
//         <li onClick={toggleSidebar}>Create</li>
//         <li onClick={toggleSidebar}>Profile</li>
//       </ul>
//     </div>
//   );
// }

// Sidebar.propTypes = {
//     isOpen: PropTypes.bool.isRequired,
//     toggleSidebar: PropTypes.func.isRequired,
//   };
// export default Sidebar;


// components/Sidebar.js
// import { useState } from 'react';
// import { Link } from 'react-router-dom';
// import './Sidebar.css';
// import ICHGRA from "./svg/ICHGRA _svg.svg"
// import Img_Home from "./svg/Img_Home.svg"
// import Img_Search from "./svg/Img_Search.svg"
// import Img_Explore from "./svg/Img_Explore.svg"
// import Img_Messenger from "./svg/Img_Messenger.svg"
// import Img_Notif from "./svg/Img_Notif.svg"
// import Img_Create from "./svg/Img_Create.svg"
// import ICH from "./svg/ICH.svg"
// import PropTypes from 'prop-types'; 



// function Sidebar({ onCreatePost }) {
//   const [activePanel, setActivePanel] = useState(null);


//   const handleOpenPanel = (panelName) => {
//     setActivePanel(panelName);
//     if (panelName === 'Create') {
//       const newPost = {
//         id: Date.now(), 
//         image: "./svg/Osen.png", 
       
//       };
//       onCreatePost(newPost);
//     }
//   };
  

//   const handleClosePanel = () => {
//     setActivePanel(null);
//   };

//   return (
//     <div className="sidebar">
//       <img src={ICHGRA} alt="Logo" className="log_logo" />  
//       <ul className="menu">
//         {['Home', 'Search', 'Explore', 'Messages', 'Notifications', 'Create', 'Profile'].map((item) => (
//           <li key={item}>
//             <Link to={`/${item.toLowerCase()}`} onClick={() => handleOpenPanel(item)}>
//             <div className="menu-item-container">
//                 {item === 'Home' && (
//                   <img src={Img_Home} alt="Home Icon" className="icon-home" />
//                 )}
//                 {item === 'Search' && (
//                   <img src={Img_Search} alt="Search Icon" className="icon-home" />
//                 )}
//                 {item === 'Explore' && (
//                   <img src={Img_Explore} alt="Explore Icon" className="icon-home" />
//                 )}

//                  {item === 'Messages' && (
//                   <img src={Img_Messenger} alt="Messenger Icon" className="icon-home" />
//                 )}

//                 {item === 'Notifications' && (
//                   <img src={Img_Notif} alt="Notif Icon" className="icon-home" />
//                 )}
//                  {item === 'Create' && (
//                   <img src={Img_Create} alt="Create Icon" className="icon-home" />
                  
//                 )}
//                  {item === 'Profile' && (
//                   <img src={ICH} alt="ICH Icon" className="icon-home" />
//                 )}
//                 <span className={`icon icon-${item.toLowerCase()}`}>{item}</span>
//               </div>
//             </Link>
//           </li>
//         ))}
//       </ul>

//       {/* Overlay panel */}
//       {activePanel && (
//         <div className="overlay" onClick={handleClosePanel}>
//           <div className="panel" onClick={(e) => e.stopPropagation()}>
//             <h2>{activePanel}</h2>
//             <button onClick={handleClosePanel}>Close</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }



// Sidebar.propTypes = {
//   onCreatePost: PropTypes.func.isRequired, 
// };
// export default Sidebar;




// components/Sidebar.js
// import { useState } from 'react';
// import { Link } from 'react-router-dom';
// import './Sidebar.css';
// import ICHGRA from "./svg/ICHGRA _svg.svg"
// import Img_Home from "./svg/Img_Home.svg"
// import Img_Search from "./svg/Img_Search.svg"
// import Img_Explore from "./svg/Img_Explore.svg"
// import Img_Messenger from "./svg/Img_Messenger.svg"
// import Img_Notif from "./svg/Img_Notif.svg"
// import Img_Create from "./svg/Img_Create.svg"
// import ICH from "./svg/ICH.svg"
// import PropTypes from 'prop-types'; 


// function Sidebar({ onCreatePost }) {
//   const [activePanel, setActivePanel] = useState(null);

//   const handleOpenPanel = (panelName) => {
//     setActivePanel(panelName);
//     if (panelName === 'Create') {
//       onCreatePost(); // Вызов функции для создания поста
//     }
//     else if (panelName !== 'Home') { // Убираем окно для "Home"
//       setActivePanel(panelName);
//     }
//   };

//   const handleClosePanel = () => {
//     setActivePanel(null);
//   };

//   return (
//     <div className="sidebar">
//       <img src={ICHGRA} alt="Logo" className="log_logo" />
//       <ul className="menu">
//         {['Home', 'Search', 'Explore', 'Messages', 'Notifications', 'Create', 'Profile'].map((item) => (
//           <li 
//           key={item}
          
//           >
//             <Link to={`/${item.toLowerCase()}`} onClick={() => handleOpenPanel(item)}>
//               <div className="menu-item-container">
//                 {/* Отображение иконок */}
//                 {item === 'Home' && <img src={Img_Home} alt="Home Icon" className="icon-home" />}
//                 {item === 'Search' && <img src={Img_Search} alt="Search Icon" className="icon-home" />}
//                 {item === 'Explore' && <img src={Img_Explore} alt="Explore Icon" className="icon-home" />}
//                 {item === 'Messages' && <img src={Img_Messenger} alt="Messenger Icon" className="icon-home" />}
//                 {item === 'Notifications' && <img src={Img_Notif} alt="Notif Icon" className="icon-home" />}
//                 {item === 'Create' &&
//                 ( <img src={Img_Create}
//                    alt="Create Icon" 
//                    className="icon-home"
//                    onClick={() => {
//                     handleOpenPanel('Create');
//                     onCreatePost();
//                   }}
//                    />)}

//                 {item === 'Profile' && <img src={ICH} alt="ICH Icon" className="icon-home" />}
//                 <span className={`icon icon-${item.toLowerCase()}`}>{item}</span>
//               </div>
//             </Link>
//           </li>
//         ))}
//       </ul>


//       Overlay panel
//       {activePanel && (
        
//         <div className="overlay" onClick={handleClosePanel}>
//           <div className="panel" onClick={(e) => e.stopPropagation()}>
            
//             <h2>{activePanel}</h2>
//             <button  onClick={handleClosePanel}>Close</button>
//           </div>
//         </div>
//       )}

//     </div>
//   );
// }

// Sidebar.propTypes = {
//   onCreatePost: PropTypes.func.isRequired, 
// };

// export default Sidebar;

// import { useState } from 'react';
// import { Link } from 'react-router-dom';
// import './Sidebar.css';
// import ICHGRA from "./svg/ICHGRA _svg.svg";
// import Img_Home from "./svg/Img_Home.svg";
// import Img_Search from "./svg/Img_Search.svg";
// import Img_Explore from "./svg/Img_Explore.svg";
// import Img_Messenger from "./svg/Img_Messenger.svg";
// import Img_Notif from "./svg/Img_Notif.svg";
// import Img_Create from "./svg/Img_Create.svg";
// import ICH from "./svg/ICH.svg";

// import PropTypes from 'prop-types';


// function Sidebar({ onCreatePost }) {
//   const [activePanel, setActivePanel] = useState(null);
//   const [showModal, setShowModal] = useState(false);

//   const handleOpenPanel = (panelName) => {
//     setActivePanel(panelName);
//     if (panelName === 'Create') {
//       setShowModal(true); // Show the modal for "Create"
//       onCreatePost();
//     }
//   };

//   const handleCloseModal = () => {
//     setShowModal(false);
//     setActivePanel(null);
//   };

//   return (
//     <div className="sidebar">
//       <img src={ICHGRA} alt="Logo" className="log_logo" />
//       <ul className="menu">
//         {['Home', 'Search', 'Explore', 'Messages', 'Notifications', 'Create', 'Profile'].map((item) => (
//           <li key={item}>
//             <Link to={`/${item.toLowerCase()}`} onClick={() => handleOpenPanel(item)}>
//               <div className={`menu-item-container ${activePanel === item ? 'active' : ''}`}>
//                 {/* Display icons */}
//                 {item === 'Home' && <img src={Img_Home} alt="Home Icon" className="icon-home" />}
//                 {item === 'Search' && <img src={Img_Search} alt="Search Icon" className="icon-home" />}
//                 {item === 'Explore' && <img src={Img_Explore} alt="Explore Icon" className="icon-home" />}
//                 {item === 'Messages' && <img src={Img_Messenger} alt="Messenger Icon" className="icon-home" />}
//                 {item === 'Notifications' && <img src={Img_Notif} alt="Notif Icon" className="icon-home" />}
//                 {item === 'Create' && (
//                   <img
//                     src={Img_Create}
//                     alt="Create Icon"
//                     className="icon-home"
//                     onClick={(e) => {
//                       e.preventDefault(); // Prevent navigation
//                       handleOpenPanel('Create');
//                     }}
//                   />
//                 )}
//                 {item === 'Profile' && <img src={ICH} alt="ICH Icon" className="icon-home" />}
//                 <span className={`icon icon-${item.toLowerCase()}`}>{item}</span>
//               </div>
//             </Link>
//           </li>
//         ))}
//       </ul>
      
//       {/* Modal for Creating a Post */}
//       {showModal && (
//         <div className="overlay" onClick={handleCloseModal}>
//           <div className="modal" onClick={(e) => e.stopPropagation()}>
//             <h2>Создание публикации</h2>
//             <div className="upload-area">
//               <img src="./svg/add_posts.svg" alt="add_posts" className="upload-icon" />
//               <p>Перетащите сюда фото и видео</p>
//               <button className="upload-button">Выбрать на компьютере</button>
//             </div>
//             <button className="close-button" onClick={handleCloseModal}>Закрыть</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// Sidebar.propTypes = {
//   onCreatePost: PropTypes.func.isRequired,
// };

// export default Sidebar;



import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import ICHGRA from "./svg/ICHGRA _svg.svg"
import Img_Home from "./svg/Img_Home.svg";
import Img_Search from "./svg/Img_Search.svg";
import Img_Explore from "./svg/Img_Explore.svg";
import Img_Messenger from "./svg/Img_Messenger.svg";
import Img_Notif from "./svg/Img_Notif.svg";
import Img_Create from "./svg/Img_Create.svg";
import ICH from "./svg/ICH.svg";
import PropTypes from 'prop-types';

function Sidebar({ onCreatePost }) {
  const [activePanel, setActivePanel] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleOpenPanel = (panelName) => {
    setActivePanel(panelName);
    if (panelName === 'Create') {
      setShowModal(true); // Show the modal for "Create"
      onCreatePost();
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setActivePanel(null);
  };

  return (
    <div className="sidebar">
      <img src={ICHGRA} alt="Logo" className="log_logo" />
      <ul className="menu">
        {['Home', 'Search', 'Explore', 'Messages', 'Notifications', 'Create', 'Profile'].map((item) => (
          <li key={item}>
            <Link to={item !== 'Create' ? `/${item.toLowerCase()}` : null} onClick={() => handleOpenPanel(item)}>
              <div className={`menu-item-container ${activePanel === item ? 'active' : ''}`}>
                {item === 'Home' && <img src={Img_Home} alt="Home Icon" className="icon-home" />}
                {item === 'Search' && <img src={Img_Search} alt="Search Icon" className="icon-home" />}
                {item === 'Explore' && <img src={Img_Explore} alt="Explore Icon" className="icon-home" />}
                {item === 'Messages' && <img src={Img_Messenger} alt="Messenger Icon" className="icon-home" />}
                {item === 'Notifications' && <img src={Img_Notif} alt="Notif Icon" className="icon-home" />}
                {item === 'Create' && <img src={Img_Create} alt="Create Icon" className="icon-home" />}
                {item === 'Profile' && <img src={ICH} alt="ICH Icon" className="icon-home" />}
                <span className={`icon icon-${item.toLowerCase()}`}>{item}</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>

      {/* Modal for Creating a Post */}
      {showModal && (
        <div className="overlay" onClick={handleCloseModal}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h2>Создание публикации</h2>
            <div className="upload-area">
              <img src="./svg/add_posts.svg" alt="add_posts" className="upload-icon" />
              <p>Перетащите сюда фото и видео</p>
              <button className="upload-button">Выбрать на компьютере</button>
            </div>
            <button className="close-button" onClick={handleCloseModal}>Закрыть</button>
          </div>
        </div>
      )}
    </div>
  );
}

Sidebar.propTypes = {
  onCreatePost: PropTypes.func.isRequired,
};

export default Sidebar;
