import React from "react";
import { Post } from "../../constant/postData";
import PostCard from "../ui/PostCard";
import CardTextArea from "../ui/CardTextArea";
import { ChatBubble } from "../../assets/icons/ChatBubble";
import { DotsHorizontal } from "../../assets/icons/DotsHorizontal";

interface PostItemProps {
  postData: Post;
}

const PostItem: React.FC<PostItemProps> = ({ postData }) => {
  const {
    userId,
    username,
    thumbnailUrl,
    content,
    emoji,
    lastUpdated,
    isEdited,
    commentCount,
  } = postData;

  const AuthorDetails = () => {
    return (
      <div className='mb-[22px] flex justify-between'>
        <div className='flex items-start gap-4'>
          <img className='size-11' src={thumbnailUrl} />
          <div className='flex flex-col gap-1'>
            <p className='text-gray-100 text-base'>{username}</p>
            <div className='text-gray-500 text-sm'>
              <span>{lastUpdated}</span>
              {!!isEdited && <span> • Edited</span>}
            </div>
          </div>
        </div>
        <div>
          <DotsHorizontal />
        </div>
      </div>
    );
  };

  const Comments = () => {
    return (
      <div className='flex items-center gap-2 mt-3'>
        <ChatBubble />
        <span className='text-gray-500'>{commentCount} comments</span>
      </div>
    );
  };

  return (
    <PostCard>
      <AuthorDetails />
      <CardTextArea emoji={emoji} text={content} />
      <Comments />
    </PostCard>
  );
};

export default PostItem;
