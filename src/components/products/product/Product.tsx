import {
  ArrowDownUp,
  ArrowLeftRight,
  ArrowsAngleExpand,
  Heart,
} from "react-bootstrap-icons";
import { IItem } from "../../../models/items/IItem";
import "../../../styles/products/product.scss";
import { useState } from "react";

interface IProps {
  product: IItem;
}
export const Product = (props: IProps) => {
  //console.log("product", props.product);
  const [showMeasurement, setShowMeasurement] = useState(false);

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

  return (
    <section
      className='productContainer '
      onMouseEnter={() => setShowMeasurement(true)}
      onMouseLeave={() => setShowMeasurement(false)}
    >
      <div className='productImage'>
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
        <p>{props.product.price} €</p>
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
