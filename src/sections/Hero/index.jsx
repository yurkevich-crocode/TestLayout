"use client";

import React, { useState, useEffect } from "react";
import Container from "@/components/Container";
import style from "./Hero.module.scss";
import Title from "@/components/Title";
import NavBarLeft from "../NavBarLeft";
import NavBarRight from "../NavBarRight";
import ContactUs from "@/components/ContactUs";
import Explore from "@/components/Explore";
import { motion } from "framer-motion";

const Hero = () => {
  const [animationStarted, setAnimationStarted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationStarted(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={style["hero"]}>
      <Container>
        <div className={style["hero__wrapper"]}>
          <div className={style["hero__leftside"]}>
            <NavBarLeft />
            <div className={style["hero__title-wrapper"]}>
              <motion.p
                className={style["hero__subtitle"]}
                initial={{ opacity: 0, y: -20 }}
                animate={animationStarted ? { opacity: 1, y: 0 } : {}}
                transition={
                  animationStarted ? { duration: 0.75, ease: "easeInOut" } : {}
                }
              >
                Building Your Dreams
              </motion.p>
              <Title
                text={
                  "Real Estate in Dubai:\n Ideal for Living and \n Investing"
                }
                h1={true}
              />
            </div>
            <div className={style["hero__bottom"]}>
              <ContactUs />
              <Explore />
            </div>
          </div>
          <div className={style["hero__image-wrapper"]}>
            <NavBarRight />
            <motion.img
              initial={{ opacity: 0, scale: 1.2 }}
              animate={animationStarted ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.75, ease: "easeInOut" }}
              src="/images/Hero.png"
              className={style["hero__image"]}
              alt=""
            />
            <motion.div
              className={style["hero__image-btn"]}
              initial={{ opacity: 0, scale: 0 }}
              animate={animationStarted ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.75, ease: "easeInOut" }}
            >
              <div className={style["hero__image-btn-wrapper"]}>
                <span className={style["hero__image-text"]}>
                  catalog <br />
                  download
                </span>
                <span className={style["hero__image-icon"]}>
                  <img src="/icons/download.svg" alt="arrow" />
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
