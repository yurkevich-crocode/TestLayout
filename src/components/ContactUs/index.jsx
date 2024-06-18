"use client";

import { motion } from "framer-motion";
import style from "./ContactUs.module.scss";
import Button from "@/components/Button";
import { useEffect, useState } from "react";

const ContactUs = () => {
  const [animationStarted, setAnimationStarted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationStarted(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);
  return (
    <motion.div
      className={style["contact-us-btn"]}
      initial={{ opacity: 0, y: 0, width: "max-content" }}
      animate={
        animationStarted ? { opacity: 1, y: 0, width: "max-content" } : {}
      }
    >
      <Button svg={"/icons/mobile.svg"} rounded={true} />
      <motion.span
        initial={{ opacity: 0, y: 0, width: "max-content" }}
        animate={
          animationStarted ? { opacity: 1, y: 0, width: "max-content" } : {}
        }
        transition={{ duration: 0.75, ease: "easeInOut" }}
      >
        Contact Us Now
      </motion.span>
    </motion.div>
  );
};

export default ContactUs;
