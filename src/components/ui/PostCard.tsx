interface PostCardProps {
  children: React.ReactNode;
}
const PostCard: React.FC<PostCardProps> = ({ children }) => {
  return (
    <div className='border-2 border-gray-900 border-solid bg-black-700'>
      {children}
    </div>
  );
};

export default PostCard;
