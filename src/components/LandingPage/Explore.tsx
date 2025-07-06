import Cards from "./Cards";
import { useNavigate } from "react-router-dom";
import { commonRoadmaps } from "./CardsData"; // Adjust path!

const Explore = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-center gap-6 pt-20 items-center px-[5vw] mb-[3vw]">
      <div className="font-bold text-center text-4xl">
        Explore Existing Roadmaps
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
        {commonRoadmaps.map((card, idx) => (
          <Cards
            key={idx}
            imageSrc={card.imageSrc}
            title={card.title}
            description={card.description}
            buttonText="View Roadmap"
            onButtonClick={() =>
              navigate("/roadmap", {
                state: {
                  title: card.title,
                  roadmap: card.roadmap,
                },
              })
            }
          />
        ))}
      </div>
    </div>
  );
};

export default Explore;
