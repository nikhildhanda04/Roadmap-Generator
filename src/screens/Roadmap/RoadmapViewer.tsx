import Roadmap from "./Roadmap"
import { useRef } from "react"
import "./Roadmap.css"

import { useLocation, useNavigate } from "react-router-dom"
import { motion, easeIn } from 'framer-motion'

const RoadmapViewer = () => {
  const chartRef = useRef<HTMLDivElement>(null)
  const location = useLocation()
  const navigate = useNavigate()

  const { roadmap, title } = location.state || {}

  if (!roadmap) {
    navigate("/")
    return null 
  }

  return (
    <>
    <div className="bg-yellow-100 bg flex flex-col px-[10vw] h-screen items-center">
      <img 
      src="/wave (1).svg"
      className="absolute top-[-8vw] z-1"
      />
      <motion.div 
      initial={{y: 20, opacity:0.2, filter: "blur(10px)" }}
      animate={{y: 0, opacity: 1, filter: "blur(0px)"}}
      transition={{ease: easeIn, duration: 0.8 }}
      className="font-extrabold text-neutral-800 mt-[7vw] z-99 mb-[2vw] tracking-tight items-center text-center text-[5vw]">
        {title ? `${title} Roadmap` : "Roadmap"}
      </motion.div>
      <motion.div
      initial={{y: 20, opacity:0.2, filter: "blur(10px)" }}
      animate={{y: 0, opacity: 1, filter: "blur(0px)"}}
      transition={{ease: easeIn, duration: 0.5 }}
        className="z-99 w-[100vw] mb-[2vw]"
        ref={chartRef}
        style={{
          width: "100%",
          maxWidth: 900,
          height: 600,
          background: "white",
          borderRadius: 10,
          boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
          
        }}
      >
        <Roadmap 
        roadmap={roadmap.data || roadmap} />
      </motion.div>
      <img 
      src="/wave.svg"
      className="absolute bottom-0 z-1"
      />
    </div>
    </>
  )
}

export default RoadmapViewer