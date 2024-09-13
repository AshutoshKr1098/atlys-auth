interface CardTextAreaProps {
  emoji: any;
  text: React.ReactNode;
}
const CardTextArea: React.FC<CardTextAreaProps> = ({ emoji, text }) => {
  return (
    <div className='bg-black-800 rounded-lg py-4'>
      <div className='bg-black-700 size-12 rounded-full flex items-center justify-center'>
        {emoji}
      </div>
      <div>{text}</div>
    </div>
  );
};

export default CardTextArea;
