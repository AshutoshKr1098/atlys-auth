import UserIntroduction from "./UserIntroduction";
import PostFeed from "./PostFeed";

const Homepage = () => {
  return (
    <div className='max-w-[700px] mx-auto'>
      <UserIntroduction />
      <PostFeed />
    </div>
  );
};

export default Homepage;
