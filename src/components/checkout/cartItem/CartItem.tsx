import { Dash, Heart, Plus, Trash3 } from "react-bootstrap-icons";
import { ICart } from "../../../models/cart/ICart";
import { useEffect, useState } from "react";

interface IProps {
  cartItem: ICart;
  handleTotalSum: (price: number, add: boolean) => void;
}
export const CartItem = (props: IProps) => {
  const { cartItem } = props;
  const [qty, setQty] = useState(cartItem.qty);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const sum = cartItem.qty * cartItem.item.price;
    setTotalPrice(sum);
  }, []);

  const handleQty = (type: string) => {
    if (type === "minus") {
      if (qty - 1 >= 0) {
        setQty(qty - 1);
        setTotalPrice(totalPrice - cartItem.item.price);
        props.handleTotalSum(cartItem.item.price, false);
      } else {
        return;
      }
    }
    if (type === "plus") {
      setQty(qty + 1);
      setTotalPrice(totalPrice + cartItem.item.price);
      props.handleTotalSum(cartItem.item.price, true);
    }
  };

  return (
    <div key={cartItem.item.id} className='cartItemContainer'>
      <img
        src={cartItem.item.images[0]}
        alt={cartItem.item.title}
        className='cartItemImg'
      />
      <div className='cartItemInfoConatiner'>
        <div className='cartItemTopInfoContainer'>
          <p>{cartItem.item.title}</p>

          <div className='iconsContainer'>
            <Heart />
            <Trash3 />
          </div>
        </div>

        <div className='cartItemInfo'>
          <p>Article number:</p>
          <p>{cartItem.item.id}</p>
        </div>

        <div className='cartItemInfo'>
          <p>Price:</p>
          <p>{totalPrice} $</p>
        </div>

        <div className='handleQty'>
          <Dash className='qtyHandlers' onClick={() => handleQty("minus")} />
          <div className='displayQty'>
            <p>{qty}</p>
          </div>
          <Plus className='qtyHandlers' onClick={() => handleQty("plus")} />
        </div>
      </div>
    </div>
  );
};
