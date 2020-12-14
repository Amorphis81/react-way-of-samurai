import Post from "./Post/Post";
import React from "react";

const MyPosts = (props) => {
  const postsElements = props.posts.map(p => <Post message={p.message} likeCounts={p.likeCounts} key={p.id} />);

  const newPostElement = React.createRef();

  const addPost = () => {
    props.addPost();
  }

  const onPostChange = () => {
    const text = newPostElement.current.value;
    props.updateNewPostText(text);
  }

  return (
    <div className={'posts-wrapper'}>
      <h2 className="h2 posts-wrapper__title">My posts</h2>
      <div className="new-post profile__new-post">
        <h3 className={'h3 new-post__title'}>New post</h3>
        <div className="new-post__inner">
          <textarea ref={newPostElement} value={props.newPostText} onChange={onPostChange} className={'new-post__textarea'} cols="30" rows="4"/>
          <button onClick={ addPost } className={'btn new-post__btn'}>Add Post</button>
        </div>
      </div>
      <div className={'posts content__posts'}>{postsElements}</div>
    </div>
  );
}

export default MyPosts;