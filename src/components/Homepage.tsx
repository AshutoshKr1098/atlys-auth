import React from "react";
import UserIntroduction from "./UserIntroduction";
import CreatePost from "./CreatePost";

const Homepage = () => {
  return (
    <div className='max-w-[700px] mx-auto'>
      <UserIntroduction />
      <CreatePost />
      {/* <Posts /> */}
    </div>
  );
};

export default Homepage;
