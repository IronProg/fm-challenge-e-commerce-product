import classes from "./footer.module.css";

export default function Footer() {
  return (
    <div className={classes.attribution}>
      Challenge by{" "}
      <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">
        Frontend Mentor
      </a>
      . Coded by <a href="https://github.com/IronProg" target="_blank" rel="noreferrer">Iron Berny</a>.
    </div>
  );
}
