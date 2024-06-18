"use client";
import { motion } from "framer-motion";
import style from "./Explore.module.scss";
import { useEffect, useState } from "react";

const Explore = () => {
  const [animationStarted, setAnimationStarted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationStarted(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={style["explore"]}>
      <motion.span
        initial={{ opacity: 0, x: -40 }}
        animate={animationStarted ? { opacity: 1, x: 0 } : {}}
      >
        Explore All Our Properties
      </motion.span>
      <motion.div
        className={style["explore__img-wrapper"]}
        initial={{ scale: 0 }}
        animate={animationStarted ? { scale: 1 } : {}}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
      >
        <img
          src="/images/Explore.png"
          alt=""
          className={style["explore__img"]}
        />
        <motion.span
          className={style["explore__arrow"]}
          initial={{ scale: 0 }}
          animate={animationStarted ? { scale: 1 } : {}}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
        >
          <img src="/icons/arrow.svg" alt="" />
        </motion.span>
      </motion.div>
    </div>
  );
};

export default Explore;
