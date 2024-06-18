import style from "./Title.module.scss";

const Title = ({ text, h1 = false, bold = false }) => {
  return h1 ? (
    <h1 className={`${style["title"]} ${style["title--center"]}`}>{text}</h1>
  ) : (
    <p>{text}</p>
  );
};

export default Title;
