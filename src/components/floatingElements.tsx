import React from "react";
import { motion } from "framer-motion";

interface FloatingElementProps {
  src: string;
  title: string;
  rotation?: number;
  className?: string;
  width?: number;
  height?: number;
}

const FloatingElement: React.FC<FloatingElementProps> = ({
  src,
  title,
  rotation = 0,
  className = "",
  width,
  height,
}) => (
  <motion.img
    src={src}
    alt={title}
    title={title}
    className={className}
    width={width}
    height={height}
    style={{ rotate: `${rotation}deg` }}
    animate={{
      y: [0, -4, 0, 0, 0],
    }}
    transition={{
      duration: 4,
      repeat: Infinity,
      repeatType: "loop",
      ease: "easeInOut",
    }}
  />
);

export default FloatingElement;