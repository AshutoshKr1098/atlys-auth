import React from "react";
import { Post } from "../../constant/postData";
import PostItem from "./PostItem";

interface PostListProps {
  posts: Post[];
}

const PostList: React.FC<PostListProps> = ({ posts }) => {
  if (!posts.length) {
    return null;
  }

  return (
    <div className="flex flex-col gap-4 mt-4">
      {posts.map((post) => (
        <PostItem postData={post} />
      ))}
    </div>
  );
};

export default PostList;
