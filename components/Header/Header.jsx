import style from "./Header.module.css";

export const Header = () => {
  return (
    <div className={style.mainContainer}>
      <img
        className={style.logo}
        src="/images/logo-dani.png"
        alt="Danielle logo"
      />
    </div>
  );
};
