"use client";

import { motion, useAnimation } from "framer-motion";
import style from "./ContactUs.module.scss";
import Button from "@/components/Button";
import { useEffect } from "react";

const ContactUs = () => {
  const backgroundControls = useAnimation();
  const textControls = useAnimation();

  useEffect(() => {
    const width = window.innerWidth;
    const targetWidth = width <= 1200 ? "171px" : "196px"; // Установка ширины на основе ширины экрана

    const sequence = async () => {
      await backgroundControls.start({
        opacity: 1,
        backgroundColor: "black",
        width: ["49px", targetWidth],
        transition: { duration: 1, ease: "easeInOut" },
      });

      await textControls.start({
        opacity: 1,
        color: "white",
        transition: { delay: 0.25, duration: 0.75, ease: "easeInOut" },
      });
    };

    const timer = setTimeout(() => {
      sequence();
    }, 500);

    return () => clearTimeout(timer);
  }, [backgroundControls, textControls]);

  return (
    <motion.div
      className={style["contact-us-btn"]}
      initial={{ opacity: 0, backgroundColor: "black", width: "49px" }}
      animate={backgroundControls}
    >
      <Button svg={"/icons/mobile.svg"} rounded={true} />
      <motion.span
        initial={{ opacity: 0 }}
        animate={textControls}
        transition={{
          opacity: { duration: 0 },
          color: { delay: 0.25, duration: 0.75, ease: "easeInOut" },
        }}
      >
        Contact Us Now
      </motion.span>
    </motion.div>
  );
};

export default ContactUs;
