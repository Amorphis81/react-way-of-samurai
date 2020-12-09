import Post from "./Post/Post";

const MyPosts = () => {
  const postsData = [
    {id: 1, message: 'Test mess 1', likeCounts: 15},
    {id: 2, message: 'Test mess 2', likeCounts: 20},
  ]
  const posts = postsData.map(p => <Post message={p.message} likeCounts={p.likeCounts}/>)

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
      <div className={'posts content__posts'}>{posts}</div>
    </div>
  );
}

export default MyPosts;