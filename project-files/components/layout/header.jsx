import Image from "next/image";
import { useContext, useState } from "react";
import CartContext from "../../store/cart-context";
import IconCart from "../svg/icon-cart";
import IconClose from "../svg/icon-close";
import IconMenu from "../svg/icon-menu";
import Logo from "../svg/logo";
import Cart from "./cart/cart";
import Drawer from "./drawer";
import classes from './header.module.css'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const cartCtx = useContext(CartContext);

  const pageLinks = (
    <>
      <li>
        <a href="#">Collections</a>
      </li>
      <li>
        <a href="#">Men</a>
      </li>
      <li>
        <a href="#">Women</a>
      </li>
      <li>
        <a href="#">About</a>
      </li>
      <li>
        <a href="#">Contact</a>
      </li>
    </>
  );

  return (
    <nav className={classes['nav-container']}>
      <div className={classes['nav-section-one']}>
        <button className={classes.menu} onClick={() => setIsOpen(!isOpen)}>
          <IconMenu />
        </button>
        <Logo />
        <ul className={classes.links}>
          {pageLinks}
        </ul>
      </div>
      <div className={classes['nav-section-two']}>
        <button onClick={() => setShowCart(!showCart)}>
          <IconCart />
          {cartCtx.totalItens > 0 && (
            <div className={classes.badge}>
              {cartCtx.totalItens}
            </div>
          )}
        </button>
        <div className={classes.avatar}>
          <Image src={"/images/image-avatar.png"} alt='Fall style sneakers' height={40} width={40} />
        </div>
      </div>
      {isOpen && (
        <Drawer links={pageLinks} onClose={() => setIsOpen(false)} />
      )}
      {showCart && <Cart />}
    </nav>
  );
}
