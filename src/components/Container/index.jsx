import style from "./Container.module.scss";

const Container = ({ children, size }) => {
  return (
    <div
      className={`${style["container"]}  ${
        size === "full" ? style["container--full"] : ""
      } `}
    >
      {children}
    </div>
  );
};

export default Container;
