

// import './Search.css';
// import user from '../../../assets/Container.png';


// const SearchMenu = () => {
//     return (
//         <div className="search">
//             <div className="search_container">
//                 <span className="heading">Search</span>
//                 <div className="s_im">
//                     <input className="input_s" type="text" placeholder="Search" />
//                     <button className="xButton" onClick={() => document.querySelector('.input_s').value = ''}>X</button>
//                 </div>
//                 <span className="subHeading">Recent</span>
//             </div>
//             <ul className="list_search">
//                 <li>
//                     <img src={user} alt="User avatar" />
//                     <span>sashaa</span>
//                 </li>
//             </ul>
           
//         </div>

        
//     );
// };

// export default SearchMenu;

import './Search.css';
import  { useState } from 'react';
import user1 from '../../../assets/icons8-твиттер.gif'; // Пример пути до изображений
import user2 from '../../../assets/rb_848.png';
import user3 from '../../../assets/user.png';

const users = [
  { id: 1, name: 'John', avatar: user1 },
  { id: 2, name: 'Sasha', avatar: user2 },
  { id: 3, name: 'Vika', avatar: user3 }
];

const SearchMenu = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="search">
      <div className="search_container">
        <span className="heading">Search</span>
        <div className="s_im">
          <input 
            className="input_s" 
            type="text" 
            placeholder="Search" 
            value={searchQuery} 
            onChange={handleSearchChange}
          />
          <button 
            className="xButton" 
            onClick={() => setSearchQuery('')}
          >
            X
          </button>
        </div>
        <span className="subHeading">Recent</span>
      </div>
      <ul className="list_search">
        {filteredUsers.map(user => (
          <li key={user.id}>
            <img src={user.avatar} alt="User avatar" />
            <span>{user.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchMenu;
