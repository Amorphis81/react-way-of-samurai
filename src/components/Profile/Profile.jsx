import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
  return (
    <div className={'profile'}>
      <ProfileInfo />
      <MyPostsContainer />
    </div>
  );
}

export default Profile;