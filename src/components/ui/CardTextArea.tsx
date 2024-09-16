interface CardTextAreaProps {
  emoji: any;
  text: React.ReactNode;
  customStyle?: string;
}
const CardTextArea: React.FC<CardTextAreaProps> = ({
  emoji,
  text,
  customStyle = "",
}) => {
  return (
    <div className={`bg-black-800 rounded-lg p-4 flex gap-4 ${customStyle}`}>
      <div className='bg-black-700 size-12 rounded-full flex items-center justify-center'>
        {emoji}
      </div>
      <div className="max-w-[90%]">{text}</div>
    </div>
  );
};

export default CardTextArea;
