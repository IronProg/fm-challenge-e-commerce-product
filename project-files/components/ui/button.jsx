import classes from "./button.module.css";

export default function Button(props) {
  return (
    <button className={classes.button} onClick={props.onClick}>
      <div className={classes.content}>
        {props.children}
      </div>
    </button>
  );
}
