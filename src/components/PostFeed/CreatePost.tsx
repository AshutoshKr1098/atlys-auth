import PostCard from "../ui/PostCard";
import CardTextArea from "../ui/CardTextArea";
import CTAButton from "../ui/CTAButton";
import { useState } from "react";
import { useAuthentication } from "../../hooks/useAuthentication";
import Modal from "../ui/Modal";
import Login from "../AuthenticationForms/LoginForm";
import Authenticate from "../Authenticate";

const CreatePost = () => {
  const { isAuthenticated, login, toggleView, loginView } = useAuthentication();
  const [open, setOpen] = useState(false);
  function createPost() {
    !isAuthenticated && setOpen(true);
  }

  return (
    <>
      <PostCard>
        <div className='flex flex-col gap-4'>
          <h2 className='font-medium text-[18px] leading-5 text-gray-100'>
            Create Post
          </h2>
          <CardTextArea
            emoji={"💬"}
            text='How are you feeling today?'
            customStyle='items-center'
          />
          <CTAButton
            variant='primary'
            text='Post'
            onClick={createPost}
            customStyle='self-end py-3 w-[110px]'
          />
        </div>
      </PostCard>
      <Modal
        isOpen={open}
        onClose={() => {
          setOpen(false);
        }}>
        <Authenticate />
      </Modal>
    </>
  );
};

export default CreatePost;
