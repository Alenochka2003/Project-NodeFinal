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

// import PropTypes from 'prop-types';
// import './PostGrid.css';
// import post_login from './svg/post_login.svg'
// import sasha from './svg/sasha.svg'
// import week from './svg/week.svg'
// import tochka from './svg/tochka.svg'
// // import Osen from './svg/Osen.png';

// function PostGrid({ posts }) {
//   return (
//     <div className="post-grid">
//        {posts.map((post, index) => (
//         <div key={index} className="post-item">
//           <div className='header_container'>
//           <img src={post_login} alt="Post_Logo" className="post-logo" />
//           <img src={sasha} alt="sasha" className="sasha" />
//           <img src={week} alt="week" className="2week" />
//           <img src={tochka} alt="tochka" className="tochka" />
//           <a href="#">follow</a>
//           </div>
//           <img src={post.image_url} alt="Post Image" className="post-image" />
//           <p>{post.content}</p>
//         </div>
//       ))}


//       {/* {posts.map((post) => (
//         <div key={post.id} className="post">
//           <img src={post.image} alt="Post" />
//           <p>{post.timestamp}</p>
//         </div>
//       ))} */}
//     </div>
//   );
// }

// PostGrid.propTypes = {
//   posts: PropTypes.arrayOf(
//     PropTypes.shape({
//       content: PropTypes.string.isRequired,
//       // id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
//       // image: PropTypes.string.isRequired,
//       // timestamp: PropTypes.string.isRequired,
//     })
//   ).isRequired,
// };

// export default PostGrid;


// import { useEffect, useState } from "react";
// import PropTypes from "prop-types"; // Importing prop-types
// import { $api } from "../../api/api";
// import "./PostGrid.css";
// import { parseData } from "../../helpers/parseData";
// import { matchUserId } from "../../helpers/matchUsersId";

// export const PostsList = () => {
//   const [posts, setPosts] = useState([]);
//   const [follows, setFollows] = useState([]);

//   useEffect(() => {
//     const getPosts = () => {
//       $api.get("/post/all").then((res) => setPosts(res.data));
//     };
//     const getFollowers = async () => {
//       const response = await $api.get(`/follow/672c78f0b6361b9bb37beca9/following`);
//       setFollows(response.data);
//     };
//     getFollowers();
//     getPosts();
//   }, []);

//   return (
//     <ul className="postList">
//       {posts.length > 0 ? (
//         posts.map((item) => (
//           <PostItem
//             key={item._id}
//             item={item}
//             isFollow={matchUserId(follows, item.user_id)}
//           />
//         ))
//       ) : (
//         <li>No Posts</li>
//       )}
//     </ul>
//   );
// };

// const PostItem = ({ item, isFollow }) => {
//   return (
//     <li className="postItem">
//       <div>
//         <img src={item.profile_image} alt="avatar" />
//         <span>{item.user_name}</span>
//         <span className="created">
//           &#8226;{parseData(item.created_at)}&#8226;
//         </span>
//         <FollowButton isFollow={isFollow} userId={item.user_id} targetUserId={item.user_id} />
//       </div>
//       <img src={item.image_url} alt="" />
//       {item.caption}
//     </li>
//   );
// };

// PostItem.propTypes = {
//   item: PropTypes.shape({
//     profile_image: PropTypes.string,
//     user_name: PropTypes.string,
//     created_at: PropTypes.string,
//     image_url: PropTypes.string,
//     caption: PropTypes.string,
//     user_id: PropTypes.string,
//   }).isRequired,
//   isFollow: PropTypes.bool.isRequired,
// };

// const FollowButton = ({ isFollow, userId, targetUserId }) => {
//   const [follow, setFollow] = useState(isFollow);

//   const handleFollow = () => {
//     if (!follow) {
//       $api.post(`/follow/${userId}/follow/${targetUserId}`);
//       setFollow(true);
//     } else {
//       $api.delete(`/follow/${userId}/unfollow/${targetUserId}`);
//       setFollow(false);
//     }
//   };

//   return (
//     <button onClick={handleFollow}>{!follow ? "follow" : "unfollow"}</button>
//   );
// };

// FollowButton.propTypes = {
//   isFollow: PropTypes.bool.isRequired,
//   userId: PropTypes.string.isRequired,
//   targetUserId: PropTypes.string.isRequired,
// };

// export default PostsList;
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { $api } from '../../api/api';
import { parseData } from '../../helpers/parseData';
import { matchUserId } from '../../helpers/matchUsersId';

import './PostGrid.css';
import post_login from './svg/post_login.svg';
import sasha from './svg/sasha.svg';
import week from './svg/week.svg';
import tochka from './svg/tochka.svg';

const PostGrid = () => {
  const [posts, setPosts] = useState([]);
  const [follows, setFollows] = useState([]);

  // Fetch posts and followers on component mount
  useEffect(() => {
    const getPosts = async () => {
      const response = await $api.get('/post/all');
      setPosts(response.data);
    };

    const getFollowers = async () => {
      const response = await $api.get('/follow/672c78f0b6361b9bb37beca9/following');
      setFollows(response.data);
    };

    getPosts();
    getFollowers();
  }, []);

  return (
    <div className="post-grid">
      {posts.length > 0 ? (
        posts.map((post, index ) => (
          <div key={post._id || index} className="post-item">
            {/* Post Header */}
            <div className="header_container">
              <img src={post_login} alt="Post Logo" className="post-logo" />
              <img src={sasha} alt="User Avatar" className="sasha" />
              <img src={week} alt="Week Icon" className="week-icon" />
              <img src={tochka} alt="Tochka Icon" className="tochka-icon" />
              <a href="#" className="follow-button">
                {matchUserId(follows, post.user_id) ? 'Following' : 'Follow'}
              </a>
            </div>
            {/* Post Image and Content */}
            <img src={post.image_url} alt="Post Image" className="post-image" />
            {/* <img src={record.picture}
        onError={({ currentTarget }) => {
        currentTarget.onerror = null; // prevents looping
        currentTarget.src="image_url";
  }}
/> */}
            <p>{post.caption}</p>
            <div className="post-timestamp">{parseData(post.created_at)}</div>
          </div>
        ))
      ) : (
        <p>No Posts</p>
      )}
    </div>
  );
};

// Define propTypes for validation
PostGrid.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      user_id: PropTypes.string.isRequired,
      user_name: PropTypes.string,
      profile_image: PropTypes.string,
      image_url: PropTypes.string.isRequired,
      caption: PropTypes.string,
      created_at: PropTypes.string.isRequired,
      
    })
  ),
};

export default PostGrid;
