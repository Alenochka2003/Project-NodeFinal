
// // import PropTypes from "prop-types";
// // import { useState } from "react";
// // import closeIcon from "../Search/icons/close-icon.svg";

// // export default function SearchInput({ mt }) {
// //   const [inputValue, setInputValue] = useState("");

// //   const handleInputChange = (event) => {
// //     setInputValue(event.target.value);
// //   };

// //   const handleClearClick = () => {
// //     setInputValue("");
// //   };

// //   return (
// //     <div className="w-full relative" style={{ marginTop: mt }}>
// //       <input
// //         type="text"
// //         placeholder="Search"
// //         value={inputValue}
// //         onChange={handleInputChange}
// //         className="w-full bg-inputColor text-base font-light text-textGrayColor pl-4 pr-8 py-[10px] focus:outline-none focus:ring-2 focus:ring-zinc-500 rounded-lg"
// //       />
// //       {inputValue && (
// //         <button className="absolute right-3 top-[12px]" onClick={handleClearClick}>
// //           <img src={closeIcon} alt="close icon" />
// //         </button>
// //       )}
// //     </div>
// //   );
// // }

// // // Добавляем propTypes
// // SearchInput.propTypes = {
// //   mt: PropTypes.number,
// // };
// import PropTypes from "prop-types";
// import { useState } from "react";
// import closeIcon from "../Search/icons/close-icon.svg";
// import "./SearchInput.css";

// export default function SearchInput({ mt }) {
//   const [inputValue, setInputValue] = useState("");

//   const handleInputChange = (event) => {
//     setInputValue(event.target.value);
//   };

//   const handleClearClick = () => {
//     setInputValue("");
//   };

//   return (
//     <div className="search-input-wrapper" style={{ marginTop: mt }}>
//       <input
//         type="text"
//         placeholder="Search"
//         value={inputValue}
//         onChange={handleInputChange}
//         className="search-input"
//       />
//       {inputValue && (
//         <button className="clear-button" onClick={handleClearClick}>
//           <img src={closeIcon} alt="close icon" />
//         </button>
//       )}
//     </div>
//   );
// }

// SearchInput.propTypes = {
//   mt: PropTypes.number,
// };


import PropTypes from "prop-types";
import { useState } from "react";
import closeIcon from "../Search/icons/close-icon.svg";
import "./SearchInput.css";

export default function SearchInput({ mt }) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleClearClick = () => {
    setInputValue("");
  };

  return (
    <div className="search-input-wrapper" style={{ marginTop: mt }}>
      <input
        type="text"
        placeholder="Search"
        value={inputValue}
        onChange={handleInputChange}
        className="search-input"
      />
      {inputValue && (
        <button className="clear-button" onClick={handleClearClick}>
          <img src={closeIcon} alt="close icon" />
        </button>
      )}
    </div>
  );
}

SearchInput.propTypes = {
  mt: PropTypes.number,
};
