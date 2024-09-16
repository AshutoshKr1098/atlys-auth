import { useAuthentication } from "../hooks/useAuthentication";

const UserIntroduction = () => {
  const { isAuthenticated, loggedUser } = useAuthentication();
  return (
    <div className='pt-[70px] mb-10'>
      {isAuthenticated && (
        <h1 className='font-medium text-[28px] leading-8 text-gray-100'>
          Hello {loggedUser}
        </h1>
      )}
      <p className='font-normal text-base leading-6 text-gray-500 max-w-[80%] mt-3'>
        How are you doing today? Would you like to share something with the
        community 🤗
      </p>
    </div>
  );
};

export default UserIntroduction;
