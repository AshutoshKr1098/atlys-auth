import React from "react";
import PostCard from "./ui/PostCard";
import CardTextArea from "./ui/CardTextArea";
import CTAButton from "./ui/CTAButton";

const CreatePost = () => {
  function createPost() {
    return;
  }

  return (
    <PostCard>
      <div>
        <h2>Create Post</h2>
        <CardTextArea emoji={"💬"} text='How are you feeling today?' />
        <CTAButton variant='primary' text='Post' onClick={createPost} />
      </div>
    </PostCard>
  );
};

export default CreatePost;
