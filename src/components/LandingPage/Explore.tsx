import Cards from "./Cards";
import { useNavigate } from "react-router-dom";
import { commonRoadmaps } from "./CardsData";
import { motion, easeIn } from 'framer-motion'

const Explore = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-center gap-6 pt-20 items-center px-[5vw] mb-[3vw]">
      <motion.div
        initial={{ y: 20, opacity: 0.2, filter: "blur(10px)" }}
        animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
        transition={{ ease: easeIn, duration: 0.9 }}
        className="font-extrabold text-center text-4xl md:text-5xl text-neutral-800 tracking-tight"
      >
        Explore Existing Roadmaps
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4 md:p-8 w-full max-w-7xl">
        {commonRoadmaps.map((card, idx) => (
          <motion.div
            key={idx}
            initial={{ y: 20, opacity: 0, filter: "blur(10px)" }}
            whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
            transition={{ ease: easeIn, duration: 0.7 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <Cards
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
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Explore;
