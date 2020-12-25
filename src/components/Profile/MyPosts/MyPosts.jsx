import Post from "./Post/Post";
import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";


const MyPosts = (props) => {
  const postsElements = props.posts.map(p => <Post message={p.message} likeCounts={p.likeCounts} key={p.id} />);

  const newPostElement = React.createRef();

  const addPost = () => {
    props.dispatch(addPostActionCreator());
  }

  const onPostChange = () => {
    const text = newPostElement.current.value;
    const action = updateNewPostTextActionCreator(text)
    props.dispatch(action);
  }

  return (
    <div className={'posts-wrapper'}>
      <h2 className="h2 posts-wrapper__title">My posts</h2>
      <div className="new-post profile__new-post">
        <h3 className={'h3 new-post__title'}>New post</h3>
        <div className="new-post__inner">
          <textarea ref={newPostElement} value={props.newPostText} onChange={ onPostChange } className={'new-post__textarea'} cols="30" rows="4"/>
          <button onClick={ addPost } className={'btn new-post__btn'}>Add Post</button>
        </div>
      </div>
      <div className={'posts content__posts'}>{postsElements}</div>
    </div>
  );
}

export default MyPosts;