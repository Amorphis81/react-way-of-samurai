import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const ProfileContainer = props => {
  return (
    <div className={'profile'}>
      <ProfileInfo profile={props.profile}/>
      <MyPostsContainer />
    </div>
  );
}

export default ProfileContainer;