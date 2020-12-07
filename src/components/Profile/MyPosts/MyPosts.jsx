import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div>
      My posts
      <div>New post</div>
      <textarea name="" id="" cols="30" rows="4"/>
      <button>Add Post</button>
      <div className={'posts content__posts'}>
        <Post message={'Hi, how are you?'} likeCounts={15}/>
        <Post message={"It's my first post"} likeCounts={20}/>
      </div>
    </div>
  );
}

export default MyPosts;