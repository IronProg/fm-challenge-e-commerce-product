import { createContext, useEffect, useState } from "react";

const CartContext = createContext({
  cart: [],
  totalItens: null,
  addItem: (newItem) => {},
  removeItem: (id) => {}
})

export function CartContextProvider(props) {
  const [cart, setCart] = useState([]);
  const [totalItens, setTotalItens] = useState(0);

  function addItemHandler(newItem) {
    const currentItemIndex = cart.findIndex(item => item.id === newItem.id);

    console.log(currentItemIndex)

    if (currentItemIndex < 0) {
      setCart(prev => [...prev, newItem]);
      setTotalItens(prev => prev + newItem.quantity)
    } else {
      console.log('jksfhdjsd')
      const newQuantity = cart[currentItemIndex].quantity + newItem.quantity;

      const newCart = [...cart];
      newCart[currentItemIndex].quantity = newQuantity;

      setCart(newCart);
      setTotalItens(prev => prev + newItem.quantity)
    };

  }

  function removeItemHandler(id) {
    const currentItem = cart.find(item => item.id === id);

    if (currentItem)  {
      const quantityToRemove = currentItem.quantity;
      const newCart = cart.filter(item => item.id !== id);

      setCart(newCart);
      setTotalItens(prev => prev - quantityToRemove)
    };
  }

  const context = {
    cart: cart,
    totalItens: totalItens,
    addItem: addItemHandler,
    removeItem: removeItemHandler
  };

  return (
    <CartContext.Provider value={context}>
      {props.children}
    </CartContext.Provider>
  )
}

export default CartContext;
