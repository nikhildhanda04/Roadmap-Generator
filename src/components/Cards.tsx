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
    <div className="flex flex-col gap-3 p-6 rounded-2xl border-2 border-b-4 border-r-4">
      <div>
        <img
          src={imageSrc}
          className="object-cover"
          alt={title}
        />
      </div>
      <div className="font-bold text-xl">
        {title}
      </div>
      <div className="text-gray-600 opacity-80">
        {description}
      </div>
      <div>
        <button
          className="border-2 border-b-4 border-r-4 bg-blue-300 p-3 rounded"
          onClick={onButtonClick}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default Cards;