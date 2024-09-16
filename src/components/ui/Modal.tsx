import ReactDOM from "react-dom";
import { Transition } from "@headlessui/react";
import clsx from "clsx";
import CloseIcon from "../../assets/icons/CloseIcon";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  customClass?: string;
}
const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  customClass = "",
}) => {
  // Handle click outside the modal to close it
  const handleClickOutside = (e: React.MouseEvent<HTMLDivElement>) => {
    // Check if the click was on the overlay
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  return ReactDOM.createPortal(
    <Transition
      show={isOpen}
      enter='transition-opacity duration-300'
      enterFrom='opacity-0'
      enterTo='opacity-100'
      leave='transition-opacity duration-300'
      leaveFrom='opacity-100'
      leaveTo='opacity-0'>
      <div
        className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'
        onClick={handleClickOutside}>
        <Transition
          show={isOpen}
          enter='transition-transform duration-300'
          enterFrom='scale-75'
          enterTo='scale-100'
          leave='transition-transform duration-300'
          leaveFrom='scale-100'
          leaveTo='scale-75'>
          <div
            className={clsx([
              "p-6 rounded-lg shadow-lg w-11/12 max-w-lg relative",
              customClass,
            ])}>
            <div
              className='absolute right-[40px] top-[40px] cursor-pointer'
              onClick={onClose}>
              <CloseIcon />
            </div>
            <div>{children}</div>
          </div>
        </Transition>
      </div>
    </Transition>,
    document.body
  );
};

export default Modal;
