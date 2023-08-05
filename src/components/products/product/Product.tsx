import {
  ArrowDownUp,
  ArrowLeftRight,
  ArrowsAngleExpand,
  BagPlus,
  Heart,
} from "react-bootstrap-icons";
import { IItem } from "../../../models/items/IItem";
import "../../../styles/products/product.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { handleAddToCart } from "../../../services/helperFunctions/addToCart/addToCart";
import { ICart } from "../../../models/cart/ICart";

interface IProps {
  product: IItem;
}
export const Product = (props: IProps) => {
  const navigate = useNavigate();
  const [showMeasurement, setShowMeasurement] = useState(false);
  const [timeoutId, setTimeoutId] = useState<any>();

  const getColors = props.product.colors.map((c: string, i: number) => {
    if (i > 2) {
      return;
    } else {
      if (i > 0 && i < 3) {
        return <div>+</div>;
      } else {
        return (
          <div
            className='softShadow'
            key={i}
            style={{
              borderRadius: "50%",
              backgroundColor: c,
              height: "14px",
              width: "14px",
            }}
          ></div>
        );
      }
    }
  });

  const startTimeout = () => {
    const time = setTimeout(() => {
      setShowMeasurement(true);
    }, 2000);

    setTimeoutId(time);
  };

  const cancelTimeout = () => {
    clearTimeout(timeoutId);
    setShowMeasurement(false);
  };

  const handleShowProductDetails = () => {
    navigate(`/products/product/${props.product.id}`);
  };

  const handleAddItemToCart = () => {
    const cartItem: ICart = { item: props.product, qty: 1 };

    handleAddToCart(cartItem);
  };

  return (
    <section
      className='productContainer '
      onMouseEnter={startTimeout}
      onMouseLeave={cancelTimeout}
    >
      <div className='productImage' onClick={handleShowProductDetails}>
        <Heart className='productHeartIcon' />
        <img
          className='softShadow'
          src={props.product.images[0]}
          alt={props.product.title}
        />
      </div>
      <div className='productInfoContainer'>
        <p>{props.product.title}</p>
        <div>{getColors}</div>
        <div className='d-flex flex-row align-items-center justify-content-between'>
          <p>{props.product.price} €</p>
          <BagPlus
            style={{ fontSize: "15pt", cursor: "pointer" }}
            onClick={handleAddItemToCart}
          />
        </div>
      </div>

      {showMeasurement && (
        <div className='productMeasurementContainer'>
          <p>
            <ArrowDownUp /> {props.product.height}
          </p>
          <p>
            <ArrowLeftRight /> {props.product.width}
          </p>
          <p>
            <ArrowsAngleExpand /> {props.product.depth}
          </p>
        </div>
      )}
    </section>
  );
};
