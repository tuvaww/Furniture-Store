import { ICart } from "../../../models/cart/ICart";
import { IItem } from "../../../models/items/IItem";

const setStorage = (cart: ICart[]) => {
  window.localStorage.setItem("cart", JSON.stringify(cart));
};

export const handleAddToCart = (item: ICart) => {
  let cart: ICart[] = [];

  const cartLocalStorage = window.localStorage.getItem("cart");
  if (cartLocalStorage) {
    const parseLS: ICart[] = JSON.parse(cartLocalStorage);
    cart = parseLS;

    if (cart.length) {
      cart.map((c) => {
        if (c.id === item.id) {
          c.qty = c.qty + 1;

          setStorage(cart);
          return;
        } else {
          setStorage([...cart, item]);
          return;
        }
      });
    } else {
      cart.push(item);
      setStorage(cart);
    }
  }
};

export const handleDeleteFromCart = (id: string) => {
  const cartLocalStorage = window.localStorage.getItem("cart");
  if (cartLocalStorage) {
    const parseLS: ICart[] = JSON.parse(cartLocalStorage);
    const cart = parseLS;
    cart.map((c) => {
      if (c.id === id) {
        const index = cart.indexOf(c);
        cart.splice(index, 1);
        setStorage(cart);
      }
    });
  }
};
