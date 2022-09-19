import { useContext, useState } from "react";
import CartContext from "../../store/cart-context";
import IconCartWhite from "../svg/icon-cart-white";
import IconMinus from "../svg/icon-minus";
import IconPlus from "../svg/icon-plus";
import Button from "../ui/button";

import classes from "./product-info.module.css";

export default function ProductInfo(props) {
  const { product } = props;
  const [quantity, setQuantity] = useState(0);
  const cartCtx = useContext(CartContext);

  function quantityHandler(operand) {
    const result = quantity + operand;
    if (result >= 0) {
      setQuantity(result);
    }
  }

  function addToCartHandler() {
    if (quantity > 0) {
      const item = {
        ...product,
        quantity,
      };
      console.log(item);
      cartCtx.addItem(item);
    }
  }

  return (
    <div className={classes.info}>
      <p className={classes.company}>SNEAKER COMPANY</p>
      <h1 className={classes.name}>{product.name}</h1>
      <p className="text-cDarkGrayishBlue">{product.description}</p>
      <div className="flex flex-col">
        <div className={classes.prices}>
          <div className={classes["final-price"]}>
            <h2 className="text-2xl font-c700">
              ${product.actualPrice.toFixed(2)}
            </h2>
            <p className={classes.discount}>
              {product.discount}
            </p>
          </div>
          <p className={classes['initial-price']}>
            ${product.price.toFixed(2)}
          </p>
        </div>
        <div className={classes.actions}>
          <div className={classes.quantity}>
            <button onClick={() => quantityHandler(-1)} aria-label='Reduce quantity'>
              <IconMinus />
            </button>
            <p className="font-c700">{quantity}</p>
            <button onClick={() => quantityHandler(+1)} aria-label='Add quantity'>
              <IconPlus />
            </button>
          </div>
          <Button onClick={addToCartHandler} aria-label='Add to Cart'>
            <IconCartWhite /> Add to cart
          </Button>
        </div>
      </div>
    </div>
  );
}
