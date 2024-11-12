// PostGrid.js
// import PropTypes from 'prop-types'
// import './PostGrid.css';

// function PostGrid({ posts }) {
//   return (
//     <div className="post-grid">
//       {posts.map((post) => (
//         <div key={post.id} className="post">
//           <img src={post.image} alt="Post" />
//           <p>{post.timestamp}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// PostGrid.propTypes = {
//   posts: PropTypes.bool
// }

// export default PostGrid;

// масив смайликов под посты
  //  arEmojis = [ "😂", "😍", "😢", "👏", "🔥", "🥳", "❤️", "🤔", "😘", "🎉", "😆", "😊", 
  // "😁", "😎", "🤗", "🙌", "👌", "👍", "💪", "🥰", "😜", "🤩", "🤯", "🥺", 
  // "😅", "🤣", "😋", "😇", "🤤", "😈", "🥴", "😏", "🤓", "🙄", "😩", "🤥", 
  // "😴", "💀", "👻", "😳", "😤", "😱", "💩", "🤡","😂", "😍", "😢", "👏", "🔥",
  //  "🥳", "❤️", "🤔", "😘", "🎉", "😆", "😊", "😁", "😎", "🤗",
  //   "🙌", "👌", "👍", "💪", "🥰", "😜", "🤩", "🤯", "🥺", "😅", "🤣", "😋",
  //    "😇", "🤤", "😈", "🥴", "😏", "🤓", "🙄", "😩", "🤥", "😴", "💀", "👻", "😳",
  //     "😤", "😱", "💩","🤣", "😋", "😇", "🤤", "😈", "🥴", "😏", "🤓", "🙄", "😩", "🤥" ];

import PropTypes from 'prop-types';
import './PostGrid.css';
import post_login from './svg/post_login.svg'
import sasha from './svg/sasha.svg'
import week from './svg/week.svg'
import tochka from './svg/tochka.svg'
// import Osen from './svg/Osen.png';

function PostGrid({ posts }) {
  return (
    <div className="post-grid">
       {posts.map((post, index) => (
        <div key={index} className="post-item">
          <div className='header_container'>
          <img src={post_login} alt="Post_Logo" className="post-logo" />
          <img src={sasha} alt="sasha" className="sasha" />
          <img src={week} alt="week" className="2week" />
          <img src={tochka} alt="tochka" className="tochka" />
          <a href="#">follow</a>
          </div>
          <img src={post.image_url} alt="Post Image" className="post-image" />
          <p>{post.content}</p>
        </div>
      ))}


      {/* {posts.map((post) => (
        <div key={post.id} className="post">
          <img src={post.image} alt="Post" />
          <p>{post.timestamp}</p>
        </div>
      ))} */}
    </div>
  );
}

PostGrid.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      content: PropTypes.string.isRequired,
      // id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      // image: PropTypes.string.isRequired,
      // timestamp: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default PostGrid;
