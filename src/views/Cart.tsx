import { useEffect, useState } from "react";
import { ICart } from "../models/cart/ICart";
import "../styles/cart/cart.scss";
import { CartItem } from "../components/cart/cartItem/CartItem";

export const Cart = () => {
  const [cart, setCart] = useState<ICart[]>([]);
  const [totalSum, setTotalSum] = useState(0);
  const [hoverOnButton, setHoverOnButton] = useState(false);
  const [updateCart, setUpdateCart] = useState(false);

  useEffect(() => {
    const cartLocalseStorage = window.localStorage.getItem("cart");
    if (cartLocalseStorage) {
      const cartParsed = JSON.parse(cartLocalseStorage);
      setCart(cartParsed);
    }
    setUpdateCart(false);
  }, [updateCart]);

  useEffect(() => {
    if (cart) {
      let price = 0;
      cart.map((item) => {
        let sum = item.qty * item.item.price;
        price = price + sum;
      });
      setTotalSum(price);
    }
  }, [cart]);

  const handleUpdateCart = () => {
    setUpdateCart(true);
  };

  const handleTotalSum = (price: number, add: boolean) => {
    if (add) {
      setTotalSum(totalSum + price);
    } else {
      setTotalSum(totalSum - price);
    }
  };

  const cartJSX = cart.map((cartItem) => {
    return (
      <CartItem
        handleUpdateCart={handleUpdateCart}
        key={cartItem.item.id}
        cartItem={cartItem}
        handleTotalSum={handleTotalSum}
      />
    );
  });

  return (
    <main className='checkoutMain'>
      <div className='headingContainer'>
        <h4>Cart</h4>
      </div>
      <div className='contentContainer'>
        <section className='cartContainer'>{cartJSX}</section>

        <div className='proceedCheckoutContainer'>
          <div className='totalPriceContainer'>
            <h3>Total sum: </h3>
            <h3>{totalSum} $</h3>
          </div>

          <button
            onMouseEnter={() => setHoverOnButton(true)}
            onMouseLeave={() => setHoverOnButton(false)}
            style={{
              backgroundColor: `${
                hoverOnButton ? "#b5d5c5" : "rgba(181, 213, 197, 0.7)"
              }`,
              color: `${hoverOnButton ? "white" : "black"}`,
            }}
          >
            Proceed To Payment
          </button>
        </div>
      </div>
    </main>
  );
};
