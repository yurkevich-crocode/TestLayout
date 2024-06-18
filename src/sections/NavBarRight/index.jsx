"use client";

import Button from "@/components/Button";
import style from "./NavBarRight.module.scss";
import { motion } from "framer-motion";

const NavBarRight = () => {
  return (
    <div className={style["nav-bar-right"]}>
      <div className={style["nav-bar-right__links"]}>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: "easeInOut" }}
        >
          More than 1500 real estate properties
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: "easeInOut" }}
        >
          From $145,000 with a yield of 10% per annum
        </motion.p>
      </div>
      <div className={style["nav-bar-right__btns"]}>
        <Button svg={"/icons/heart.svg"} bg_color={"transparent"} />
        <Button svg={"/icons/home.svg"} />
      </div>
    </div>
  );
};

export default NavBarRight;
