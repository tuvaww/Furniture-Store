import { Dash, Heart, Plus, Trash3 } from "react-bootstrap-icons";
import { ICart } from "../../../models/cart/ICart";
import { useEffect, useState } from "react";
import {
  handleDeleteFromCart,
  handleQtyCart,
} from "../../../services/helperFunctions/cartServices/cartServices";

interface IProps {
  cartItem: ICart;
  handleUpdateCart: () => void;
}
export const CartItem = (props: IProps) => {
  const { cartItem } = props;
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const sum = cartItem.qty * cartItem.item.price;
    setTotalPrice(sum);
  }, [cartItem.qty]);

  const handleQty = (add: boolean) => {
    handleQtyCart(cartItem.id, add);
    props.handleUpdateCart();
  };

  const handleDeleteItemFromCart = () => {
    handleDeleteFromCart(cartItem.id);
    props.handleUpdateCart();
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
            <Trash3 className='cartIcon' onClick={handleDeleteItemFromCart} />
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
          <Dash className='qtyHandlers' onClick={() => handleQty(false)} />
          <div className='displayQty'>
            <p>{cartItem.qty}</p>
          </div>
          <Plus className='qtyHandlers' onClick={() => handleQty(true)} />
        </div>
      </div>
    </div>
  );
};
