// import PropTypes from 'prop-types'
// import Sidebar from '../components/SideBar/SideBar';
// import PostGrid from '../components/SideBar/PostGrid';
// import { useEffect, useState } from 'react';

// export const Home = () => {
//   const [posts, setPosts] = useState([]);
//   const [loading, setLoading] = useState(true);

  // Function to fetch posts

  // export const Home = () => {
  //   const [posts, setPosts] = useState([]);
  //   const [loading, setLoading] = useState(true);
  
  //   const fetchPosts = async () => {
  //     try {
  //       const response = await fetch('http://localhost:5000/api/post');
  //       const data = await response.json();
  //       setPosts(data);
  //     } catch (error) {
  //       console.error('Error fetching posts:', error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  
  //   useEffect(() => {
  //     fetchPosts();
  //   }, []);
  
  //   const handleCreatePost = (newPost) => {
  //     setPosts((prevPosts) => [newPost, ...prevPosts]);
  //   };
  
  //   return (
  //     <>
  //       <Sidebar onCreatePost={handleCreatePost} />
  //       {loading ? (
  //         <p>Loading posts...</p>
  //       ) : (
  //         <PostGrid posts={posts} />
  //       )}
  //     </>
  //   );
  // };
  

// export const Home = () => {

// const [posts, setPosts] = useState([])
// useEffect(() => { }, [] )


//     return ( <>
//    <Sidebar /> 
//    <PostGrid posts={posts }/>  
//    </>
//     );
//   };
  

//   Home.propTypes = {
//     state: PropTypes.bool
//   }


import PropTypes from 'prop-types';
import Sidebar from '../components/SideBar/SideBar';
import PostGrid from '../components/SideBar/PostGrid';
// import Explore from '../Pages/Explore/Explore';
import './Home.css';

import { useEffect, useState } from 'react';
import { $api } from '../api/api';

export const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchPosts = async () => {
    try {
      const response = await $api.get('/post/all'
      );
      const data = await response.data;
      setPosts(data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleCreatePost = (newPost) => {
    setPosts((prevPosts) => [newPost, ...prevPosts]); // Добавляем новый пост в начало массива постов
  };

  return (
    <>
        <Sidebar onCreatePost={handleCreatePost} />
        {loading ? (
          <p>Loading posts...</p>
        ) : (
          <PostGrid posts={posts} />
        )}
      </>

    // <>
    //   <Sidebar onCreatePost={handleCreatePost} />
    //   {loading ? (
    //     <p>Loading posts...</p>
    //   ) : (
    //     <PostGrid posts={posts} />
       
    //   )}
    // </>
  );
};

Home.propTypes = {
  state: PropTypes.bool
  // Можно добавить другие PropTypes, если необходимо
};
