import { useEffect, useState } from "react";
import { $api } from "../../api/api";
import { Link } from "react-router-dom";
import ProfileLinkIcon from "../../atoms/Modalls/ProfileLinkIcon";
import PropTypes from "prop-types";
// import UserId from "../Profile/UserId";
import IdPrf from "../../assets/IdPrf.png";

import "./Profile.css";

const Profile = ({ userId }) => {
  const [userProfile, setUserProfile] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUserProfile(JSON.parse(storedUser));
      setIsLoading(false);
    } else {
      getUserProfile();
    }
  }, []);

  const getUserProfile = async () => {
    try {
      const response = await $api.get(`/user/${userId}`);
      setUserProfile(response.data);
      localStorage.setItem("user", JSON.stringify(response.data));
    } catch (error) {
      console.error("Error getting profile:", error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="profile-container">
      <div className="profile-main">
        <div className="avatar-wrapper">
        <img src={userProfile?.IdPrf || IdPrf} alt="#" className="profile-avatar" />

        </div>
        <div className="profile-info">
          <div className="profile-header">
            <span className="profile-username">
              {userProfile?.username || "username"}
            </span>
            <Link to="/edit-profile" className="edit-profile-link">
         
              Edit profile
            </Link>
          </div>
          <div className="stats">
            <span>{userProfile?.posts_count || 0} posts</span>
            <span>{userProfile?.followers_count || 0} followers</span>
            <span>{userProfile?.following_count || 0} following</span>
          </div>
          <div className="bio">
            {userProfile?.bio || "Write something about yourself..."}
          </div>
          {userProfile?.website && (
            <Link
              to={userProfile.website}
              target="_blank"
              className="website-link"
            >
           {/* <UserId /> */}
              <ProfileLinkIcon />
              {userProfile.website}
             
            </Link>
              

          )}
          
        </div>
      </div>
    </div>
  );
     
};


Profile.propTypes = {
  userId: PropTypes.string.isRequired,
};

export default Profile;
