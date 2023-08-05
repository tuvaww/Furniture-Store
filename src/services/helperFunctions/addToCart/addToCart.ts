import { ICart } from "../../../models/cart/ICart";
import { IItem } from "../../../models/items/IItem";

export const handleAddToCart = (item: ICart) => {
  let cart: ICart[] = [];

  const cartLocalStorage = window.localStorage.getItem("cart");
  if (cartLocalStorage) {
    const parseLS: ICart[] = JSON.parse(cartLocalStorage);
    cart = parseLS;
    cart.push(item);
    window.localStorage.setItem("cart", JSON.stringify(cart));
  }
};
