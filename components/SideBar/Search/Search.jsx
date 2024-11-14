
// import { useState } from 'react';
// import SearchInput from './SearchInput';
// import user from '../../../assets/Container.png';

// export default function Search() {
//   const [searchQuery, setSearchQuery] = useState(''); // using useState here

//   const handleSearchChange = (event) => {
//     setSearchQuery(event.target.value);
//   };

//   return (
//     <div className="search-container">
//       <div className="search-sidebar">
//         <SearchInput mt="40px" onChange={handleSearchChange} value={searchQuery} />
//       </div>
//       <p className=" font-semibold">Recent</p>
//       <ul className="list">
//                     <li>
//                         <img src={user} alt="User avatar" />
//                         <span>sashaa</span>
//                     </li>
//                 </ul>
//     </div>
//   );
// }

import './Search.css';
import user from '../../../assets/Container.png';

const SearchMenu = () => {
    return (
        <div className="search">
            <div className="search_container">
                <span className="heading">Search</span>
                <div className='s_im'>
                    <input className="input_s" type="text" placeholder="Search" />
                    <button className="xButton">X</button>
                </div>
                <span className="subHeading">Recent</span>
               
            </div>
            <ul className="list_search">
                    <li>
                        <img src={user} alt="User avatar" />
                        <span>sashaa</span>
                    </li>
                </ul>
        </div>


    );
}

export default SearchMenu;


