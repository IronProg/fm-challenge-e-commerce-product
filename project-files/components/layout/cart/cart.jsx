import { useContext } from "react";
import CartContext from "../../../store/cart-context";
import Button from "../../ui/button";
import CartItem from "./cart-item";

import classes from "./cart.module.css";

export default function Cart() {
  const cartCtx = useContext(CartContext);

  return (
    <div className={classes.cart}>
      <div className={classes.header}>
        <p className="font-c700">Cart</p>
      </div>
      {cartCtx.cart && cartCtx.cart?.length > 0 ? (
        <div className={`${classes.body} h-auto`}>
          <ul className={classes.list}>
            {cartCtx.cart.map((item) => (
              <CartItem
                key={item.id}
                data={item}
                onDelete={cartCtx.removeItem.bind(null, item.id)}
              />
            ))}
          </ul>
          <Button>Checkout</Button>
        </div>
      ) : (
        <div className={`${classes.body} h-[70%]`}>
          <div className={classes['center-body']}>
            <p className="font-c700 text-cDarkGrayishBlue">
              Your cart is empty.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
