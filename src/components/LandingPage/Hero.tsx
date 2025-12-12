import { useState } from "react";
import { useNavigate } from "react-router-dom";

import FloatingElement from "../floatingElements";
import axios from 'axios';
import { easeIn, motion } from 'framer-motion'


const Hero = () => {
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleGenerate = async () => {
    if (!title.trim()) return;
    setLoading(true);

    try {

      const token = localStorage.getItem('authToken');
      if (!token) {
        console.log("Token not found");
      }

      const res = await axios.post('https://roadmap-backend-1.onrender.com/api/roadmap/create', { title }, { headers: { Authorization: `Bearer ${token}` } });

      if (!res.data) throw new Error("Failed to generate roadmap");

      console.log(`res.data:`, res.data);

      navigate("/roadmap", { state: { roadmap: res.data, title } });

    } catch (err) {
      console.error("Error generating roadmap:", err);
      alert("Error generating roadmap.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-4 justify-center items-center py-12" >
      <FloatingElement
        src="/Blub.svg"
        title="Bulb"
        rotation={-20}
        width={100}
        height={100}
        className="hidden md:absolute right-93 top-50 opacity-60 "
      />
      <FloatingElement
        src="/Ribbon.svg"
        title="Bulb"
        rotation={-170}
        width={90}
        height={90}
        className="hidden md:absolute left-100 top-87 opacity-60 "
      />
      <motion.div
        initial={{ y: 20, opacity: 0.2, filter: "blur(10px)" }}
        animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
        transition={{ ease: easeIn, duration: 0.5 }}
        className="font-extrabold tracking-tighter text-neutral-800 drop-shadow-sm items-center text-center text-6xl md:text-8xl py-4">
        The Roadmap Generator
      </motion.div>
      <motion.div
        initial={{ y: 20, opacity: 0.2, filter: "blur(10px)" }}
        animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
        transition={{ ease: easeIn, duration: 0.6 }}
        className="text-gray-700 text-center pb-6 text-xl">
        AI-Powered Roadmaps for Lifelong Learners
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0.2, filter: "blur(10px)" }}
        animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
        transition={{ ease: easeIn, duration: 0.8 }}
        className="flex flex-col md:flex-row p-4 md:border-2 gap-3 md:gap-8 items-center justify-center rounded-xl md:border-b-4 md:border-r-4">
        <input
          type="text"
          placeholder="Enter your desired skill for learing..."
          className="border-2 border-b-4 border-r-4 p-4 rounded-xl"
          value={title}
          onChange={e => setTitle(e.target.value)}
          disabled={loading}
        />
        <button
          className="p-3 border-2 border-b-4 border-r-4 active:border-b-3 active:border-r-3 rounded-xl bg-blue-200"
          onClick={handleGenerate}
          disabled={loading}
        >
          {loading ? "Generating..." : "Generate"}
        </button>
      </motion.div>
    </div>
  )
}

export default Hero