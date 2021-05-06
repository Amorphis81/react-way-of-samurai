import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {Redirect} from "react-router";

const ProfileContainer = props => {
  if (!props.isAuth) return <Redirect to={"/login"} />
  return (
    <div className={'profile'}>
      <ProfileInfo profile={props.profile}/>
      <MyPostsContainer />
    </div>
  );
}

export default ProfileContainer;