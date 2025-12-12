interface CardProps {
  imageSrc: string;
  title: string;
  description: string;
  buttonText: string;
  onButtonClick?: () => void;
}

const Cards = ({
  imageSrc,
  title,
  description,
  buttonText,
  onButtonClick,
}: CardProps) => {
  return (
    <div className="flex flex-col gap-4 p-5 bg-white rounded-2xl border-2 border-neutral-800 shadow-[6px_6px_0px_0px_rgba(31,41,55,1)] hover:translate-y-[-4px] hover:shadow-[10px_10px_0px_0px_rgba(31,41,55,1)] transition-all duration-300 h-full">
      <div>
        <img
          src={imageSrc}
          className="w-full h-48 object-cover border-2 border-neutral-800 rounded-xl bg-orange-50"
          alt={title}
        />
      </div>
      <div className="font-bold text-xl font-outfit text-neutral-800">
        {title}
      </div>
      <div className="text-gray-600 opacity-80">
        {description}
      </div>
      <div className="mt-auto pt-2">
        <button
          className="w-full border-2 border-neutral-800 bg-[#bfdbfe] py-2.5 px-4 rounded-xl font-bold text-neutral-800 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-y-[2px] active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:bg-[#93c5fd] transition-all duration-200"
          onClick={onButtonClick}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default Cards;