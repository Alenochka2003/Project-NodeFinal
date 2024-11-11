
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
  const [activeTab, setActiveTab] = useState(''); // Используем activeTab вместо activePanel
  const [showModal, setShowModal] = useState(false);

  const handleClick = (tab) => {
    setActiveTab(tab);
    if (tab === 'Create') {
      setShowModal(true); // Показываем модальное окно для "Create"
      onCreatePost();
    }
  };

 

  const handleCloseModal = () => {
    setShowModal(false);
    setActiveTab(null);
  };

  return (
    <div className="sidebar">
      <img src={ICHGRA} alt="Logo" className="log_logo" />
      <ul className="menu">
        {['Home', 'Search', 'Explore', 'Messages', 'Notifications', 'Create',
          'Profile'].map((item) => (
          <li key={item}>
            <Link
              to={item !== 'Create' ? `/${item.toLowerCase()}` : null}
              onClick={() => handleClick(item)}
            >
              <div className={`menu-item-container ${activeTab === item ? 'active' : ''}`}>
                {/* Отображаем соответствующий значок для каждого элемента */}
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
              <img src="./svg/add_posts.svg" alt="add_posts" className="upload-icon" />
              <p>Перетащите сюда фото и видео</p>
              
              
              {/* const handleCreatePost = async () => {
    const newPost = await fetchPosts();
    if (newPost) {
      setPosts((prevPosts) => [...prevPosts, newPost]);
    }
  }; */}

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



