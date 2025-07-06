import Roadmap from "./Roadmap"
import { useRef } from "react"

import { useLocation, useNavigate } from "react-router-dom"

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
    <div className="bg-yellow-100 flex flex-col px-[10vw] py-[10vw] items-center">
      <div className="font-extrabold mb-10 tracking-tight items-center text-center text-6xl">
        {title ? `${title} Roadmap` : "Roadmap"}
      </div>
      <div
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
        <Roadmap roadmap={roadmap.data} />
      </div>
    </div>
  )
}

export default RoadmapViewer