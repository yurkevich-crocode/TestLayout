"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import style from "./Title.module.scss";

const Title = ({ text, h1 = false, bold = false }) => {
  const [animationStarted, setAnimationStarted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationStarted(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const lines = text.split("\n");

  return h1 ? (
    <motion.h1
      className={`${style["title"]} ${style["title--center"]}`}
      initial={{ opacity: 0, y: 40 }}
      animate={animationStarted ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, ease: "easeInOut" }}
    >
      {lines.map((line, index) => (
        <motion.span
          key={index}
          style={{ display: "block" }}
          initial={{ opacity: 0, y: 20 }}
          animate={animationStarted ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75, ease: "easeInOut", delay: index * 0.1 }}
        >
          {line}
        </motion.span>
      ))}
    </motion.h1>
  ) : (
    <p>{text}</p>
  );
};

export default Title;
