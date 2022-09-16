import Image from "next/image";
import IconDelete from "../../svg/icon-delete";

import classes from "./cart-item.module.css";

export default function CartItem(props) {
  const { data } = props;
  const finalPrice = data.actualPrice * data.quantity;
  return (
    <div className={classes.item}>
      <div className={classes.image}>
        <Image src={`${data.imgUrl}1-thumbnail.jpg`} alt='Fall style sneakers' width={50} height={50} />
      </div>
      <div className={classes.info}>
        <p className="text-cGrayishBlue">{data.name}</p>
        <p className="text-cGrayishBlue">
          ${data.actualPrice.toFixed(2)} x {data.quantity}{" "}
          <b className="text-cBlack">${finalPrice.toFixed(2)}</b>
        </p>
      </div>
      <button className="flex items-center" onClick={props.onDelete}>
        <IconDelete />
      </button>
    </div>
  );
}
