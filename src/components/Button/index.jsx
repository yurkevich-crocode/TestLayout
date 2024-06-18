"use client";

import { motion } from "framer-motion";
import style from "./Button.module.scss";
import { useEffect, useState } from "react";

const Button = ({ svg, bg_color, fill_color, rounded = false }) => {
  const [animationStarted, setAnimationStarted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationStarted(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0 }}
      animate={animationStarted ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.75, ease: "easeInOut" }}
      className={`
        ${style["button"]} 
        ${bg_color === "transparent" ? style["button--transparent"] : ""} 
        ${rounded ? style["button--rounded"] : ""}
        ${bg_color === "black" ? style["button--black"] : ""}
      `}
    >
      <img src={svg} alt={svg} />
    </motion.button>
  );
};

export default Button;
