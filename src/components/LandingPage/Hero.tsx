
const Hero = () => {
  return (
    <div className="flex flex-col gap-4 justify-center items-center py-12" >
      <div className=" font-extrabold items-center text-center text-6xl">
        The Roadmap Generator 
      </div>
      <div className="text-gray-700 text-center pb-6 text-xl">
        AI-Powered Roadmaps for Lifelong Learners
      </div>

      <div className="flex flex-col md:flex-row p-4 md:border-2 gap-3 md:gap-8 items-center justify-center rounded-xl md:border-b-4 md:border-r-4">
        <input 
        type="text"
        placeholder="Enter your desired skill for learing..."
        className="border-2 border-b-4 border-r-4 p-4 rounded-xl"
        />
        <button className="p-3 border-2 border-b-4 border-r-4 active:border-b-3 active:border-r-3 rounded-xl bg-blue-200">
            Generate
        </button>
      </div>
    </div>
  )
}

export default Hero
