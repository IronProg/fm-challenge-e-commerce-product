import classes from "./button.module.css";

export default function Button(props) {
  return (
    <button className={classes.button} onClick={props.onClick} aria-label={props['aria-label']}>
      <div className={classes.content}>
        {props.children}
      </div>
    </button>
  );
}
