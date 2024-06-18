import Button from "@/components/Button";
import style from "./NavBarRight.module.scss";

const NavBarRight = () => {
  return (
    <div className={style["nav-bar-right"]}>
      <div className={style["nav-bar-right__links"]}>
        <p>More than 1500 real estate properties</p>
        <p>From $145,000 with a yield of 10% per annum</p>
      </div>
      <div className={style["nav-bar-right__btns"]}>
        <Button svg={"/icons/heart.svg"} bg_color={"transparent"} />
        <Button svg={"/icons/home.svg"} />
      </div>
    </div>
  );
};

export default NavBarRight;
