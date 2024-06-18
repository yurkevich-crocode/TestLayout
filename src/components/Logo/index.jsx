import style from "./Logo.module.scss";

const Logo = () => {
  return (
    <div className={style["logo__image"]}>
      <img src="/images/Logo.png" alt="" />
    </div>
  );
};

export default Logo;
