import style from "./Button.module.scss";

const Button = ({ svg, bg_color, fill_color }) => {
  return (
    <button
      className={
        bg_color === "transparent"
          ? `${style["button"]} ${style["button--transparent"]}`
          : `${style["button"]}`
      }
    >
      <img src={svg} alt={svg} />
    </button>
  );
};

export default Button;
