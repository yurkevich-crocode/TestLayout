"use client";

import React, { useRef, useLayoutEffect } from "react";
import Container from "@/components/Container";
import style from "./Video.module.scss";
import Button from "@/components/Button";
import {
  motion,
  useAnimation,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";
import gsap from "gsap";

const Video = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.4, 1]);
  const borderRadius = useTransform(scrollYProgress, [0, 1], ["30px", "0px"]);

  const controls = useAnimation();
  const ref = useRef(null);
  const textRef = useRef(null);
  const inView = useInView(ref, { rootMargin: "-200px 0px 0px 0px" });

  React.useEffect(() => {
    if (inView) {
      controls.start({ scale: 1 });
    }
  }, [inView, controls]);

  useLayoutEffect(() => {
    const textElement = textRef.current;
    const spanWidth = textElement.clientWidth;

    textElement.innerHTML += textElement.innerHTML;

    gsap.fromTo(
      textElement,
      { x: 0 },
      { x: -spanWidth, duration: 40, repeat: -1, ease: "none" }
    );
  }, []);

  return (
    <div className={style["video"]} ref={ref}>
      <Container size={"full"}>
        <div className={style["video__wrapper"]}>
          <motion.div
            className={style["video__btns"]}
            initial={{ scale: 0 }}
            animate={controls}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
          >
            <Button
              rounded={true}
              bg_color={"black"}
              svg={"/icons/house2.svg"}
            />
            <Button rounded={true} bg_color={"black"} svg={"/icons/key.svg"} />
          </motion.div>
          <motion.div className={style["video__item"]}>
            <motion.div
              className={style["video__text-wrapper"]}
              style={{ scale, borderRadius }}
            >
              <p
                ref={textRef}
                className={style["video__text"]}
                style={{
                  whiteSpace: "nowrap",
                }}
              >
                <span className={style["video__ecclipse"]}></span>
                <span>Apartments with an initial payment from $25,000</span>
                <span className={style["video__ecclipse"]}></span>
                <span>interest-free</span>
                <span className={style["video__ecclipse"]}></span>
                <span>installment plan up to 8 years</span>
              </p>
            </motion.div>
            <motion.video
              autoPlay
              muted
              loop
              className={style["video__src"]}
              style={{ scale, borderRadius }}
            >
              <source src="/dubai.mp4" type="video/mp4" />
            </motion.video>
          </motion.div>
        </div>
      </Container>
    </div>
  );
};

export default Video;
