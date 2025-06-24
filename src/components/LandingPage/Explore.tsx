import Cards from "./Cards"

const cardData = [
  {
    imageSrc: "/Card.png",
    title: "FrontEnd Developer",
    description: "Learn HTML, CSS, JavaScript, and popular frameworks like React.",
    buttonText: "View Roadmap",
  },
  {
    imageSrc: "/Card.png",
    title: "BackEnd Developer",
    description: "Master Node.js, databases, APIs, and server-side frameworks.",
    buttonText: "View Roadmap",
  },
  {
    imageSrc: "/Card.png",
    title: "FullStack Developer",
    description: "Combine front-end and back-end skills for complete solutions.",
    buttonText: "View Roadmap",
  },
  {
    imageSrc: "/Card.png",
    title: "Data Scientist",
    description: "Dive into data analysis, machine learning, and visualization.",
    buttonText: "View Roadmap",
  },
  {
    imageSrc: "/Card.png",
    title: "DevOps Engineer",
    description: "Automate, deploy, and manage infrastructure efficiently.",
    buttonText: "View Roadmap",
  },
  {
    imageSrc: "/Card.png",
    title: "Mobile Developer",
    description: "Build apps for Android and iOS using modern frameworks.",
    buttonText: "View Roadmap",
  },
];

const Explore = () => {
  return (
    <div className="flex flex-col justify-center gap-6 pt-20 items-center px-[5vw] mb-[3vw]">
        <div className="font-bold text-center text-4xl">
            Explore Existing Roadmaps
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
            {cardData.map((card, idx) => (
            <Cards
                key={idx}
                imageSrc={card.imageSrc}
                title={card.title}
                description={card.description}
                buttonText={card.buttonText}
                onButtonClick={() => alert(`Clicked: ${card.title}`)}
            />
            ))}
        </div>
    </div>
  )
}

export default Explore
