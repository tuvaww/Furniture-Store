import { ICart } from "../../../models/cart/ICart";
import { IItem } from "../../../models/items/IItem";

const setStorage = (cart: ICart[]) => {
  window.localStorage.setItem("cart", JSON.stringify(cart));
};

export const getStorage = () => {
  const cartLocalStorage = window.localStorage.getItem("cart");
  const parseLS: ICart[] = JSON.parse(
    cartLocalStorage ? cartLocalStorage : "[]"
  );

  return parseLS;
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

export const handleQtyCart = (id: string, add: boolean) => {
  const cartLocalStorage = window.localStorage.getItem("cart");
  if (cartLocalStorage) {
    const parseLS: ICart[] = JSON.parse(cartLocalStorage);
    const cart = parseLS;
    console.log("add", add);
    cart.map((c) => {
      if (c.id === id) {
        if (add) {
          console.log("true");
          c.qty = c.qty + 1;
        } else {
          console.log("false");

          if (c.qty - 1 <= 0) {
            const index = cart.indexOf(c);
            cart.splice(index, 1);
          } else {
            c.qty = c.qty - 1;
          }
        }
        setStorage(cart);
      }
    });
  }
};
