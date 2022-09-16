import IconClose from '../svg/icon-close';
import classes from './drawer.module.css'
export default function Drawer(props) {
  return (
    <div className={classes.drawer} onClick={props.onClose}>
      <div className={classes["drawer-content"]}>
        <button onClick={props.onClose} className="mb-12">
          <IconClose />
        </button>
        <ul
          className={classes["drawer-links"]}
          onClick={(e) => e.stopPropagation()}
        >
          {props.links}
        </ul>
      </div>
    </div>
  );
}
