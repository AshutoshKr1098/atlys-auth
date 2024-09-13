import { useEffect, useState } from "react";
import CreatePost from "./CreatePost";
import { POST_DATA, Post } from "../../constant/postData";
import PostList from "./PostList";

const PostFeed = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    setPosts(POST_DATA);
  };

  return (
    <>
      <CreatePost />
      <PostList posts={posts} />
    </>
  );
};

export default PostFeed;
