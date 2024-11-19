import { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import { $api } from "../../api/api";
import Profile from "../ProfileADD/Profile";
import PropTypes from "prop-types";
import "./ProfilePage.css";

const ProfilePage = () => {
  const { userId } = useParams();
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getPosts = useCallback(async () => {
    try {
      const response = await $api.get(`/post/all?userId=${userId}`);
      setPosts(response.data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    } finally {
      setIsLoading(false);
    }
  }, [userId]);

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return (
    <div className="profile-container">
      <Profile userId={userId} />
      <div className="posts-wrapper">
        {isLoading ? (
          <div className="loading-spinner">Loading posts...</div>
        ) : (
          <div className="posts-grid-layout">
            {posts.map((post) => (
              <div key={post._id} className="post-card">
                <img
                  src={post.image_url}
                  alt="Post Image"
                  className="post-thumbnail"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

ProfilePage.propTypes = {
  params: PropTypes.object.isRequired,
};

export default ProfilePage;
