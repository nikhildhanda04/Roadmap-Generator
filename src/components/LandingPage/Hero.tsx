import FloatingElement from "../floatingElements"

const Hero = () => {

  return (
    <div className="flex flex-col gap-4 justify-center items-center py-12" >

       {/* <FloatingElement
        src="/Alert.svg"
        title="Bulb"
        rotation={-20}
        width={90}
        height={90}
        className="left-93 top-50 opacity-60 absolute"
      /> */}
      
      <FloatingElement
        src="/Blub.svg"
        title="Bulb"
        rotation={-20}
        width={100}
        height={100}
        className="right-93 top-50 opacity-60 absolute"
      />
            <FloatingElement
        src="/Ribbon.svg"
        title="Bulb"
        rotation={-170}
        width={90}
        height={90}
        className="left-100 top-87 opacity-60 absolute"
      />
      <div className=" font-extrabold tracking-tight text-shadow-amber-600 text-shadow-xl items-center text-center text-6xl">
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
