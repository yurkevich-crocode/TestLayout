import Container from "@/components/Container";
import style from "./Hero.module.scss";
import Title from "@/components/Title";
import NavBarLeft from "../NavBarLeft";
import NavBarRight from "../NavBarRight";

const Hero = () => {
  return (
    <div className={style["hero"]}>
      <Container>
        <div className={style["hero__wrapper"]}>
          <div className={style["hero__leftside"]}>
            <NavBarLeft />
            <div className={style["hero__title-wrapper"]}>
              <p className={style["hero__subtitle"]}>Building Your Dreams</p>
              <Title
                text={"Real Estate in Dubai: Ideal for Living and Investing"}
                h1={true}
              />
            </div>
          </div>
          <div className={style["hero__image-wrapper"]}>
            <NavBarRight />
            <img
              src="/images/Hero.png"
              className={style["hero__image"]}
              alt=""
            />
            <div className={style["hero__image-btn"]}>
              <div className={style["hero__image-btn-wrapper"]}>
                <span className={style["hero__image-text"]}>
                  catalog <br />
                  download
                </span>
                <span className={style["hero__image-icon"]}>
                  <img src="/icons/download.svg" alt="arrow" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
