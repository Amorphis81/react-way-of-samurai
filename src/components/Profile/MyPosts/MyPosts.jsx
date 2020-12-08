import Post from "./Post/Post";

const MyPosts = () => {
  const postData = [
    {id: 1, message: 'Test mess 1', likeCounts: 15},
    {id: 2, message: 'Test mess 2', likeCounts: 20},
  ]
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
        <Post message={postData[0].message} likeCounts={postData[0].likeCounts}/>
        <Post message={postData[1].message} likeCounts={postData[1].likeCounts}/>
      </div>
    </div>
  );
}

export default MyPosts;