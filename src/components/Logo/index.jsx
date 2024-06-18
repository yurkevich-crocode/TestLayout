"use client";

import { motion } from "framer-motion";
import style from "./Logo.module.scss";
import { useEffect, useState } from "react";

const Logo = () => {
  const [animationStarted, setAnimationStarted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationStarted(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      className={style["logo__image"]}
      initial={{ opacity: 0, y: 40 }}
      animate={animationStarted ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, ease: "easeInOut" }}
    >
      <img src="/images/Logo.png" alt="" />
    </motion.div>
  );
};

export default Logo;
