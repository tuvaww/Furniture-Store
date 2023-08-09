import { useEffect, useState } from "react";
import { getStorage } from "../../../services/helperFunctions/cartServices/cartServices";
import { ICart } from "../../../models/cart/ICart";
import "../../../styles/checkout/checkoutSummary/checkoutSummary.scss";

export const CheckoutSummary = () => {
  const [cart, setCart] = useState<ICart[]>([]);

  useEffect(() => {
    const cartFromStorage = getStorage();
    setCart(cartFromStorage);
  }, []);

  const getTotPrice = (qty: number, price: number) => {
    const totPrice = qty * price;

    return totPrice;
  };

  const summaryJsx = cart.map((c: ICart) => {
    return (
      <div className='summaryItemContainer'>
        <img
          src={c.item.images[0]}
          alt={c.item.title}
          className='summaryItemImg'
        />
        <div className='summaryItemInfoContainer'>
          <p className='summaryItemTitle'>{c.item.title}</p>
          <div className='summaryItemInfo'>
            <p>Qty:</p>
            <p>{c.qty}</p>
          </div>
          <div className='summaryItemInfo'>
            <p>Price:</p>
            <p>{getTotPrice(c.qty, c.item.price)} $</p>
          </div>
        </div>
      </div>
    );
  });

  return (
    <section className='checkoutSummaryContainer'>
      <div className='summaryHeadingContainer'>
        <h6 className='summaryHeading'>Summary</h6>
      </div>

      <div className='summaryContentContainer'>{summaryJsx}</div>
    </section>
  );
};
