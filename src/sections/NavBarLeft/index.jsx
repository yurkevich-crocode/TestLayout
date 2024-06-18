import Button from "@/components/Button";
import style from "./NavBar.module.scss";
import Logo from "@/components/Logo";

const NavBarLeft = () => {
  return (
    <div className={style["nav-bar"]}>
      <Logo />
      <div className={style["nav-bar__btns"]}>
        <Button svg={"/icons/map.svg"} />
        <Button svg={"/icons/menu.svg"} />
      </div>
    </div>
  );
};

export default NavBarLeft;
