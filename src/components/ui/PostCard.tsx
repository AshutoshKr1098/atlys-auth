interface PostCardProps {
  children: React.ReactNode;
}
const PostCard: React.FC<PostCardProps> = ({ children }) => {
  return (
    <div className='border-2 border-gray-900 border-solid bg-black-700 py-6 px-5 rounded-lg'>
      {children}
    </div>
  );
};

export default PostCard;
