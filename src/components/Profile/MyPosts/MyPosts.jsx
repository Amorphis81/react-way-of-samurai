import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div className={'posts-wrapper'}>
      <h2 className="h2 posts-wrapper__title">My posts</h2>
      <div className="new-post">
        <h3 className={'h3 new-post__title'}>New post</h3>
        <div className="new-post__inner">
          <textarea className={'new-post__textarea'} name="" id="" cols="30" rows="4"/>
          <button className={'btn new-post__btn'}>Add Post</button>
        </div>
      </div>
      <div className={'posts content__posts'}>
        <Post message={'Hi, how are you?'} likeCounts={15}/>
        <Post message={"It's my first post"} likeCounts={20}/>
      </div>
    </div>
  );
}

export default MyPosts;