
// import SearchInput from "./SearchInput";

// export default function Search() {
//   return (
//     <div className="p-6">
//       <p className="text-2xl font-semibold">Search</p>
//       <SearchInput mt={"40px"} />
//       <p className="pt-[46px] text-base font-semibold">Recent</p>
//     </div>
//   );
// }

// import { useState } from 'react';
// import SearchInput from './SearchInput';

// export default function Search() {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   return (
//     <div className="p-6">
//       <button onClick={toggleSidebar} className="text-2xl font-semibold">
//         Search
//       </button>
//       <div
//         className={`search-sidebar ${isSidebarOpen ? 'open' : ''}`}
//         style={{
//           transform: isSidebarOpen ? 'translateX(0)' : 'translateX(-100%)',
//           transition: 'transform 0.3s ease', width:"397px",
//         }}
//       >
//         <SearchInput mt="40px"/>
//       </div>
//       <p className="pt-[46px] text-base font-semibold">Recent</p>
//     </div>
//   );
// }
import { useState } from 'react';
import SearchInput from './SearchInput';

export default function Search() {
  const [searchQuery, setSearchQuery] = useState(''); // using useState here

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="search-container">
      <div className="search-sidebar">
        <SearchInput mt="40px" onChange={handleSearchChange} value={searchQuery} />
      </div>
      <p className="pt-[46px] text-base font-semibold">Recent</p>
    </div>
  );
}
