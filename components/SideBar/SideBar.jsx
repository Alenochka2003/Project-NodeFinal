


import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import ICHGRA from "./svg/ICHGRA _svg.svg";
import Img_Home from "./svg/Img_Home.svg";
import Img_Search from "./svg/Img_Search.svg";
import Img_Explore from "./svg/Img_Explore.svg";
import Img_Messenger from "./svg/Img_Messenger.svg";
import Img_Notif from "./svg/Img_Notif.svg";
import Img_Create from "./svg/Img_Create.svg";
import ICH from "./svg/ICH.svg";
import PropTypes from 'prop-types';

function Sidebar({ onCreatePost }) {
  const [activeTab, setActiveTab] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [postImage, setPostImage] = useState(null);  // Состояние для изображения
  const [postText, setPostText] = useState(''); // Состояние для текста поста
  const [comments, setComments] = useState([]); // Состояние для комментариев

  const handleClick = (tab) => {
    setActiveTab(tab);
    if (tab === 'Create') {
      setShowModal(true);
      onCreatePost();
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setActiveTab('Home'); // После закрытия модалки перенаправляем на Home
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setPostImage(URL.createObjectURL(file));  // Создаем URL для локального файла
    }
  };

  const handleTextChange = (event) => {
    setPostText(event.target.value);  // Обновляем текст поста
  };

  const handleCommentSubmit = (event) => {
    event.preventDefault(); // Предотвращаем перезагрузку страницы
    setComments([...comments, { text: postText, date: new Date() }]);
    setPostText('');
  };

  return (
    <div className="sidebar">
      <img src={ICHGRA} alt="Logo" className="log_logo" />
      <ul className="menu">
        {['Home', 'Search', 'Explore', 'Messages', 'Notifications', 'Create', 'Profile'].map((item) => (
          <li key={item}>
            <Link to={item !== 'Create' ? `/${item.toLowerCase()}` : null} onClick={() => handleClick(item)}>
              <div className={`menu-item-container ${activeTab === item ? 'active' : ''}`}>
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

      {/* Модальное окно для создания публикации */}
      {showModal && (
        <div className="overlay" onClick={handleCloseModal}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h2>Создание публикации</h2>
            <div className="upload-area">
              <img src={postImage || "./svg/uplouder.svg"} alt="add_posts" className="upload-icon" />
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="file-input"
              />
              <textarea
                value={postText}
                onChange={handleTextChange}
                placeholder="Напишите комментарий..."
                className="post-textarea"
              />
              <form onSubmit={handleCommentSubmit}>
                <button type="submit" className="upload-button">
                  Добавить комментарий
                </button>
              </form>
              <div className="comments-section">
                {comments.map((comment, index) => (
                  <div key={index} className="comment">
                    <p>{comment.text}</p>
                    <span>{comment.date.toLocaleString()}</span>
                  </div>
                ))}
              </div>
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

// import { useState } from "react";
// import { Link } from "react-router-dom";
// import "./Sidebar.css";
// import ICHGRA from "./svg/ICHGRA _svg.svg";
// import Img_Home from "./svg/Img_Home.svg";
// import Img_Search from "./svg/Img_Search.svg";
// import Img_Explore from "./svg/Img_Explore.svg";
// import Img_Messenger from "./svg/Img_Messenger.svg";
// import Img_Notif from "./svg/Img_Notif.svg";
// import Img_Create from "./svg/Img_Create.svg";
// import ICH from "./svg/ICH.svg";
// import PropTypes from "prop-types";

// function Sidebar({ onOpenModal }) {
//   const [activeTab, setActiveTab] = useState("");

//   const handleClick = (tab) => {
//     setActiveTab(tab);
//     if (tab === "Create") {
//       onOpenModal(); // Вызов функции открытия модального окна
//     }
//   };

//   return (
//     <div className="sidebar">
//       <img src={ICHGRA} alt="Logo" className="log_logo" />
//       <ul className="menu">
//         {["Home", "Search", "Explore", "Messages", "Notifications", "Create", "Profile"].map((item) => (
//           <li key={item}>
//             <Link
//               to={item !== "Create" ? `/${item.toLowerCase()}` : null}
//               onClick={() => handleClick(item)}
//             >
//               <div className={`menu-item-container ${activeTab === item ? "active" : ""}`}>
//                 {item === "Home" && <img src={Img_Home} alt="Home Icon" className="icon-home" />}
//                 {item === "Search" && <img src={Img_Search} alt="Search Icon" className="icon-home" />}
//                 {item === "Explore" && <img src={Img_Explore} alt="Explore Icon" className="icon-home" />}
//                 {item === "Messages" && <img src={Img_Messenger} alt="Messenger Icon" className="icon-home" />}
//                 {item === "Notifications" && <img src={Img_Notif} alt="Notif Icon" className="icon-home" />}
//                 {item === "Create" && <img src={Img_Create} alt="Create Icon" className="icon-home" />}
//                 {item === "Profile" && <img src={ICH} alt="ICH Icon" className="icon-home" />}
//                 <span className={`icon icon-${item.toLowerCase()}`}>{item}</span>
//               </div>
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// Sidebar.propTypes = {
//   onOpenModal: PropTypes.func.isRequired,
// };

// export default Sidebar;
